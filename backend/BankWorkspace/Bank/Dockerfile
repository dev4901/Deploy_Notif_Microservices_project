FROM openjdk:17-alpine AS final
FROM maven:3.8.3-openjdk-17 as build
COPY . ./code
RUN rm -rf /root/.m2
WORKDIR ./code
#RUN microdnf install iputils procps
RUN sed -i '0,/localhost/s//172.19.0.3/' src/main/resources/application.properties
RUN sed -i 's/localhost:3000/172.19.0.7:3000/; s/localhost:8888/172.19.0.4:8888/' src/main/java/com/bank/controller/BankController.java 
RUN sed -i 's/localhost:8888/172.19.0.4:8888/' src/main/java/com/bank/externalservice/PNService.java
#RUN sed -i 's/localhost/172.19.0.2/' src/main/resources/application.properties
RUN mvn clean package
#CMD java -jar -Djdk.util.jar.enableMultiRelease=false target/EmailService-0.0.1-SNAPSHOT.jar

FROM final
COPY --from=build ./code/src/main/resources/application.* ./jar/
COPY --from=build ./code/target/Bank-0.0.1-SNAPSHOT.jar ./jar/
WORKDIR ./jar
EXPOSE 8085
#CMD sh
CMD ["nohup","java","-jar", "-Djdk.util.jar.enableMultiRelease=false", "Bank-0.0.1-SNAPSHOT.jar", "&"]
