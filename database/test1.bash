#!/bin/bash
:'
file="identity_collects"
db=$(echo $file | cut -d '_' -f 1 )

col="Identities.json"
collname=$(echo $col | cut -d '.' -f 1)

echo "database is $db "
echo "collection is $collname"
echo "file location is $db/$col"
'

for file in $(cat files_list)
do
	db=$(echo $file | cut -d '_' -f 1)
	echo "database is $db "
	for col in $(ls $db/ )
	do
		
		collname=$(echo $col | cut -d '.' -f 1 )	
		#echo "value of col varaible is $col"
		#echo "collection is $collname"
		#echo "file location is $db/$col"
		mongoimport -d $db -c $collname --jsonArray < $db/$col
	done
	echo ""
done
