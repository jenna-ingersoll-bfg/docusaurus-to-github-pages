#!/bin/bash
cd "$1" || exit;
for file in *.html; do mv -f "$file" "$(echo "$file" | sed s/interface//)"; done || true
for file in *.html; do mv -f "$file" "$(echo "$file" | sed s/protocol//)"; done || true
exit 0