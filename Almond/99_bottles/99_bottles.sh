#!/bin/sh


for ((i=1; i<=99; i++)); do
	if ((i == 99)); then
		echo "1 bottle of beer on the wall
		1 bottle of beer!
		You take one down and pass it around,
		No more bottles of beer on the wall :-("
	else
		echo "$((100-$i)) bottles of beer on the wall
		$((100-$i)) bottles of beer!
		You take one down and pass it around,
		$((99-$i)) bottles of beer on the wall!"
	fi
	
done