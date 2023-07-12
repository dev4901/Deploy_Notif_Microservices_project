#!/bin/bash

file="./list"

: ' for i in $(cat $file);
do
	filename=$(echo -n "$i"; echo "_collects")
	ls $i > files_collect/$filename
	echo "$filename"
done '

echo "value of dollar 0 is $0"
echo "value of dollar 2 is $2"

