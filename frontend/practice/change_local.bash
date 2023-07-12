for i in $(ls services);
do
#   echo "$i"
   if [[ $i =~ Email* ]] || [[ $i =~ Student* ]]; then
      echo "Student - $i - 172.19.0.12"	 
      cat services/$i | grep localhost
   elif [[ $i =~ Pn ]] || [[ $i =~ Customer* ]]; then
      echo "Bank - $i - 172.19.0.11"
      cat services/$i | grep localhost
   elif [[ $i =~ Sms* ]] || [[ $i =~ Patient* ]]; then
      echo "hospital - $i - 172.19.0.13"
      cat services/$i | grep localhost
   fi
done
