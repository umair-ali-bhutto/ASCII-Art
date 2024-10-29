#!/bin/bash

# Set the URL for the Node.js binary and local path
NODE_URL="https://nodejs.org/download/release/v14.20.0/node-v14.20.0-linux-x64.tar.gz"
NODE_DIR="./node-v14.20.0-linux-x64"
NODE_TAR="node-v14.20.0-linux-x64.tar.gz"
NODE_EXE="$NODE_DIR/bin/node"
NPM_EXE="$NODE_DIR/bin/npm"

# Change to the ASCII directory
cd ascii
echo "Dont Worry This Is Not A Virus"

echo " "
echo " "
echo "✨ ✨ ✨ Created By: "
echo " +-+ +-+ +-+ +-+ +-+  +-+ +-+ +-+   +-+ +-+ +-+ +-+ +-+ +-+"
echo " |U| |M| |A| |I| |R|  |A| |L| |I|   |B| |H| |U| |T| |T| |O|"
echo " +-+ +-+ +-+ +-+ +-+  +-+ +-+ +-+   +-+ +-+ +-+ +-+ +-+ +-+"
echo " "
echo " "

read -p "Press Enter to continue...."
clear

# Download Node.js if not already available
if [ ! -f "$NODE_EXE" ]; then
    read -p "Node Directory Not Found Press Enter to Download please wait...."
    clear
    echo "Downloading Node.js...."
    wget "$NODE_URL" -O "$NODE_TAR"

    # Extract Node.js
    tar -xzf "$NODE_TAR"
    rm "$NODE_TAR"  # Remove the tar file after extraction
    clear
fi


# Check if node_modules exists and install dependencies if not
if [ ! -d "node_modules" ]; then
    read -p "Node Modules Not Found Press Enter to Install...."
    clear
    echo "Installing node_modules dependencies...."
    chmod +x $NODE_EXE
    $NODE_EXE $NPM_EXE install > /dev/null 2>npm-error.log

    # Check if npm install was successful
    if [ $? -eq 0 ]; then
        echo "Node Modules Installed Successfully."
        clear
    else
        echo "Failed to install Node Modules. See error log below:"
        cat npm-error.log
        exit 1
    fi
fi





# Run your ascii-art.mjs script
$NODE_EXE ascii-art.mjs
