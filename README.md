# ASCII Animation in Command Prompt

This is a JavaScript program that displays an ASCII animation in the command prompt. It uses the `ansi-escapes` library to control the cursor, `chalk` library to control rgb() colors.

## Prerequisites

- [Node.js](https://nodejs.org) installed on your machine.

## Installation

1. Clone or download this repository.

2. Open a terminal or command prompt and navigate to the project directory.

3. Install the dependencies by running the following command:

   ```shell
   npm install
   ```
Usage
In the terminal or command prompt, navigate to the project directory.

4. Then Intall Library for ANSI escapes
   ```shell
   npm install ansi-escapes
   ```
5. Then Intall Library for custom rgb colors called chalk
   ```shell
   npm install chalk
   ```
6. Run the following command to start the ASCII animation:
   ```shell
   node ascii-art.mjs
   ```

The ASCII animation will be displayed in the command prompt.

Customization
To modify the ASCII frames of the animation, you can update the frames array in the ascii-art.mjs file.

You can adjust the animation speed by changing the delay value in milliseconds.

You can change the color of rgb(red,green,blue).

License
This code is released under the MIT License.
