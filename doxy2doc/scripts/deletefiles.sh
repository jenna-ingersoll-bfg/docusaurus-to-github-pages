#!/bin/bash
cd "$1" || exit;
find . ! -name "*.html" -type f -delete;
find . -name "*-members.html" -type f -delete;
find . -name "*8cs.html" -type f -delete;
find . -name "dir*.html" -type f -delete;
find . -name "functions*.html" -type f -delete;
find . -name "*8h*.html" -type f -delete;
find . -name "namespace_tools.html" -type f -delete;
find . -name "annotated.html" -type f -delete;
find . -name "classes.html" -type f -delete;
find . -name "index.html" -type f -delete;
find . -name "hierarchy.html" -type f -delete;
find . -type f -size -10c -delete;