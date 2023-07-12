FROM maven:3.8.3-openjdk-17
COPY . ./gateway
RUN rm -rf /root/.m2
WORKDIR ./gateway
RUN microdnf install iputils procps
RUN chmod u+x mvnw
RUN mvn clean package
EXPOSE 8888
CMD java -jar target/Gateway-0.0.1-SNAPSHOT.jar
