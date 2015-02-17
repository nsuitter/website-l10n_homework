#!/bin/sh

i=99

while (($i >=3 ))
do
		echo "$i bottles of beer on the wall\n$i bottles of beer!\nYou take one down and pass it around,"
		i=$(( i-1 ))
		echo "$i bottles of beer on the wall!\n"
done 
echo "2 bottles of beer on the wall\n2 bottles of beer!\nYou take one down and pass it around,\n1 bottle of beer on the wall!\n"
echo "1 bottle of beer on the wall\n1 bottle of beer!\nYou take one down and pass it around,\nNo more bottles of beer on the wall :-("