@echo off

:: Change to the ASCII directory
cd ascii

:: Check if node_modules exists
if not exist "node_modules" (
    echo Installing dependencies............
    :: Redirect standard error to npm-error.log
    node-v14.20.0-win-x64\npm install > nul 2>npm-error.log

    :: Check if npm install was successful
    if %ERRORLEVEL% equ 0 (
        echo Node Modules Installed Successfully.
    ) else (
        echo Failed to install Node Modules. See error log below:
        type npm-error.log
        exit /b 1
    )
)

:: Run your test-code.mjs script
node-v14.20.0-win-x64\node.exe ascii-art.mjs
