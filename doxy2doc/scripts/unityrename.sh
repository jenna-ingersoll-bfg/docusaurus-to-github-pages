#!/bin/bash
cd "$1" || exit;
for file in *.html; do mv -f "$file" "$(echo "$file" | sed s/class_b_f_g_s_d_k_1_1_exceptions_1_1_//)"; done || true
for file in *.html; do mv -f "$file" "$(echo "$file" | sed s/class_b_f_g_s_d_k_1_1_b_f_g_/bfg_/)"; done || true
for file in *.html; do mv -f "$file" "$(echo "$file" | sed s/class_b_f_g_s_d_k_1_1_i_o_s_/ios_/)"; done || true
for file in *.html; do mv -f "$file" "$(echo "$file" | sed s/class_b_f_g_s_d_k_1_1i_o_s_/ios_/)"; done || true
for file in *.html; do mv -f "$file" "$(echo "$file" | sed s/class_b_f_g_s_d_k_1_1_//)"; done || true
for file in *.html; do mv -f "$file" "$(echo "$file" | sed s/class_b_f_g_s_d_k_1_1//)"; done || true
for file in *.html; do mv -f "$file" "$(echo "$file" | sed s/class_//)"; done || true
for file in *.html; do mv -f "$file" "$(echo "$file" | sed s/interface_b_f_g_s_d_k_1_1bfg_utils_1_1//)"; done || true
for file in *.html; do mv -f "$file" "$(echo "$file" | sed s/interface_b_f_g_s_d_k_1_1_i_//)"; done || true
for file in *.html; do mv -f "$file" "$(echo "$file" | sed s/interface_b_f_g_s_d_k_1_1//)"; done || true
for file in *.html; do mv -f "$file" "$(echo "$file" | sed s/namespace_b_f_g_s_d_k_1_1_//)"; done || true
for file in *.html; do mv -f "$file" "$(echo "$file" | sed s/struct_b_f_g_s_d_k_1_1_//)"; done || true
for file in *.html; do mv -f "$file" "$(echo "$file" | sed s/struct_b_f_g_s_d_k_1_1//)"; done || true
exit 0