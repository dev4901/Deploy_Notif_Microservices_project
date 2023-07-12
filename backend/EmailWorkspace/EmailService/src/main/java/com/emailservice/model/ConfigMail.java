package com.emailservice.model;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.data.mongodb.core.mapping.Document;

@Document("ConfigMail")
public class ConfigMail {

	private String host;
	private String port;
	private String smtpSslEnable;
	private String smtpSocketFactoryPort;
	private String smtpAuth;
	private String smtpStarttlsEnable;
	public String getHost() {
		return host;
	}
	public void setHost(String host) {
		this.host = host;
	}
	public String getPort() {
		return port;
	}
	public void setPort(String port) {
		this.port = port;
	}
	public String getSmtpSslEnable() {
		return smtpSslEnable;
	}
	public void setSmtpSslEnable(String smtpSslEnable) {
		this.smtpSslEnable = smtpSslEnable;
	}
	public String getSmtpSocketFactoryPort() {
		return smtpSocketFactoryPort;
	}
	public void setSmtpSocketFactoryPort(String smtpSocketFactoryPort) {
		this.smtpSocketFactoryPort = smtpSocketFactoryPort;
	}
	public String getSmtpAuth() {
		return smtpAuth;
	}
	public void setSmtpAuth(String smtpAuth) {
		this.smtpAuth = smtpAuth;
	}
	public String getSmtpStarttlsEnable() {
		return smtpStarttlsEnable;
	}
	public void setSmtpStarttlsEnable(String smtpStarttlsEnable) {
		this.smtpStarttlsEnable = smtpStarttlsEnable;
	}
	public ConfigMail(String host, String port, String smtpSslEnable, String smtpSocketFactoryPort, String smtpAuth,
			String smtpStarttlsEnable) {
		super();
		this.host = host;
		this.port = port;
		this.smtpSslEnable = smtpSslEnable;
		this.smtpSocketFactoryPort = smtpSocketFactoryPort;
		this.smtpAuth = smtpAuth;
		this.smtpStarttlsEnable = smtpStarttlsEnable;
	}
	public ConfigMail() {
		super();
	}
	@Override
	public String toString() {
		return "ConfigMail [host=" + host + ", port=" + port + ", smtpSslEnable=" + smtpSslEnable
				+ ", smtpSocketFactoryPort=" + smtpSocketFactoryPort + ", smtpAuth=" + smtpAuth
				+ ", smtpStarttlsEnable=" + smtpStarttlsEnable + "]";
	}
	
	
}
