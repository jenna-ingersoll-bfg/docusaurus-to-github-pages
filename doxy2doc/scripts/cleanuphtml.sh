#!/bin/bash
cd "$1" || exit;
sed -i '1,6d' *.html; # Remove top 6 lines
sed -i 's/<!--.*-->//g' *.html; # Remove HTML comments
sed -i 's/<img.*>//' *.html; # Remove any links to PNGs
sed -i ':a;N;$!ba;s/\n/ /g' *.html; # Remove all returns
sed -i 's/> *</></g' *.html; # Remove whitespace between div tags
sed -i 's/<div class="headertitle"><div class="title">/\n# /g' *.html; # Replace "Title" with #
sed -i '1 s/<.*>//' *.html; # Remove redundent top line
sed -i '0,/# /{s/<\/div><\/div><\/div>/\n\n/}' *.html; # Remove trailing div tags on # headers and add two newlines
sed -i 's/{/\\{/g' *.html; sed -i 's/}/\\}/g' *.html; # Escape acorns
sed -i 's/_value/\\_value/g' *.html; sed -i 's/__/\\__/g' *.html; sed -i 's/vip_#/vip\\_#/g' *.html # Escape underscores (restricted to _value, __, and vip_#)
sed -i 's/*/\\*/g' *.html; # Escape astericks (*)
sed -i 's/<p>//g' *.html; sed -i 's/<\/p>//g' *.html; sed -i 's/<p >//g' *.html; # Remove all paragraph tags
sed -i '0,/# /{s/BFGSDK.//}' *.html; # Remove BFGSDK from title
sed -i '0,/# /{s/Reference//}' *.html; # Remove Reference from title
sed -i '0,/# /{s/<.*>//}' *.html; # Remove html from title
sed -i '0,/# /{s/com.bigfishgames.bfglib.//}' *.html; # Remove com.bigfishgames.bfglib. from title
sed -i '0,/# /{s/<//}' *.html; sed -i '0,/# /{s/>//}' *.html; # Strip carrots (< >) from title
sed -i '0,/# /{s/&lt;//}' *.html; sed -i '0,/# /{s/&gt;//}' *.html; # Strip carrots (< >) from title
#sed -i 's/href="[^#]*#/href="#/g' *.html; # Santize all links from Absolute to Relative