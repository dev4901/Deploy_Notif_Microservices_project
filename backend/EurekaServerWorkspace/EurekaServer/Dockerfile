FROM maven:3.8.3-openjdk-17
COPY . ./eureka
RUN rm -rf /root/.m2
WORKDIR ./eureka
RUN microdnf install iputils procps
RUN chmod u+x mvnw
RUN mvn clean package
EXPOSE 8761
CMD java -jar target/EurekaServer-0.0.1-SNAPSHOT.jar
