/**
 * @author umair-ali-bhutto
 * @since 2023-05-3
 * @version 2.1
 */
import ansiEscapes from 'ansi-escapes';
import chalk from 'chalk';
import inquirer from 'inquirer';


/**
 * Predefined color choices.
 * @type {Array<Object>}
 */
const colorOptions = [
  { name: 'Magenta', color: chalk.rgb(255, 0, 255) },
  { name: 'Green', color: chalk.rgb(0, 255, 0) },
  { name: 'Cyan', color: chalk.rgb(0, 255, 255) },
  { name: 'Yellow', color: chalk.rgb(255, 255, 0) },
  { name: 'White', color: chalk.rgb(255, 255, 255) },
  { name: 'Coral', color: chalk.rgb(255, 127, 80) },
  { name: 'Blue', color: chalk.rgb(0, 0, 255) },
  { name: 'Red', color: chalk.rgb(255, 0, 0) },
];


/**
 * Generate frames for the ASCII animation.
 * @param {Function} selectedColor - The selected color function.
 * @returns {Array<string>} The generated frames.
 */
function generateFrames(selectedColor) {
  try {
    let frames = [

      selectedColor(" ??      ?? ?????????? ???????? ???????? ????????   ").trim(),
      selectedColor(" ??      ?? ??  ??  ?? ??    ??    ??    ??    ??   ").trim(),
      selectedColor(" ??      ?? ??  ??  ?? ??    ??    ??    ??    ??   ").trim(),
      selectedColor(" ??      ?? ??  ??  ?? ??    ??    ??    ??    ??   ").trim(),
      selectedColor(" ??      ?? ??  ??  ?? ??    ??    ??    ??    ??   ").trim(),
      selectedColor(" ??      ?? ??      ?? ????????    ??    ????????      ").trim(),
      selectedColor(" ??      ?? ??      ?? ??    ??    ??    ??  ??     ").trim(),
      selectedColor(" ??      ?? ??      ?? ??    ??    ??    ??   ??    ").trim(),
      selectedColor(" ?????????? ??      ?? ??    ?? ???????? ??    ??   ").trim(),

      "\n",


      selectedColor(" ???????? ??       ????????    ").trim(),
      selectedColor(" ??    ?? ??          ??       ").trim(),
      selectedColor(" ??    ?? ??          ??       ").trim(),
      selectedColor(" ??    ?? ??          ??       ").trim(),
      selectedColor(" ??    ?? ??          ??       ").trim(),
      selectedColor(" ???????? ??          ??       ").trim(),
      selectedColor(" ??    ?? ??          ??       ").trim(),
      selectedColor(" ??    ?? ??          ??       ").trim(),
      selectedColor(" ??    ?? ???????? ????????    ").trim(),

      "\n",

      selectedColor(" ????????  ??    ?? ??    ?? ???????? ???????? ????????     ").trim(),
      selectedColor(" ??    ??  ??    ?? ??    ??    ??       ??    ??    ??     ").trim(),
      selectedColor(" ??    ??  ??    ?? ??    ??    ??       ??    ??    ??     ").trim(),
      selectedColor(" ??    ??  ??    ?? ??    ??    ??       ??    ??    ??     ").trim(),
      selectedColor(" ????????  ???????? ??    ??    ??       ??    ??    ??     ").trim(),
      selectedColor(" ??    ??  ??    ?? ??    ??    ??       ??    ??    ??     ").trim(),
      selectedColor(" ??    ??  ??    ?? ??    ??    ??       ??    ??    ??     ").trim(),
      selectedColor(" ??    ??  ??    ?? ??    ??    ??       ??    ??    ??     ").trim(),
      selectedColor(" ????????  ??    ?? ????????    ??       ??    ????????     ").trim(),






      "\n",
      "clear",




      selectedColor("  /$$   /$$                         /$$            ").trim(),
      selectedColor(" | $$  | $$                        |__/            ").trim(),
      selectedColor(" | $$  | $$ /$$$$$$/$$$$   /$$$$$$  /$$  /$$$$$$   ").trim(),
      selectedColor(" | $$  | $$| $$_  $$_  $$ |____  $$| $$ /$$__  $$  ").trim(),
      selectedColor(" | $$  | $$| $$ \\ $$ \\ $$  /$$$$$$$| $$| $$  \\__/  ").trim(),
      selectedColor(" | $$  | $$| $$ | $$ | $$ /$$__  $$| $$| $$        ").trim(),
      selectedColor(" |  $$$$$$/| $$ | $$ | $$|  $$$$$$$| $$| $$        ").trim(),
      selectedColor("  \\______/ |__/ |__/ |__/ \\_______/|__/|__/        ").trim(),

      "\n",

      selectedColor("      /$$$$$$  /$$ /$$    ").trim(),
      selectedColor("     /$$__  $$| $$|__/    ").trim(),
      selectedColor("    | $$  \\ $$| $$ /$$    ").trim(),
      selectedColor("    | $$$$$$$$| $$| $$    ").trim(),
      selectedColor("    | $$__  $$| $$| $$    ").trim(),
      selectedColor("    | $$  | $$| $$| $$    ").trim(),
      selectedColor("    | $$  | $$| $$| $$    ").trim(),
      selectedColor("    |__/  |__/|__/|__/    ").trim(),


      "\n",

      selectedColor("   /$$$$$$$  /$$                   /$$       /$$              ").trim(),
      selectedColor("  | $$__  $$| $$                  | $$      | $$              ").trim(),
      selectedColor("  | $$  \\ $$| $$$$$$$  /$$   /$$ /$$$$$$   /$$$$$$    /$$$$$$ ").trim(),
      selectedColor("  | $$$$$$$ | $$__  $$| $$  | $$|_  $$_/  |_  $$_/   /$$__  $$").trim(),
      selectedColor("  | $$__  $$| $$  \\ $$| $$  | $$  | $$      | $$    | $$  \\ $$").trim(),
      selectedColor("  | $$  \\ $$| $$  | $$| $$  | $$  | $$ /$$  | $$ /$$| $$  | $$").trim(),
      selectedColor("  | $$$$$$$/| $$  | $$|  $$$$$$/  |  $$$$/  |  $$$$/|  $$$$$$/").trim(),
      selectedColor("  |_______/ |__/  |__/ \\______/    \\___/     \\___/   \\______/ ").trim(),




      "\n",
      "clear",


      selectedColor(" UUUUUUUU     UUUUUUUU                                            iiii                          ").trim(),
      selectedColor(" U::::::U     U::::::U                                           i::::i                         ").trim(),
      selectedColor(" U::::::U     U::::::U                                            iiii                          ").trim(),
      selectedColor(" UU:::::U     U:::::UU                                                                          ").trim(),
      selectedColor("  U:::::U     U:::::U    mmmmmmm    mmmmmmm     aaaaaaaaaaaaa   iiiiiii rrrrr   rrrrrrrrr       ").trim(),
      selectedColor("  U:::::D     D:::::U  mm:::::::m  m:::::::mm   a::::::::::::a  i:::::i r::::rrr:::::::::r      ").trim(),
      selectedColor("  U:::::D     D:::::U m::::::::::mm::::::::::m  aaaaaaaaa:::::a  i::::i r:::::::::::::::::r     ").trim(),
      selectedColor("  U:::::D     D:::::U m::::::::::::::::::::::m           a::::a  i::::i rr::::::rrrrr::::::r    ").trim(),
      selectedColor("  U:::::D     D:::::U m:::::mmm::::::mmm:::::m    aaaaaaa:::::a  i::::i  r:::::r     r:::::r    ").trim(),
      selectedColor("  U:::::D     D:::::U m::::m   m::::m   m::::m  aa::::::::::::a  i::::i  r:::::r     rrrrrrr    ").trim(),
      selectedColor("  U:::::D     D:::::U m::::m   m::::m   m::::m a::::aaaa::::::a  i::::i  r:::::r                ").trim(),
      selectedColor("  U::::::U   U::::::U m::::m   m::::m   m::::ma::::a    a:::::a  i::::i  r:::::r                ").trim(),
      selectedColor("  U:::::::UUU:::::::U m::::m   m::::m   m::::ma::::a    a:::::a i::::::i r:::::r                ").trim(),
      selectedColor("   UU:::::::::::::UU  m::::m   m::::m   m::::ma:::::aaaa::::::a i::::::i r:::::r                ").trim(),
      selectedColor("     UU:::::::::UU    m::::m   m::::m   m::::m a::::::::::aa:::ai::::::i r:::::r                ").trim(),
      selectedColor("       UUUUUUUUU      mmmmmm   mmmmmm   mmmmmm  aaaaaaaaaa  aaaaiiiiiiii rrrrrrr                ").trim(),
      "\n",

      selectedColor("                AAA               lllllll   iiii     ").trim(),
      selectedColor("               A:::A              l:::::l  i::::i    ").trim(),
      selectedColor("              A:::::A             l:::::l   iiii     ").trim(),
      selectedColor("             A:::::::A            l:::::l            ").trim(),
      selectedColor("            A:::::::::A            l::::l iiiiiii    ").trim(),
      selectedColor("           A:::::A:::::A           l::::l i:::::i    ").trim(),
      selectedColor("          A:::::A A:::::A          l::::l  i::::i    ").trim(),
      selectedColor("         A:::::A   A:::::A         l::::l  i::::i    ").trim(),
      selectedColor("        A:::::A     A:::::A        l::::l  i::::i    ").trim(),
      selectedColor("       A:::::AAAAAAAAA:::::A       l::::l  i::::i    ").trim(),
      selectedColor("      A:::::::::::::::::::::A      l::::l  i::::i    ").trim(),
      selectedColor("     A:::::AAAAAAAAAAAAA:::::A     l::::l  i::::i    ").trim(),
      selectedColor("    A:::::A             A:::::A   l::::::li::::::i   ").trim(),
      selectedColor("   A:::::A               A:::::A  l::::::li::::::i   ").trim(),
      selectedColor("  A:::::A                 A:::::A l::::::li::::::i   ").trim(),
      selectedColor(" AAAAAAA                   AAAAAAAlllllllliiiiiiii   ").trim(),
      "\n",

      selectedColor("  BBBBBBBBBBBBBBBBB   hhhhhhh                                        tttt                   tttt                           ").trim(),
      selectedColor("  B::::::::::::::::B  h:::::h                                     ttt:::t                ttt:::t                           ").trim(),
      selectedColor("  B::::::BBBBBB:::::B h:::::h                                     t:::::t                t:::::t                           ").trim(),
      selectedColor("  BB:::::B     B:::::Bh:::::h                                     t:::::t                t:::::t                           ").trim(),
      selectedColor("    B::::B     B:::::B h::::h hhhhh       uuuuuu    uuuuuu  ttttttt:::::ttttttt    ttttttt:::::ttttttt       ooooooooooo   ").trim(),
      selectedColor("    B::::B     B:::::B h::::hh:::::hhh    u::::u    u::::u  t:::::::::::::::::t    t:::::::::::::::::t     oo:::::::::::oo ").trim(),
      selectedColor("    B::::BBBBBB:::::B  h::::::::::::::hh  u::::u    u::::u  t:::::::::::::::::t    t:::::::::::::::::t    o:::::::::::::::o").trim(),
      selectedColor("    B:::::::::::::BB   h:::::::hhh::::::h u::::u    u::::u  tttttt:::::::tttttt    tttttt:::::::tttttt    o:::::ooooo:::::o").trim(),
      selectedColor("    B::::BBBBBB:::::B  h::::::h   h::::::hu::::u    u::::u        t:::::t                t:::::t          o::::o     o::::o").trim(),
      selectedColor("    B::::B     B:::::B h:::::h     h:::::hu::::u    u::::u        t:::::t                t:::::t          o::::o     o::::o").trim(),
      selectedColor("    B::::B     B:::::B h:::::h     h:::::hu::::u    u::::u        t:::::t                t:::::t          o::::o     o::::o").trim(),
      selectedColor("    B::::B     B:::::B h:::::h     h:::::hu:::::uuuu:::::u        t:::::t    tttttt      t:::::t    tttttto::::o     o::::o").trim(),
      selectedColor("  BB:::::BBBBBB::::::B h:::::h     h:::::hu:::::::::::::::uu      t::::::tttt:::::t      t::::::tttt:::::to:::::ooooo:::::o").trim(),
      selectedColor("  B:::::::::::::::::B  h:::::h     h:::::h u:::::::::::::::u      tt::::::::::::::t      tt::::::::::::::to:::::::::::::::o").trim(),
      selectedColor("  B::::::::::::::::B   h:::::h     h:::::h  uu::::::::uu:::u        tt:::::::::::tt        tt:::::::::::tt oo:::::::::::oo ").trim(),
      selectedColor("  BBBBBBBBBBBBBBBBB    hhhhhhh     hhhhhhh    uuuuuuuu  uuuu          ttttttttttt            ttttttttttt     ooooooooooo   ").trim(),


      "\n",
      "clear",

      selectedColor(" ██╗   ██╗███╗   ███╗ █████╗ ██╗██████╗  ").trim(),
      selectedColor(" ██║   ██║████╗ ████║██╔══██╗██║██╔══██╗ ").trim(),
      selectedColor(" ██║   ██║██╔████╔██║███████║██║██████╔╝ ").trim(),
      selectedColor(" ██║   ██║██║╚██╔╝██║██╔══██║██║██╔══██╗ ").trim(),
      selectedColor(" ╚██████╔╝██║ ╚═╝ ██║██║  ██║██║██║  ██║ ").trim(),
      selectedColor("  ╚═════╝ ╚═╝     ╚═╝╚═╝  ╚═╝╚═╝╚═╝  ╚═╝ ").trim(),

      "\n",
      selectedColor("   █████╗ ██╗     ██╗  ").trim(),
      selectedColor("  ██╔══██╗██║     ██║  ").trim(),
      selectedColor("  ███████║██║     ██║  ").trim(),
      selectedColor("  ██╔══██║██║     ██║  ").trim(),
      selectedColor("  ██║  ██║███████╗██║  ").trim(),
      selectedColor("  ╚═╝  ╚═╝╚══════╝╚═╝  ").trim(),
      "\n",

      selectedColor("  ██████╗ ██╗  ██╗██╗   ██╗████████╗████████╗ ██████╗ ").trim(),
      selectedColor("  ██╔══██╗██║  ██║██║   ██║╚══██╔══╝╚══██╔══╝██╔═══██╗").trim(),
      selectedColor("  ██████╔╝███████║██║   ██║   ██║      ██║   ██║   ██║").trim(),
      selectedColor("  ██╔══██╗██╔══██║██║   ██║   ██║      ██║   ██║   ██║").trim(),
      selectedColor("  ██████╔╝██║  ██║╚██████╔╝   ██║      ██║   ╚██████╔╝").trim(),
      selectedColor("  ╚═════╝ ╚═╝  ╚═╝ ╚═════╝    ╚═╝      ╚═╝    ╚═════╝ ").trim(),




      "\n",
      "clear",
      selectedColor(" >=>     >=>                                          ").trim(),
      selectedColor(" >=>     >=>                            >>            ").trim(),
      selectedColor(" >=>     >=> >===>>=>>==>     >=> >=>      >> >==>    ").trim(),
      selectedColor(" >=>     >=>  >=>  >>  >=>  >=>   >=>  >=>  >=>       ").trim(),
      selectedColor(" >=>     >=>  >=>  >>  >=> >=>    >=>  >=>  >=>       ").trim(),
      selectedColor(" >=>     >=>  >=>  >>  >=>  >=>   >=>  >=>  >=>       ").trim(),
      selectedColor("   >====>    >==>  >>  >=>   >==>>>==> >=> >==>       ").trim(),
      "\n",
      selectedColor("         >>        >=>         ").trim(),
      selectedColor("        >>=>       >=>  >>     ").trim(),
      selectedColor("       >> >=>      >=>         ").trim(),
      selectedColor("      >=>  >=>     >=> >=>     ").trim(),
      selectedColor("     >=====>>=>    >=> >=>     ").trim(),
      selectedColor("    >=>      >=>   >=> >=>     ").trim(),
      selectedColor("   >=>        >=> >==> >=>     ").trim(),


      "\n",

      selectedColor("  >=>>=>                        >=>     >=>              ").trim(),
      selectedColor("  >>   >=>  >=>                 >=>     >=>              ").trim(),
      selectedColor("  >>    >=> >=>      >=>  >=> >=>>==> >=>>==>    >=>     ").trim(),
      selectedColor("  >==>>=>   >=>>=>   >=>  >=>   >=>     >=>    >=>  >=>  ").trim(),
      selectedColor("  >>    >=> >=>  >=> >=>  >=>   >=>     >=>   >=>    >=> ").trim(),
      selectedColor("  >>     >> >>   >=> >=>  >=>   >=>     >=>    >=>  >=>  ").trim(),
      selectedColor("  >===>>=>  >=>  >=>   >==>=>    >=>     >=>     >=>     ").trim(),







      "\n",

      "clear",
      selectedColor("      ***** *    **                                                     ").trim(),
      selectedColor("   ******  *  *****                                 *                   ").trim(),
      selectedColor("  **   *  *     *****                              ***                  ").trim(),
      selectedColor(" *    *  **     * **                                *                   ").trim(),
      selectedColor("     *  ***     *                                         ***  ****     ").trim(),
      selectedColor("    **   **     *     *** **** ****       ****    ***      **** **** *  ").trim(),
      selectedColor("    **   **     *      *** **** ***  *   * ***  *  ***      **   ****   ").trim(),
      selectedColor("    **   **     *       **  **** ****   *   ****    **      **          ").trim(),
      selectedColor("    **   **     *       **   **   **   **    **     **      **          ").trim(),
      selectedColor("    **   **     *       **   **   **   **    **     **      **          ").trim(),
      selectedColor("     **  **     *       **   **   **   **    **     **      **          ").trim(),
      selectedColor("      ** *      *       **   **   **   **    **     **      **          ").trim(),
      selectedColor("       ***      *       **   **   **   **    **     **      ***         ").trim(),
      selectedColor("        ********        ***  ***  ***   ***** **    *** *    ***        ").trim(),
      selectedColor("          ****           ***  ***  ***   ***   **    ***                ").trim(),

      "\n",

      selectedColor("          **        ***             ").trim(),
      selectedColor("       *****         ***      *     ").trim(),
      selectedColor("      *  ***          **     ***    ").trim(),
      selectedColor("         ***          **      *     ").trim(),
      selectedColor("        *  **         **            ").trim(),
      selectedColor("        *  **         **    ***     ").trim(),
      selectedColor("       *    **        **     ***    ").trim(),
      selectedColor("       *    **        **      **    ").trim(),
      selectedColor("      *      **       **      **    ").trim(),
      selectedColor("      *********       **      **    ").trim(),
      selectedColor("     *        **      **      **    ").trim(),
      selectedColor("     *        **      **      **    ").trim(),
      selectedColor("    *****      **     **      **    ").trim(),
      selectedColor("   *   ****    ** *   *** *   *** * ").trim(),
      selectedColor("  *     **      **     ***     ***  ").trim(),
      selectedColor("  *                                 ").trim(),
      selectedColor("   **                               ").trim(),
      "\n",


      selectedColor("        ***** **     *                                                    ").trim(),
      selectedColor("     ******  ***   **                          *         *                ").trim(),
      selectedColor("    **   *  * **   **                         **        **                ").trim(),
      selectedColor("   *    *  *  **   **                         **        **                ").trim(),
      selectedColor("       *  *   *    **        **   ****      ********  ********    ****    ").trim(),
      selectedColor("      ** **  *     **  ***    **    ***  * ********  ********    * ***  * ").trim(),
      selectedColor("      ** ** *      ** * ***   **     ****     **        **      *   ****  ").trim(),
      selectedColor("      ** ***       ***   ***  **      **      **        **     **    **   ").trim(),
      selectedColor("      ** ** ***    **     **  **      **      **        **     **    **   ").trim(),
      selectedColor("      ** **   ***  **     **  **      **      **        **     **    **   ").trim(),
      selectedColor("      *  **     ** **     **  **      **      **        **     **    **   ").trim(),
      selectedColor("         *      ** **     **  **      **      **        **     **    **   ").trim(),
      selectedColor("     ****     ***  **     **   ******* **     **        **      ******    ").trim(),
      selectedColor("    *  ********    **     **    *****   **     **        **      ****     ").trim(),
      selectedColor("   *     ****       **    **                                              ").trim(),
      selectedColor("   *                      *                                               ").trim(),
      selectedColor("    **                   *                                                ").trim(),
      selectedColor("                        *                                                 ").trim(),
      selectedColor("                       *                                                  ").trim(),



      "\n",
      "clear",

      selectedColor(" @@@  @@@  @@@@@@@@@@    @@@@@@   @@@  @@@@@@@    ").trim(),
      selectedColor(" @@@  @@@  @@@@@@@@@@@  @@@@@@@@  @@@  @@@@@@@@   ").trim(),
      selectedColor(" @@!  @@@  @@! @@! @@!  @@!  @@@  @@!  @@!  @@@   ").trim(),
      selectedColor(" !@!  @!@  !@! !@! !@!  !@!  @!@  !@!  !@!  @!@   ").trim(),
      selectedColor(" @!@  !@!  @!! !!@ @!@  @!@!@!@!  !!@  @!@!!@!    ").trim(),
      selectedColor(" !@!  !!!  !@!   ! !@!  !!!@!!!!  !!!  !!@!@!     ").trim(),
      selectedColor(" !!:  !!!  !!:     !!:  !!:  !!!  !!:  !!: :!!    ").trim(),
      selectedColor(" :!:  !:!  :!:     :!:  :!:  !:!  :!:  :!:  !:!   ").trim(),
      selectedColor(" ::::: ::  :::     ::   ::   :::   ::  ::   :::   ").trim(),
      selectedColor("  : :  :    :      :     :   : :  :     :   : :   ").trim(),
      "\n",

      selectedColor("   @@@@@@   @@@       @@@  ").trim(),
      selectedColor("  @@@@@@@@  @@@       @@@  ").trim(),
      selectedColor("  @@!  @@@  @@!       @@!  ").trim(),
      selectedColor("  !@!  @!@  !@!       !@!  ").trim(),
      selectedColor("  @!@!@!@!  @!!       !!@  ").trim(),
      selectedColor("  !!!@!!!!  !!!       !!!  ").trim(),
      selectedColor("  !!:  !!!  !!:       !!:  ").trim(),
      selectedColor("  :!:  !:!   :!:      :!:  ").trim(),
      selectedColor("  ::   :::   :: ::::   ::  ").trim(),
      selectedColor("   :   : :  : :: : :  :    ").trim(),


      "\n",

      selectedColor("   @@@@@@@   @@@  @@@  @@@  @@@  @@@@@@@  @@@@@@@   @@@@@@   ").trim(),
      selectedColor("   @@@@@@@@  @@@  @@@  @@@  @@@  @@@@@@@  @@@@@@@  @@@@@@@@  ").trim(),
      selectedColor("   @@!  @@@  @@!  @@@  @@!  @@@    @@!      @@!    @@!  @@@  ").trim(),
      selectedColor("   !@   @!@  !@!  @!@  !@!  @!@    !@!      !@!    !@!  @!@  ").trim(),
      selectedColor("   @!@!@!@   @!@!@!@!  @!@  !@!    @!!      @!!    @!@  !@!  ").trim(),
      selectedColor("   !!!@!!!!  !!!@!!!!  !@!  !!!    !!!      !!!    !@!  !!!  ").trim(),
      selectedColor("   !!:  !!!  !!:  !!!  !!:  !!!    !!:      !!:    !!:  !!!  ").trim(),
      selectedColor("   :!:  !:!  :!:  !:!  :!:  !:!    :!:      :!:    :!:  !:!  ").trim(),
      selectedColor("    :: ::::  ::   :::  ::::: ::     ::       ::    ::::: ::  ").trim(),
      selectedColor("   :: : ::    :   : :   : :  :      :        :      : :  :   ").trim(),


      "\n",
      "clear",
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
      selectedColor("  ?????????? ?????????? ????????           ").trim(),



    ];
    return frames;
  } catch (error) {
    console.error('Error:', error);
    return [];
  }
}

/**
 * Clear the screen.
 */
function clearScreen() {
  process.stdout.write(ansiEscapes.clearScreen);
}

/**
 * Delay function using Promise.
 * @param {number} ms - The delay in milliseconds.
 * @returns {Promise} - A promise that resolves after the delay.
 */
const delay = ms => new Promise(resolve => setTimeout(resolve, ms));

/**
 * Display the ASCII animation.
 * @param {Array<string>} frames - The frames to display.
 */
async function displayAnimation(frames) {
  clearScreen();

  for (const frame of frames) {
    if(frame == 'clear'){
      await delay(2000); // Delay between next frames if clear found
      clearScreen();
    }else{
      process.stdout.write(frame + "\n");
    }
    await delay(50); // Delay between frames
  }
}

/**
 * Inquirer prompt to select color.
 */
inquirer
  .prompt([
    {
      type: 'rawlist',
      name: 'color',
      message: 'Pick a color for the animation:',
      choices: colorOptions.map(opt => opt.name)
    }
  ])
  .then(async answers => {
    const selectedColor = colorOptions.find(opt => opt.name === answers.color).color;
    const frames = generateFrames(selectedColor);

    if (frames.length !== 0) {
      await displayAnimation(frames);
    } else {
      console.log("Sorry, frames not generated.");
    }
  })
  .catch(error => {
    console.error('Error:', error);
  });

// Handle Ctrl + C (SIGINT)
process.on('SIGINT', () => {
  console.log("Process terminated.");
  process.exit();
});
