# ASCII Animation With Color Picker

<p align="center">
  <a href="https://github.com/umair-ali-bhutto/" target="_blank">
    <img src="https://umair-ali-bhutto.github.io/assets/CodePenIcon/logo.png" alt="logo"><br/>
  </a>
</p>

A simple Node.js application that allows users to select a color for ASCII art animation. This project demonstrates the use of libraries such as `chalk` for color styling, `inquirer` for user prompts, and `ansi-escapes` for screen control.

## Author

- [**_Umair Ali Bhutto_**](https://github.com/umair-ali-bhutto/)

## Table of Contents

- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Code Explanation](#code-explanation)
- [License](#license)
- [Contributing](#contributing)

## Features

- Automatically installs Node.js dependencies if not already installed.
- Choose from a variety of predefined colors for the ASCII animation.
- Displays a fun simple ASCII animation of my name in the color selected by the user.
- Provides a smooth, color-rich visual experience.

## Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/umair-ali-bhutto/ASCII-Art.git
   cd ASCII-Art
   ```

## Usage

This project includes platform-specific scripts to help users run the application easily on Linux and Windows systems. These scripts also check for the presence of the `node_modules` directory and install the dependencies automatically if needed.

## Running the Application

To simplify running the application on different operating systems, two script files are provided:

Open a terminal, navigate to the project directory

You can run the application using one of the provided scripts for your operating system:

- **For Linux**:

  ```bash
  bash run-linux.sh
  ```

- **For Windows**:
  Double-click or run the `run-windows.bat` script from the command prompt.

The scripts will automatically handle the installation of Node.js dependencies (if necessary) and execute the ASCII art animation.

- **For Windows**: `run-windows.bat`

  - This batch file uses the Windows version of Node.js to run the `test-code.mjs` file.
  - **Usage**: Double-click the `run-windows.bat` file to execute the application.
  - Checks if the `node_modules` directory exists. If not, it installs the dependencies silently.
  - Runs the `ascii-art.mjs` script using the provided Node.js binary.

- **For Linux**: `run-linux.sh`

  - This shell script uses the Linux version of Node.js to run the `ascii-art.mjs` file.
  - **Usage**: Open a terminal, navigate to the project directory, and run the script using:

  ```bash
  bash run-linux.sh
  ```

  - Checks if the `node_modules` directory exists. If not, it installs the dependencies silently.
  - Runs the `ascii-art.mjs` script using the provided Node.js binary.

Make sure to give execute permission to the `run-linux.sh` script using the following command:

```bash
chmod +x run-linux.sh
```

## Code Explanation

- **Dependencies**:

  - `ansi-escapes`: Used to clear the console screen.
  - `chalk`: Provides color formatting for console output.
  - `inquirer`: Enables interactive command-line user prompts.

- **Color Options**:
  An array of color choices is predefined, allowing users to select a color for the animation.

- **Functions**:

  - `generateFrames(selectedColor)`: Generates the frames of the ASCII animation using the selected color.
  - `clearScreen()`: Clears the console screen using ANSI escape codes.
  - `delay(ms)`: A promise-based delay function to control the timing of frame display.
  - `displayAnimation(frames)`: Displays the ASCII animation frame by frame.

- **User Interaction**:
  The `inquirer` prompt allows the user to select a color from the available options. Once a color is selected, the animation is generated and displayed.

- **Signal Handling**:
  The application listens for the `SIGINT` signal (Ctrl + C) to exit gracefully, ensuring the console is cleared before termination.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Contributing

Contributions are welcome! If you have suggestions for improvements or find bugs, feel free to create an issue or submit a pull request.
