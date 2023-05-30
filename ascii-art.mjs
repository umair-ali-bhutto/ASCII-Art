import ansiEscapes from 'ansi-escapes';
import chalk from 'chalk';

// Define the ASCII frames for the animation
const frames = [
//   "  /\\_/\\",

//   " ( o.o )",

//   "  > ^ <",


  "\x1b[32m ??       ??     ????      ????           ????         ????????????      ??????               ",
  "\x1b[32m ??       ??     ?? ??    ?? ??          ??  ??             ??           ??   ??            ",
  "\x1b[32m ??       ??     ??  ??  ??  ??         ??    ??            ??           ??????            ",
  "\x1b[32m ??       ??     ??   ????   ??        ??????????           ??           ????               ",
  "\x1b[32m ??       ??     ??    ??    ??       ??        ??          ??           ?? ??              ",
  "\x1b[32m ?????????????   ??          ??      ??          ??    ????????????      ??  ??            ",


 

];


// Function to clear the screen
function clearScreen() {
  process.stdout.write(ansiEscapes.clearScreen);
}

// function moveCursorToTopCenter() {
//     const screenWidth = process.stdout.columns;
//     const frameWidth = frames[0].length;
//     const horizontalPadding = Math.floor((screenWidth - frameWidth) / 2);
//     const verticalPadding = Math.floor(process.stdout.rows / 2);
  
//     process.stdout.write(ansiEscapes.cursorMove(horizontalPadding, verticalPadding));
//   }

// Function to display the ASCII animation
function displayAnimation() {
  clearScreen();
  process.stdout.write(ansiEscapes.cursorTo(0, 0));

  //moveCursorToTopCenter();

  // Loop through each frame of the animation
  for (let i = 0; i < frames.length; i++) {
  //clearScreen();
    
    // Move the cursor to the top-left position
    //process.stdout.write(ansiEscapes.cursorTo(0, 0));

    // Print the current frame
    process.stdout.write(frames[i]+"\n");

    // Delay between frames (in milliseconds)
    const delay = 500;

    // Pause execution for the specified delay
    // Note: This is a synchronous delay and may not be accurate in all cases
    // For more precise timing, consider using a library like "sleep" or "wait-for"
    const start = new Date().getTime();
    while (new Date().getTime() < start + delay) {
      // Do nothing
    }
  }
  const pauseDuration = 10000;
  setTimeout(() => {
    process.exit();
  }, pauseDuration);

}


// Start the animation
displayAnimation();