#!/bin/bash
cd "$(dirname "$0")"
echo "Building assets..."
npx tailwindcss -i ./src/input.css -o ./src/style.css 2>/dev/null
node scripts/copy-lucide.js 2>/dev/null
echo "Starting 读书助手..."
"./node_modules/electron/dist/electron.exe" .
