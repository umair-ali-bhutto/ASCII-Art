#!/bin/bash

# Change to the ASCII directory
cd ascii

# Check if node_modules exists
if [ ! -d "node_modules" ]; then
    echo "Installing dependencies............"
    ./node-v14.20.0-linux-x64/bin/npm install > /dev/null 2>&1
    echo "Node Modules Installed Successfully."
fi

# Run your ascii-art.mjs script
./node-v14.20.0-linux-x64/bin/node ascii-art.mjs
