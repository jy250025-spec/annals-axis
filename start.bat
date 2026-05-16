@echo off
cd /d "%~dp0"
echo Building assets...
node node_modules\tailwindcss\lib\cli.js -i ./src/input.css -o ./src/style.css >nul 2>&1
node scripts\copy-lucide.js >nul 2>&1
echo Starting 读书助手...
start "" "node_modules\electron\dist\electron.exe" .
