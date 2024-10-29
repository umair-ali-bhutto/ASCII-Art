:: NEED TO TEST
@echo off

:: Set the URL for Node.js binary and local path
set NODE_URL=https://nodejs.org/download/release/v14.20.0/node-v14.20.0-win-x64.zip
set NODE_DIR=ascii\node-v14.20.0-win-x64
set NODE_ZIP=node-v14.20.0-win-x64.zip
set NODE_EXE=%NODE_DIR%\node.exe

@REM echo Dont Worry This Is Not A Virus.
@REM echo.
@REM echo.
@REM echo ^|U^|

@REM echo Created By: 
@REM echo +-+ +-+ +-+ +-+ +-+  +-+ +-+ +-+   +-+ +-+ +-+ +-+ +-+ +-+
@REM echo |U| |M| |A| |I| |R|  |A| |L| |I|   |B| |H| |U| |T| |T| |O|
@REM echo +-+ +-+ +-+ +-+ +-+  +-+ +-+ +-+   +-+ +-+ +-+ +-+ +-+ +-+

:: Download Node.js if not present
if not exist "%NODE_EXE%" (
    echo Downloading Node.js...
    powershell -Command "Invoke-WebRequest -Uri %NODE_URL% -OutFile %NODE_ZIP%"

    echo Extracting Node.js...
    powershell -Command "Expand-Archive -Path %NODE_ZIP% -DestinationPath ascii"
    del %NODE_ZIP%  :: Remove the zip file after extraction
    cls
)

cd ascii

:: Check if node_modules exists
if not exist "node_modules" (
    echo Installing dependencies...
    node-v14.20.0-win-x64\npm install > nul 2>npm-error.log

    echo %ERRORLEVEL%
    pause
    :: Check if npm install was successful
    if %ERRORLEVEL% equ 0 (
        echo 0
        pause
        echo Node Modules Installed Successfully.

        echo OKKK
        pause
        :: Run your test-code.mjs script
        node-v14.20.0-win-x64\node.exe ascii-art.mjs
        pause

    ) else (
        pause
        pause
        pause
        pause
        echo Failed to install Node Modules. See error log below:
        type npm-error.log
        pause
        exit /b 1
    )
)

echo OKKK
pause
:: Run your test-code.mjs script
node-v14.20.0-win-x64\node.exe ascii-art.mjs
pause

@REM :: Change back to parent directory to prevent exit
@REM cd ..

@REM :: Run your test-code.mjs script
@REM ascii\node-v14.20.0-win-x64\node.exe ascii-art.mjs
