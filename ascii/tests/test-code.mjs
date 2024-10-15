import ansiEscapes from 'ansi-escapes';
import chalk from 'chalk';
import inquirer from 'inquirer';

// Predefined color choices
const colorOptions = [
  { name: 'Red', color: chalk.rgb(255, 0, 0) },
  { name: 'Green', color: chalk.rgb(0, 255, 0) },
  { name: 'Blue', color: chalk.rgb(0, 0, 255) },
  { name: 'Cyan', color: chalk.rgb(0, 255, 255) },
  { name: 'Yellow', color: chalk.rgb(255, 255, 0) },
  { name: 'Magenta', color: chalk.rgb(255, 0, 255) }
];

// Function to clear the screen
function clearScreen() {
  process.stdout.write(ansiEscapes.clearScreen);
}

// Function to display the ASCII animation
function displayAnimation(selectedColor) {
  const frames = [
    selectedColor("  ?????????? ???????? ??????? ??????        ").trim(),
    selectedColor("  ??         ??    ?? ??   ?? ??   ??       ").trim(),
    selectedColor("  ??         ??    ?? ??   ?? ??    ??      ").trim(),
    selectedColor("  ??         ??    ?? ??   ?? ??    ??      ").trim(),
    selectedColor("  ??         ??    ?? ??   ?? ??    ??      ").trim(),
    selectedColor("  ??  ?????? ??    ?? ??   ?? ??    ??      ").trim(),
    selectedColor("  ??  ??  ?? ??    ?? ??   ?? ??    ??      ").trim(),
    selectedColor("  ??      ?? ??    ?? ??   ?? ??   ??       ").trim(),
    selectedColor("  ?????????? ???????? ??????? ??????        ").trim(),
    "\n",
    selectedColor("  ?????????? ??      ?? ????????           ").trim(),
    selectedColor("  ??      ?? ??      ?? ??                 ").trim(),
    selectedColor("  ??      ?? ??      ?? ??                 ").trim(),
    selectedColor("  ??      ?? ??      ?? ??                 ").trim(),
    selectedColor("  ?????????? ?????????? ????????           ").trim(),
    selectedColor("  ??      ??         ?? ??                 ").trim(),
    selectedColor("  ??      ??         ?? ??                 ").trim(),
    selectedColor("  ??      ??         ?? ??                 ").trim(),
    selectedColor("  ?????????? ?????????? ????????           ").trim()
  ];

  let frameIndex = 0;

  const interval = setInterval(() => {
    clearScreen();
    process.stdout.write(frames[frameIndex] + "\n");
    frameIndex++;

    if (frameIndex === frames.length) {
      clearInterval(interval);
    }
  }, 100); // Adjust the frame interval time (100 ms)
}

// Inquirer prompt to select color
inquirer
  .prompt([
    {
      type: 'list',
      name: 'color',
      message: 'Pick a color for the animation:',
      choices: colorOptions.map(opt => opt.name)
    }
  ])
  .then(answers => {
    const selectedColor = colorOptions.find(opt => opt.name === answers.color).color;
    console.log(`You selected: ${answers.color}`);
    setTimeout(() => displayAnimation(selectedColor), 1000); // Delay before starting the animation
  })
  .catch(error => {
    console.error('Error:', error);
  });



  // /**
//  * @author umair-ali-bhutto
//  * @since 19-OCT-2024 
//  * @version 1.0
//  */
// import ansiEscapes from 'ansi-escapes';
// import chalk from 'chalk';
// import inquirer from 'inquirer';


// /**
//  * Predefined color choices.
//  * @type {Array<Object>}
//  */
// const colorOptions = [
//   { name: 'Green', color: chalk.rgb(0, 255, 0) },
//   { name: 'Red', color: chalk.rgb(255, 0, 0) },
//   { name: 'Blue', color: chalk.rgb(0, 0, 255) },
//   { name: 'Cyan', color: chalk.rgb(0, 255, 255) },
//   { name: 'Yellow', color: chalk.rgb(255, 255, 0) },
//   { name: 'Magenta', color: chalk.rgb(255, 0, 255) }
// ];


// /**
//  * Generate frames for the ASCII animation.
//  * @param {Function} selectedColor - The selected color function.
//  * @returns {Array<string>} The generated frames.
//  */
// function generateFrames(selectedColor) {
//   try {
//     let frames = [

//       selectedColor(" ??      ?? ?????????? ???????? ???????? ????????   ").trim(),
//       selectedColor(" ??      ?? ??  ??  ?? ??    ??    ??    ??    ??   ").trim(),
//       selectedColor(" ??      ?? ??  ??  ?? ??    ??    ??    ??    ??   ").trim(),
//       selectedColor(" ??      ?? ??  ??  ?? ??    ??    ??    ??    ??   ").trim(),
//       selectedColor(" ??      ?? ??  ??  ?? ??    ??    ??    ??    ??   ").trim(),
//       selectedColor(" ??      ?? ??      ?? ????????    ??    ????????      ").trim(),
//       selectedColor(" ??      ?? ??      ?? ??    ??    ??    ??  ??     ").trim(),
//       selectedColor(" ??      ?? ??      ?? ??    ??    ??    ??   ??    ").trim(),
//       selectedColor(" ?????????? ??      ?? ??    ?? ???????? ??    ??   ").trim(),

//       "\n",


//       selectedColor(" ???????? ??       ????????    ").trim(),
//       selectedColor(" ??    ?? ??          ??       ").trim(),
//       selectedColor(" ??    ?? ??          ??       ").trim(),
//       selectedColor(" ??    ?? ??          ??       ").trim(),
//       selectedColor(" ??    ?? ??          ??       ").trim(),
//       selectedColor(" ???????? ??          ??       ").trim(),
//       selectedColor(" ??    ?? ??          ??       ").trim(),
//       selectedColor(" ??    ?? ??          ??       ").trim(),
//       selectedColor(" ??    ?? ???????? ????????    ").trim(),

//       "\n",

//       selectedColor(" ????????  ??    ?? ??    ?? ???????? ???????? ????????     ").trim(),
//       selectedColor(" ??    ??  ??    ?? ??    ??    ??       ??    ??    ??     ").trim(),
//       selectedColor(" ??    ??  ??    ?? ??    ??    ??       ??    ??    ??     ").trim(),
//       selectedColor(" ??    ??  ??    ?? ??    ??    ??       ??    ??    ??     ").trim(),
//       selectedColor(" ????????  ???????? ??    ??    ??       ??    ??    ??     ").trim(),
//       selectedColor(" ??    ??  ??    ?? ??    ??    ??       ??    ??    ??     ").trim(),
//       selectedColor(" ??    ??  ??    ?? ??    ??    ??       ??    ??    ??     ").trim(),
//       selectedColor(" ??    ??  ??    ?? ??    ??    ??       ??    ??    ??     ").trim(),
//       selectedColor(" ????????  ??    ?? ????????    ??       ??    ????????     ").trim(),






//       "\n",
//       "clear",




//       selectedColor("  /$$   /$$                         /$$            ").trim(),
//       selectedColor(" | $$  | $$                        |__/            ").trim(),
//       selectedColor(" | $$  | $$ /$$$$$$/$$$$   /$$$$$$  /$$  /$$$$$$   ").trim(),
//       selectedColor(" | $$  | $$| $$_  $$_  $$ |____  $$| $$ /$$__  $$  ").trim(),
//       selectedColor(" | $$  | $$| $$ \\ $$ \\ $$  /$$$$$$$| $$| $$  \\__/  ").trim(),
//       selectedColor(" | $$  | $$| $$ | $$ | $$ /$$__  $$| $$| $$        ").trim(),
//       selectedColor(" |  $$$$$$/| $$ | $$ | $$|  $$$$$$$| $$| $$        ").trim(),
//       selectedColor("  \\______/ |__/ |__/ |__/ \\_______/|__/|__/        ").trim(),

//       "\n",

//       selectedColor("      /$$$$$$  /$$ /$$    ").trim(),
//       selectedColor("     /$$__  $$| $$|__/    ").trim(),
//       selectedColor("    | $$  \\ $$| $$ /$$    ").trim(),
//       selectedColor("    | $$$$$$$$| $$| $$    ").trim(),
//       selectedColor("    | $$__  $$| $$| $$    ").trim(),
//       selectedColor("    | $$  | $$| $$| $$    ").trim(),
//       selectedColor("    | $$  | $$| $$| $$    ").trim(),
//       selectedColor("    |__/  |__/|__/|__/    ").trim(),


//       "\n",

//       selectedColor("   /$$$$$$$  /$$                   /$$       /$$              ").trim(),
//       selectedColor("  | $$__  $$| $$                  | $$      | $$              ").trim(),
//       selectedColor("  | $$  \\ $$| $$$$$$$  /$$   /$$ /$$$$$$   /$$$$$$    /$$$$$$ ").trim(),
//       selectedColor("  | $$$$$$$ | $$__  $$| $$  | $$|_  $$_/  |_  $$_/   /$$__  $$").trim(),
//       selectedColor("  | $$__  $$| $$  \\ $$| $$  | $$  | $$      | $$    | $$  \\ $$").trim(),
//       selectedColor("  | $$  \\ $$| $$  | $$| $$  | $$  | $$ /$$  | $$ /$$| $$  | $$").trim(),
//       selectedColor("  | $$$$$$$/| $$  | $$|  $$$$$$/  |  $$$$/  |  $$$$/|  $$$$$$/").trim(),
//       selectedColor("  |_______/ |__/  |__/ \\______/    \\___/     \\___/   \\______/ ").trim(),




//       "\n",
//       "clear",


//       selectedColor(" UUUUUUUU     UUUUUUUU                                            iiii                          ").trim(),
//       selectedColor(" U::::::U     U::::::U                                           i::::i                         ").trim(),
//       selectedColor(" U::::::U     U::::::U                                            iiii                          ").trim(),
//       selectedColor(" UU:::::U     U:::::UU                                                                          ").trim(),
//       selectedColor("  U:::::U     U:::::U    mmmmmmm    mmmmmmm     aaaaaaaaaaaaa   iiiiiii rrrrr   rrrrrrrrr       ").trim(),
//       selectedColor("  U:::::D     D:::::U  mm:::::::m  m:::::::mm   a::::::::::::a  i:::::i r::::rrr:::::::::r      ").trim(),
//       selectedColor("  U:::::D     D:::::U m::::::::::mm::::::::::m  aaaaaaaaa:::::a  i::::i r:::::::::::::::::r     ").trim(),
//       selectedColor("  U:::::D     D:::::U m::::::::::::::::::::::m           a::::a  i::::i rr::::::rrrrr::::::r    ").trim(),
//       selectedColor("  U:::::D     D:::::U m:::::mmm::::::mmm:::::m    aaaaaaa:::::a  i::::i  r:::::r     r:::::r    ").trim(),
//       selectedColor("  U:::::D     D:::::U m::::m   m::::m   m::::m  aa::::::::::::a  i::::i  r:::::r     rrrrrrr    ").trim(),
//       selectedColor("  U:::::D     D:::::U m::::m   m::::m   m::::m a::::aaaa::::::a  i::::i  r:::::r                ").trim(),
//       selectedColor("  U::::::U   U::::::U m::::m   m::::m   m::::ma::::a    a:::::a  i::::i  r:::::r                ").trim(),
//       selectedColor("  U:::::::UUU:::::::U m::::m   m::::m   m::::ma::::a    a:::::a i::::::i r:::::r                ").trim(),
//       selectedColor("   UU:::::::::::::UU  m::::m   m::::m   m::::ma:::::aaaa::::::a i::::::i r:::::r                ").trim(),
//       selectedColor("     UU:::::::::UU    m::::m   m::::m   m::::m a::::::::::aa:::ai::::::i r:::::r                ").trim(),
//       selectedColor("       UUUUUUUUU      mmmmmm   mmmmmm   mmmmmm  aaaaaaaaaa  aaaaiiiiiiii rrrrrrr                ").trim(),
//       "\n",

//       selectedColor("                AAA               lllllll   iiii     ").trim(),
//       selectedColor("               A:::A              l:::::l  i::::i    ").trim(),
//       selectedColor("              A:::::A             l:::::l   iiii     ").trim(),
//       selectedColor("             A:::::::A            l:::::l            ").trim(),
//       selectedColor("            A:::::::::A            l::::l iiiiiii    ").trim(),
//       selectedColor("           A:::::A:::::A           l::::l i:::::i    ").trim(),
//       selectedColor("          A:::::A A:::::A          l::::l  i::::i    ").trim(),
//       selectedColor("         A:::::A   A:::::A         l::::l  i::::i    ").trim(),
//       selectedColor("        A:::::A     A:::::A        l::::l  i::::i    ").trim(),
//       selectedColor("       A:::::AAAAAAAAA:::::A       l::::l  i::::i    ").trim(),
//       selectedColor("      A:::::::::::::::::::::A      l::::l  i::::i    ").trim(),
//       selectedColor("     A:::::AAAAAAAAAAAAA:::::A     l::::l  i::::i    ").trim(),
//       selectedColor("    A:::::A             A:::::A   l::::::li::::::i   ").trim(),
//       selectedColor("   A:::::A               A:::::A  l::::::li::::::i   ").trim(),
//       selectedColor("  A:::::A                 A:::::A l::::::li::::::i   ").trim(),
//       selectedColor(" AAAAAAA                   AAAAAAAlllllllliiiiiiii   ").trim(),
//       "\n",

//       selectedColor("  BBBBBBBBBBBBBBBBB   hhhhhhh                                        tttt                   tttt                           ").trim(),
//       selectedColor("  B::::::::::::::::B  h:::::h                                     ttt:::t                ttt:::t                           ").trim(),
//       selectedColor("  B::::::BBBBBB:::::B h:::::h                                     t:::::t                t:::::t                           ").trim(),
//       selectedColor("  BB:::::B     B:::::Bh:::::h                                     t:::::t                t:::::t                           ").trim(),
//       selectedColor("    B::::B     B:::::B h::::h hhhhh       uuuuuu    uuuuuu  ttttttt:::::ttttttt    ttttttt:::::ttttttt       ooooooooooo   ").trim(),
//       selectedColor("    B::::B     B:::::B h::::hh:::::hhh    u::::u    u::::u  t:::::::::::::::::t    t:::::::::::::::::t     oo:::::::::::oo ").trim(),
//       selectedColor("    B::::BBBBBB:::::B  h::::::::::::::hh  u::::u    u::::u  t:::::::::::::::::t    t:::::::::::::::::t    o:::::::::::::::o").trim(),
//       selectedColor("    B:::::::::::::BB   h:::::::hhh::::::h u::::u    u::::u  tttttt:::::::tttttt    tttttt:::::::tttttt    o:::::ooooo:::::o").trim(),
//       selectedColor("    B::::BBBBBB:::::B  h::::::h   h::::::hu::::u    u::::u        t:::::t                t:::::t          o::::o     o::::o").trim(),
//       selectedColor("    B::::B     B:::::B h:::::h     h:::::hu::::u    u::::u        t:::::t                t:::::t          o::::o     o::::o").trim(),
//       selectedColor("    B::::B     B:::::B h:::::h     h:::::hu::::u    u::::u        t:::::t                t:::::t          o::::o     o::::o").trim(),
//       selectedColor("    B::::B     B:::::B h:::::h     h:::::hu:::::uuuu:::::u        t:::::t    tttttt      t:::::t    tttttto::::o     o::::o").trim(),
//       selectedColor("  BB:::::BBBBBB::::::B h:::::h     h:::::hu:::::::::::::::uu      t::::::tttt:::::t      t::::::tttt:::::to:::::ooooo:::::o").trim(),
//       selectedColor("  B:::::::::::::::::B  h:::::h     h:::::h u:::::::::::::::u      tt::::::::::::::t      tt::::::::::::::to:::::::::::::::o").trim(),
//       selectedColor("  B::::::::::::::::B   h:::::h     h:::::h  uu::::::::uu:::u        tt:::::::::::tt        tt:::::::::::tt oo:::::::::::oo ").trim(),
//       selectedColor("  BBBBBBBBBBBBBBBBB    hhhhhhh     hhhhhhh    uuuuuuuu  uuuu          ttttttttttt            ttttttttttt     ooooooooooo   ").trim(),


//       "\n",
//       "clear",

//       selectedColor(" ██╗   ██╗███╗   ███╗ █████╗ ██╗██████╗  ").trim(),
//       selectedColor(" ██║   ██║████╗ ████║██╔══██╗██║██╔══██╗ ").trim(),
//       selectedColor(" ██║   ██║██╔████╔██║███████║██║██████╔╝ ").trim(),
//       selectedColor(" ██║   ██║██║╚██╔╝██║██╔══██║██║██╔══██╗ ").trim(),
//       selectedColor(" ╚██████╔╝██║ ╚═╝ ██║██║  ██║██║██║  ██║ ").trim(),
//       selectedColor("  ╚═════╝ ╚═╝     ╚═╝╚═╝  ╚═╝╚═╝╚═╝  ╚═╝ ").trim(),

//       "\n",
//       selectedColor("   █████╗ ██╗     ██╗  ").trim(),
//       selectedColor("  ██╔══██╗██║     ██║  ").trim(),
//       selectedColor("  ███████║██║     ██║  ").trim(),
//       selectedColor("  ██╔══██║██║     ██║  ").trim(),
//       selectedColor("  ██║  ██║███████╗██║  ").trim(),
//       selectedColor("  ╚═╝  ╚═╝╚══════╝╚═╝  ").trim(),
//       "\n",

//       selectedColor("  ██████╗ ██╗  ██╗██╗   ██╗████████╗████████╗ ██████╗ ").trim(),
//       selectedColor("  ██╔══██╗██║  ██║██║   ██║╚══██╔══╝╚══██╔══╝██╔═══██╗").trim(),
//       selectedColor("  ██████╔╝███████║██║   ██║   ██║      ██║   ██║   ██║").trim(),
//       selectedColor("  ██╔══██╗██╔══██║██║   ██║   ██║      ██║   ██║   ██║").trim(),
//       selectedColor("  ██████╔╝██║  ██║╚██████╔╝   ██║      ██║   ╚██████╔╝").trim(),
//       selectedColor("  ╚═════╝ ╚═╝  ╚═╝ ╚═════╝    ╚═╝      ╚═╝    ╚═════╝ ").trim(),




//       "\n",
//       "clear",
//       selectedColor(" >=>     >=>                                          ").trim(),
//       selectedColor(" >=>     >=>                            >>            ").trim(),
//       selectedColor(" >=>     >=> >===>>=>>==>     >=> >=>      >> >==>    ").trim(),
//       selectedColor(" >=>     >=>  >=>  >>  >=>  >=>   >=>  >=>  >=>       ").trim(),
//       selectedColor(" >=>     >=>  >=>  >>  >=> >=>    >=>  >=>  >=>       ").trim(),
//       selectedColor(" >=>     >=>  >=>  >>  >=>  >=>   >=>  >=>  >=>       ").trim(),
//       selectedColor("   >====>    >==>  >>  >=>   >==>>>==> >=> >==>       ").trim(),
//       "\n",
//       selectedColor("         >>        >=>         ").trim(),
//       selectedColor("        >>=>       >=>  >>     ").trim(),
//       selectedColor("       >> >=>      >=>         ").trim(),
//       selectedColor("      >=>  >=>     >=> >=>     ").trim(),
//       selectedColor("     >=====>>=>    >=> >=>     ").trim(),
//       selectedColor("    >=>      >=>   >=> >=>     ").trim(),
//       selectedColor("   >=>        >=> >==> >=>     ").trim(),


//       "\n",

//       selectedColor("  >=>>=>                        >=>     >=>              ").trim(),
//       selectedColor("  >>   >=>  >=>                 >=>     >=>              ").trim(),
//       selectedColor("  >>    >=> >=>      >=>  >=> >=>>==> >=>>==>    >=>     ").trim(),
//       selectedColor("  >==>>=>   >=>>=>   >=>  >=>   >=>     >=>    >=>  >=>  ").trim(),
//       selectedColor("  >>    >=> >=>  >=> >=>  >=>   >=>     >=>   >=>    >=> ").trim(),
//       selectedColor("  >>     >> >>   >=> >=>  >=>   >=>     >=>    >=>  >=>  ").trim(),
//       selectedColor("  >===>>=>  >=>  >=>   >==>=>    >=>     >=>     >=>     ").trim(),







//       "\n",

//       "clear",
//       selectedColor("      ***** *    **                                                     ").trim(),
//       selectedColor("   ******  *  *****                                 *                   ").trim(),
//       selectedColor("  **   *  *     *****                              ***                  ").trim(),
//       selectedColor(" *    *  **     * **                                *                   ").trim(),
//       selectedColor("     *  ***     *                                         ***  ****     ").trim(),
//       selectedColor("    **   **     *     *** **** ****       ****    ***      **** **** *  ").trim(),
//       selectedColor("    **   **     *      *** **** ***  *   * ***  *  ***      **   ****   ").trim(),
//       selectedColor("    **   **     *       **  **** ****   *   ****    **      **          ").trim(),
//       selectedColor("    **   **     *       **   **   **   **    **     **      **          ").trim(),
//       selectedColor("    **   **     *       **   **   **   **    **     **      **          ").trim(),
//       selectedColor("     **  **     *       **   **   **   **    **     **      **          ").trim(),
//       selectedColor("      ** *      *       **   **   **   **    **     **      **          ").trim(),
//       selectedColor("       ***      *       **   **   **   **    **     **      ***         ").trim(),
//       selectedColor("        ********        ***  ***  ***   ***** **    *** *    ***        ").trim(),
//       selectedColor("          ****           ***  ***  ***   ***   **    ***                ").trim(),

//       "\n",

//       selectedColor("          **        ***             ").trim(),
//       selectedColor("       *****         ***      *     ").trim(),
//       selectedColor("      *  ***          **     ***    ").trim(),
//       selectedColor("         ***          **      *     ").trim(),
//       selectedColor("        *  **         **            ").trim(),
//       selectedColor("        *  **         **    ***     ").trim(),
//       selectedColor("       *    **        **     ***    ").trim(),
//       selectedColor("       *    **        **      **    ").trim(),
//       selectedColor("      *      **       **      **    ").trim(),
//       selectedColor("      *********       **      **    ").trim(),
//       selectedColor("     *        **      **      **    ").trim(),
//       selectedColor("     *        **      **      **    ").trim(),
//       selectedColor("    *****      **     **      **    ").trim(),
//       selectedColor("   *   ****    ** *   *** *   *** * ").trim(),
//       selectedColor("  *     **      **     ***     ***  ").trim(),
//       selectedColor("  *                                 ").trim(),
//       selectedColor("   **                               ").trim(),
//       "\n",


//       selectedColor("        ***** **     *                                                    ").trim(),
//       selectedColor("     ******  ***   **                          *         *                ").trim(),
//       selectedColor("    **   *  * **   **                         **        **                ").trim(),
//       selectedColor("   *    *  *  **   **                         **        **                ").trim(),
//       selectedColor("       *  *   *    **        **   ****      ********  ********    ****    ").trim(),
//       selectedColor("      ** **  *     **  ***    **    ***  * ********  ********    * ***  * ").trim(),
//       selectedColor("      ** ** *      ** * ***   **     ****     **        **      *   ****  ").trim(),
//       selectedColor("      ** ***       ***   ***  **      **      **        **     **    **   ").trim(),
//       selectedColor("      ** ** ***    **     **  **      **      **        **     **    **   ").trim(),
//       selectedColor("      ** **   ***  **     **  **      **      **        **     **    **   ").trim(),
//       selectedColor("      *  **     ** **     **  **      **      **        **     **    **   ").trim(),
//       selectedColor("         *      ** **     **  **      **      **        **     **    **   ").trim(),
//       selectedColor("     ****     ***  **     **   ******* **     **        **      ******    ").trim(),
//       selectedColor("    *  ********    **     **    *****   **     **        **      ****     ").trim(),
//       selectedColor("   *     ****       **    **                                              ").trim(),
//       selectedColor("   *                      *                                               ").trim(),
//       selectedColor("    **                   *                                                ").trim(),
//       selectedColor("                        *                                                 ").trim(),
//       selectedColor("                       *                                                  ").trim(),



//       "\n",
//       "clear",

//       selectedColor(" @@@  @@@  @@@@@@@@@@    @@@@@@   @@@  @@@@@@@    ").trim(),
//       selectedColor(" @@@  @@@  @@@@@@@@@@@  @@@@@@@@  @@@  @@@@@@@@   ").trim(),
//       selectedColor(" @@!  @@@  @@! @@! @@!  @@!  @@@  @@!  @@!  @@@   ").trim(),
//       selectedColor(" !@!  @!@  !@! !@! !@!  !@!  @!@  !@!  !@!  @!@   ").trim(),
//       selectedColor(" @!@  !@!  @!! !!@ @!@  @!@!@!@!  !!@  @!@!!@!    ").trim(),
//       selectedColor(" !@!  !!!  !@!   ! !@!  !!!@!!!!  !!!  !!@!@!     ").trim(),
//       selectedColor(" !!:  !!!  !!:     !!:  !!:  !!!  !!:  !!: :!!    ").trim(),
//       selectedColor(" :!:  !:!  :!:     :!:  :!:  !:!  :!:  :!:  !:!   ").trim(),
//       selectedColor(" ::::: ::  :::     ::   ::   :::   ::  ::   :::   ").trim(),
//       selectedColor("  : :  :    :      :     :   : :  :     :   : :   ").trim(),
//       "\n",

//       selectedColor("   @@@@@@   @@@       @@@  ").trim(),
//       selectedColor("  @@@@@@@@  @@@       @@@  ").trim(),
//       selectedColor("  @@!  @@@  @@!       @@!  ").trim(),
//       selectedColor("  !@!  @!@  !@!       !@!  ").trim(),
//       selectedColor("  @!@!@!@!  @!!       !!@  ").trim(),
//       selectedColor("  !!!@!!!!  !!!       !!!  ").trim(),
//       selectedColor("  !!:  !!!  !!:       !!:  ").trim(),
//       selectedColor("  :!:  !:!   :!:      :!:  ").trim(),
//       selectedColor("  ::   :::   :: ::::   ::  ").trim(),
//       selectedColor("   :   : :  : :: : :  :    ").trim(),


//       "\n",

//       selectedColor("   @@@@@@@   @@@  @@@  @@@  @@@  @@@@@@@  @@@@@@@   @@@@@@   ").trim(),
//       selectedColor("   @@@@@@@@  @@@  @@@  @@@  @@@  @@@@@@@  @@@@@@@  @@@@@@@@  ").trim(),
//       selectedColor("   @@!  @@@  @@!  @@@  @@!  @@@    @@!      @@!    @@!  @@@  ").trim(),
//       selectedColor("   !@   @!@  !@!  @!@  !@!  @!@    !@!      !@!    !@!  @!@  ").trim(),
//       selectedColor("   @!@!@!@   @!@!@!@!  @!@  !@!    @!!      @!!    @!@  !@!  ").trim(),
//       selectedColor("   !!!@!!!!  !!!@!!!!  !@!  !!!    !!!      !!!    !@!  !!!  ").trim(),
//       selectedColor("   !!:  !!!  !!:  !!!  !!:  !!!    !!:      !!:    !!:  !!!  ").trim(),
//       selectedColor("   :!:  !:!  :!:  !:!  :!:  !:!    :!:      :!:    :!:  !:!  ").trim(),
//       selectedColor("    :: ::::  ::   :::  ::::: ::     ::       ::    ::::: ::  ").trim(),
//       selectedColor("   :: : ::    :   : :   : :  :      :        :      : :  :   ").trim(),


//       "\n",
//       "clear",
//       selectedColor("  ?????????? ???????? ??????? ??????        ").trim(),
//       selectedColor("  ??         ??    ?? ??   ?? ??   ??       ").trim(),
//       selectedColor("  ??         ??    ?? ??   ?? ??    ??      ").trim(),
//       selectedColor("  ??         ??    ?? ??   ?? ??    ??      ").trim(),
//       selectedColor("  ??         ??    ?? ??   ?? ??    ??      ").trim(),
//       selectedColor("  ??  ?????? ??    ?? ??   ?? ??    ??      ").trim(),
//       selectedColor("  ??  ??  ?? ??    ?? ??   ?? ??    ??      ").trim(),
//       selectedColor("  ??      ?? ??    ?? ??   ?? ??   ??       ").trim(),
//       selectedColor("  ?????????? ???????? ??????? ??????        ").trim(),
//       "\n",

//       selectedColor("  ?????????? ??      ?? ????????           ").trim(),
//       selectedColor("  ??      ?? ??      ?? ??                 ").trim(),
//       selectedColor("  ??      ?? ??      ?? ??                 ").trim(),
//       selectedColor("  ??      ?? ??      ?? ??                 ").trim(),
//       selectedColor("  ?????????? ?????????? ????????           ").trim(),
//       selectedColor("  ??      ??         ?? ??                 ").trim(),
//       selectedColor("  ??      ??         ?? ??                 ").trim(),
//       selectedColor("  ??      ??         ?? ??                 ").trim(),
//       selectedColor("  ?????????? ?????????? ????????           ").trim(),



//     ];
//     return frames;
//   } catch (error) {
//     console.error('Error:', error);
//     return [];
//   }
// }


// /**
//  * Clear the screen.
//  */
// function clearScreen() {
//   process.stdout.write(ansiEscapes.clearScreen);
// }

// /**
//  * Display the ASCII animation.
//  * @param {Array<string>} frames - The frames to display.
//  */
// async function displayAnimation(frames) {
//   clearScreen();
//   process.stdout.write(ansiEscapes.cursorTo(0, 0));
//   for (let i = 0; i < frames.length; i++) {
//     if (frames[i] == 'clear') {
//       const delay = 1000;
//       const start = new Date().getTime();
//       while (new Date().getTime() < start + delay) {
//         // Do nothing
//       }
//       clearScreen();
//     } else {
//       process.stdout.write(frames[i] + "\n");
//       const delay = 50;
//       const start = new Date().getTime();
//       while (new Date().getTime() < start + delay) {
//         // Do nothing
//       }
//     }
//   };
// }


// /**
//  * Inquirer prompt to select color.
//  */
// inquirer
//   .prompt([
//     {
//       type: 'list',
//       name: 'color',
//       message: 'Pick a color for the animation:',
//       choices: colorOptions.map(opt => opt.name)
//     }
//   ])
//   .then(answers => {
//     const selectedColor = colorOptions.find(opt => opt.name === answers.color).color;
//     let frames = generateFrames(selectedColor);
//     if (frames.length != 0) {
//       displayAnimation(frames);
//     } else {
//       console.log("Sorry Frames Not Generated");
//     }

//   })
//   .catch(error => {
//     console.error('Error:', error);
//   });




// //set timeout to end code execution after certain time
// const pauseDuration = 10000;
// setTimeout(() => {
//   process.exit();
// }, pauseDuration);



