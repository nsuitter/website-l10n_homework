#!/bin/bash
start "" "./styleguide.docx"
while read -r line; do
	explorer "$line"
done < WEBSITES.txt
