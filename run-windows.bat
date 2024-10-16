@echo off

:: Set the URL for Node.js binary and local path
set NODE_URL=https://nodejs.org/download/release/v14.20.0/node-v14.20.0-win-x64.zip
set NODE_DIR=ascii\node-v14.20.0-win-x64
set NODE_ZIP=node-v14.20.0-win-x64.zip
set NODE_EXE=%NODE_DIR%\node.exe

:: Download Node.js if not present
if not exist "%NODE_EXE%" (
    echo Downloading Node.js...
    powershell -Command "Invoke-WebRequest -Uri %NODE_URL% -OutFile %NODE_ZIP%"

    echo Extracting Node.js...
    powershell -Command "Expand-Archive -Path %NODE_ZIP% -DestinationPath ascii"
    del %NODE_ZIP%  :: Remove the zip file after extraction
)

:: Change to the ASCII directory
cd ascii

:: Check if node_modules exists
if not exist "node_modules" (
    echo Installing dependencies...
    %NODE_EXE% npm install > nul 2>npm-error.log

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
%NODE_EXE% ascii-art.mjs

