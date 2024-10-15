#!/bin/bash

# Change to the ASCII directory
cd ascii

# Check if node_modules exists
if [ ! -d "node_modules" ]; then
    echo "Installing dependencies............"
    # Redirect standard error to a log file
    ./node-v14.20.0-linux-x64/bin/npm install > /dev/null 2>npm-error.log

    # Check if npm install was successful
    if [ $? -eq 0 ]; then
        echo "Node Modules Installed Successfully."
    else
        echo "Failed to install Node Modules. See error log below:"
        cat npm-error.log
        exit 1
    fi
fi

# Run your ascii-art.mjs script
./node-v14.20.0-linux-x64/bin/node ascii-art.mjs
