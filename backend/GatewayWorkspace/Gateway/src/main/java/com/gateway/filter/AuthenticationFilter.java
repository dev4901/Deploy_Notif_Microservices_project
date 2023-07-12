package com.gateway.filter;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.cloud.gateway.filter.GatewayFilter;
import org.springframework.cloud.gateway.filter.factory.AbstractGatewayFilterFactory;
import org.springframework.http.HttpHeaders;
import org.springframework.http.server.reactive.ServerHttpRequest;
import org.springframework.stereotype.Component;

import com.gateway.utils.JwtUtill;

@Component
public class AuthenticationFilter extends AbstractGatewayFilterFactory<AuthenticationFilter.Config> {

	@Autowired
	RouteValidator routeValidator;

	@Autowired
	JwtUtill jwtUtill;

	public AuthenticationFilter() {
		super(Config.class);
		// TODO Auto-generated constructor stub
	}

	public static class Config {

	}

	@Override
	public GatewayFilter apply(Config config) {
		// TODO Auto-generated method stub
		return ((exchange, chain) -> {
			ServerHttpRequest request=null;
			if (routeValidator.isSecured.test(exchange.getRequest())) {
				if (!exchange.getRequest().getHeaders().containsKey(HttpHeaders.AUTHORIZATION)) {
					throw new RuntimeException("Header missing...");
				}
				String authHeader = exchange.getRequest().getHeaders().get(HttpHeaders.AUTHORIZATION).get(0);
				System.out.println(authHeader);
				if (authHeader != null && authHeader.startsWith("Bearer ")) {
					authHeader = authHeader.substring(7);
					System.out.println(authHeader);
				}
				try {
					System.out.println(authHeader);
					jwtUtill.validateToken(authHeader);
					request=exchange.getRequest().mutate().header("jwttoken", authHeader).build();
					System.out.println("request was passed the filter...");
				} catch (Exception e) {
					throw new RuntimeException("Authentication failed...");
				}
			}
			return chain.filter(exchange.mutate().request(request).build());
		});
	}

}
