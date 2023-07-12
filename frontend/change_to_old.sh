#!/bin/sh

ip_machine=${host_ip}
location="src/Services"
for i in $(ls src/Services)
do
    sed -i "s/172.19.0.12:8084/$ip_machine:8084/" $location/$i
    sed -i "s/172.19.0.11:8085/$ip_machine:8085/" $location/$i
    sed -i "s/172.19.0.13:8086/$ip_machine:8086/" $location/$i
    sed -i "s/172.19.0.4:8888/$ip_machine:8888/" $location/$i
    sed -i "s/172.19.0.5:8089/$ip_machine:8089/" $location/$i
done
