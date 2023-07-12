#!/bin/bash

sed -i 's/lb:\/\/identity/172.19.0.6:8090/1;
	s/lb:\/\/emailmicroservice/172.19.0.8:8081/1;
	s/lb:\/\/smsmicroservice/172.19.0.9:8082/1;
	s/lb:\/\/pushnotificationmicrosevice/172.19.0.10:8083/1 ' $1
