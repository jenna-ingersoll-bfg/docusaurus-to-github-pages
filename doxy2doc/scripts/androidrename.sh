#!/bin/bash
cd "$1" || exit;
for file in *.html; do mv -f "$file" "$(echo "$file" | sed s/classcom_1_1bigfishgames_1_1bfglib_1_1_n_s_//)"; done || true
for file in *.html; do mv -f "$file" "$(echo "$file" | sed s/classcom_1_1bigfishgames_1_1bfglib_1_1_u_d_i_d_/udid_/)"; done || true
for file in *.html; do mv -f "$file" "$(echo "$file" | sed s/classcom_1_1bigfishgames_1_1bfglib_1_1//)"; done || true
for file in *.html; do mv -f "$file" "$(echo "$file" | sed s/enumcom_1_1bigfishgames_1_1bfglib_1_1//)"; done || true
for file in *.html; do mv -f "$file" "$(echo "$file" | sed s/interfacecom_1_1bigfishgames_1_1bfglib_1_1//)"; done || true
exit 0