#!/bin/bash

find . -type f -name "*.pdf" | while read f; do
    echo "Processing: $f"
    exiftool -overwrite_original -Title="$(basename "${f%.pdf}")" "$f"
done
