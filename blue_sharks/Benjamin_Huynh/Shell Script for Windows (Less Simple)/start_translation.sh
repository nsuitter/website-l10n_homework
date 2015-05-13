#!/bin/bash

sites=(
http://www.alc.co.jp/
http://jisho.org/
http://ejje.weblio.jp/sentence/ 
http://ejje.weblio.jp/sentence/ 
http://www.wipo.int/wipopearl/search/linguisticSearch.html
)

start "" "./styleguide.docx"
for line in "${sites[@]}"; do
	explorer "$line"
done
