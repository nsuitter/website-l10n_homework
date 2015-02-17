#!/bin/sh

for ((i=99; i>=1; i--)); do
	if ((i==2)); then
		echo "2 bottles of beer on the wall"
		echo "2 bottles of beer!"
		echo "Take one down and pass it around"
		echo "1 bottle of beer on the wall!"
	elif ((i==1)); then
		echo "1 bottle of beer on the wall"
		echo "1 bottle of beer!"
		echo "Take one down and pass it around"
		echo "no bottles of beer on the wall!"
	else
		echo "$i bottles of beer on the wall"
		echo "$i bottles of beer!"
		echo "Take one down and pass it around"
		echo "$((i-1)) bottles of beer on the wall!"
	fi
done

