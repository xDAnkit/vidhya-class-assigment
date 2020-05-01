#script1.sh
clear
echo "Please enter your name"
read name
if [[ -z "$name" ]]; then
   printf '%s\n' "You cancelled the operation message"
   exit 1
else
   
   printf "Welcome %s " "$name"
 fi
 
echo "Please enter  number1"
read a
echo "Please enter number 2"
read b


c=$(( a + b ))

echo Addition of $a and $b is $c
