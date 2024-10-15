@echo off

:: Change to the ASCII directory
cd ascii

:: Check if node_modules exists
if not exist "node_modules" (
    echo Installing dependencies............
    node-v14.20.0-win-x64\npm install > nul 2>&1
    echo Node Modules Installed Successfully.
)

:: Run your test-code.mjs script
node-v14.20.0-win-x64\node.exe ascii-art.mjs
