#!/bin/bash

for i in $(ls services)
do
    sed -i 's/localhost:8084/172.19.0.12:8084/' services/$i
    sed -i 's/localhost:8085/172.19.0.11:8085/' services/$i
    sed -i 's/localhost:8086/172.19.0.13:8086/' services/$i
    sed -i 's/localhost:8888/172.19.0.4:8888/' services/$i
done
