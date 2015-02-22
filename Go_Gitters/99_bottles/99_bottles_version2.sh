#!/bin/sh


for ((i=99; i>0; i--));do
	newBottles=$((i-1))
	if (( i == 1 )); then
		echo "$i bottle of beer on the wall"
		echo "$i bottle of beer!"
		echo "You take one down and pass it around,"
		echo "No more bottles of beer on the wall :-("
	elif (( i == 2 )); then
		echo "$i bottles of beer on the wall"
		echo "$i bottles of beer!"
		echo "You take one down and pass it around,"
		echo "$newBottles bottle of beer on the wall!"
	else
		echo "$i bottles of beer on the wall"
		echo "$i bottles of beer!"
		echo "You take one down and pass it around,"
		echo "$newBottles bottles of beer on the wall!"
	fi
done