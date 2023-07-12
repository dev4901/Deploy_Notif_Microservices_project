FROM openjdk:17-alpine AS final
FROM maven:3.8.3-openjdk-17 as build
COPY . ./gateway
RUN rm -rf /root/.m2
WORKDIR ./gateway
#RUN microdnf install iputils procps
#RUN sed -i '0,/localhost/s//mongo_cont/' src/main/resources/application.properties
RUN sed -i 's/localhost/172.19.0.2/' src/main/resources/application.yml
RUN sed -i 's/lb:\/\/identity/http:\/\/172.19.0.6:8090/1; \
        s/lb:\/\/emailmicroservice/http:\/\/172.19.0.8:8081/1; \
        s/lb:\/\/smsmicroservice/http:\/\/172.19.0.9:8082/1; \
        s/lb:\/\/pushnotificationmicrosevice/http:\/\/172.19.0.10:8083/1 ' src/main/resources/application.yml
RUN mvn clean package
#CMD java -jar -Djdk.util.jar.enableMultiRelease=false target/EmailService-0.0.1-SNAPSHOT.jar

FROM final
COPY --from=build ./gateway/src/main/resources/application.* ./gateway_jar/
COPY --from=build ./gateway/target/Gateway-0.0.1-SNAPSHOT.jar ./gateway_jar/
WORKDIR ./gateway_jar
EXPOSE 8888
#CMD sh
CMD ["nohup","java","-jar", "-Djdk.util.jar.enableMultiRelease=false", "Gateway-0.0.1-SNAPSHOT.jar", "&"]
