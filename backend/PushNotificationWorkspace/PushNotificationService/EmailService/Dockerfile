FROM openjdk:17-alpine AS final
FROM maven:3.8.3-openjdk-17 as build
COPY . ./email
RUN rm -rf /root/.m2
WORKDIR ./email
#RUN microdnf install iputils procps
#RUN chmod u+x mvnw
RUN sed -i '0,/localhost/s//mongo_cont/' src/main/resources/application.properties
RUN sed -i 's/http:\/\/localhost/eureka_cont/; s/localhost/eureka_cont/' src/main/resources/application.yml
RUN mvn clean package
#EXPOSE 8081
#CMD java -jar -Djdk.util.jar.enableMultiRelease=false target/EmailService-0.0.1-SNAPSHOT.jar

FROM final
COPY --from=build /root/.m2 /root/.m2
COPY --from=build ./email/src/main/resources/application.* ./email_jar/
COPY --from=build ./email/target/EmailService-0.0.1-SNAPSHOT.jar ./email_jar/
WORKDIR ./email_jar
EXPOSE 8081
#CMD sh
CMD ["nohup","java","-jar", "-Djdk.util.jar.enableMultiRelease=false", "EmailService-0.0.1-SNAPSHOT.jar", "&"]
