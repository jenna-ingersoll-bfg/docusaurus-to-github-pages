#!/bin/bash
cd "$1" || exit;
for file in *.html; do mv -- "$file" "${file%.html}.md";
done