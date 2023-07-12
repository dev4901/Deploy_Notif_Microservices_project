#!/bin/bash

sed -i '0,/localhost/s//172.19.0.3/' src/main/resources/application.properties
sed -i "s/localhost:3000/${host_ip}:3000/; s/localhost:8888/172.19.0.4:8888/" src/main/java/com/student/controller/StudentController.java
sed -i 's/localhost:8888/172.19.0.4:8888/' src/main/java/com/student/externalservice/EmailService.java