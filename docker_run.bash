#!/bin/bash

docker run -itd --rm --net services-net --ip=172.19.0.2 -p 8761:8761 --name eureka dev4901/eureka_backend:final \
&& docker run -itd --rm --net services-net --ip=172.19.0.3 -p 27017:27017 --name db dev4901/mongo-databases:final \
&& docker run -itd --rm --net services-net --ip=172.19.0.4 -p 8888:8888 --name gate dev4901/gateway:final \
&& docker run -itd --rm --net services-net --ip=172.19.0.5 -p 8089:8089 --name auth dev4901/authenticate:final \
&& docker run -itd --rm --net services-net --ip=172.19.0.6 -p 8090:8090 --name identity dev4901/identity:final \
&& docker run -itd --rm --net services-net --ip=172.19.0.7 -p 80:3000 --name frontend dev4901/java_frontend:final \
&& docker run -itd --rm --net services-net --ip=172.19.0.8 -p 8081:8081 --name email dev4901/email_backend:final \
&& docker run -itd --rm --net services-net --ip=172.19.0.9 -p 8082:8082 --name sms dev4901/sms:final \
&& docker run -itd --rm --net services-net --ip=172.19.0.10 -p 8083:8083 --name push dev4901/pushnotif:final \
&& docker run -itd --rm --net services-net --ip=172.19.0.11 -p 8085:8085 --name bank dev4901/bank:final \
&& docker run -itd --rm --net services-net --ip=172.19.0.12 -p 8084:8084 --name student dev4901/student:final \
&& docker run -itd --rm --net services-net --ip=172.19.0.13 -p 8086:8086 --name hospital dev4901/hospital:final \
