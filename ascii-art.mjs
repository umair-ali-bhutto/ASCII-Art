import ansiEscapes from 'ansi-escapes';
import chalk from 'chalk';


const frames = [

  chalk.rgb(0, 255, 250)(" ??      ?? ?????????? ???????? ???????? ????????   ").trim(),
  chalk.rgb(0, 255, 250)(" ??      ?? ??  ??  ?? ??    ??    ??    ??    ??   ").trim(),
  chalk.rgb(0, 255, 250)(" ??      ?? ??  ??  ?? ??    ??    ??    ??    ??   ").trim(),
  chalk.rgb(0, 255, 250)(" ??      ?? ??  ??  ?? ??    ??    ??    ??    ??   ").trim(),
  chalk.rgb(0, 255, 250)(" ??      ?? ??  ??  ?? ??    ??    ??    ??    ??   ").trim(),
  chalk.rgb(0, 255, 250)(" ??      ?? ??      ?? ????????    ??    ????????      ").trim(),
  chalk.rgb(0, 255, 250)(" ??      ?? ??      ?? ??    ??    ??    ??  ??     ").trim(),
  chalk.rgb(0, 255, 250)(" ??      ?? ??      ?? ??    ??    ??    ??   ??    ").trim(),
  chalk.rgb(0, 255, 250)(" ?????????? ??      ?? ??    ?? ???????? ??    ??   ").trim(),

  "\n",


  chalk.rgb(0, 255, 250)(" ???????? ??       ????????    ").trim(),
  chalk.rgb(0, 255, 250)(" ??    ?? ??          ??       ").trim(),
  chalk.rgb(0, 255, 250)(" ??    ?? ??          ??       ").trim(),
  chalk.rgb(0, 255, 250)(" ??    ?? ??          ??       ").trim(),
  chalk.rgb(0, 255, 250)(" ??    ?? ??          ??       ").trim(),
  chalk.rgb(0, 255, 250)(" ???????? ??          ??       ").trim(),
  chalk.rgb(0, 255, 250)(" ??    ?? ??          ??       ").trim(),
  chalk.rgb(0, 255, 250)(" ??    ?? ??          ??       ").trim(),
  chalk.rgb(0, 255, 250)(" ??    ?? ???????? ????????    ").trim(),

  "\n",

  chalk.rgb(0, 255, 250)(" ????????  ??    ?? ??    ?? ???????? ???????? ????????     ").trim(),
  chalk.rgb(0, 255, 250)(" ??    ??  ??    ?? ??    ??    ??       ??    ??    ??     ").trim(),
  chalk.rgb(0, 255, 250)(" ??    ??  ??    ?? ??    ??    ??       ??    ??    ??     ").trim(),
  chalk.rgb(0, 255, 250)(" ??    ??  ??    ?? ??    ??    ??       ??    ??    ??     ").trim(),
  chalk.rgb(0, 255, 250)(" ????????  ???????? ??    ??    ??       ??    ??    ??     ").trim(),
  chalk.rgb(0, 255, 250)(" ??    ??  ??    ?? ??    ??    ??       ??    ??    ??     ").trim(),
  chalk.rgb(0, 255, 250)(" ??    ??  ??    ?? ??    ??    ??       ??    ??    ??     ").trim(),
  chalk.rgb(0, 255, 250)(" ??    ??  ??    ?? ??    ??    ??       ??    ??    ??     ").trim(),
  chalk.rgb(0, 255, 250)(" ????????  ??    ?? ????????    ??       ??    ????????     ").trim(),






  "\n",
  "clear",




  chalk.rgb(0, 255, 250)("  /$$   /$$                         /$$            ").trim(),
  chalk.rgb(0, 255, 250)(" | $$  | $$                        |__/            ").trim(),
  chalk.rgb(0, 255, 250)(" | $$  | $$ /$$$$$$/$$$$   /$$$$$$  /$$  /$$$$$$   ").trim(),
  chalk.rgb(0, 255, 250)(" | $$  | $$| $$_  $$_  $$ |____  $$| $$ /$$__  $$  ").trim(),
  chalk.rgb(0, 255, 250)(" | $$  | $$| $$ \\ $$ \\ $$  /$$$$$$$| $$| $$  \\__/  ").trim(),
  chalk.rgb(0, 255, 250)(" | $$  | $$| $$ | $$ | $$ /$$__  $$| $$| $$        ").trim(),
  chalk.rgb(0, 255, 250)(" |  $$$$$$/| $$ | $$ | $$|  $$$$$$$| $$| $$        ").trim(),
  chalk.rgb(0, 255, 250)("  \\______/ |__/ |__/ |__/ \\_______/|__/|__/        ").trim(),

  "\n",

  chalk.rgb(0, 255, 250)("      /$$$$$$  /$$ /$$    ").trim(),
  chalk.rgb(0, 255, 250)("     /$$__  $$| $$|__/    ").trim(),
  chalk.rgb(0, 255, 250)("    | $$  \\ $$| $$ /$$    ").trim(),
  chalk.rgb(0, 255, 250)("    | $$$$$$$$| $$| $$    ").trim(),
  chalk.rgb(0, 255, 250)("    | $$__  $$| $$| $$    ").trim(),
  chalk.rgb(0, 255, 250)("    | $$  | $$| $$| $$    ").trim(),
  chalk.rgb(0, 255, 250)("    | $$  | $$| $$| $$    ").trim(),
  chalk.rgb(0, 255, 250)("    |__/  |__/|__/|__/    ").trim(),


  "\n",

  chalk.rgb(0, 255, 250)("   /$$$$$$$  /$$                   /$$       /$$              ").trim(),
  chalk.rgb(0, 255, 250)("  | $$__  $$| $$                  | $$      | $$              ").trim(),
  chalk.rgb(0, 255, 250)("  | $$  \\ $$| $$$$$$$  /$$   /$$ /$$$$$$   /$$$$$$    /$$$$$$ ").trim(),
  chalk.rgb(0, 255, 250)("  | $$$$$$$ | $$__  $$| $$  | $$|_  $$_/  |_  $$_/   /$$__  $$").trim(),
  chalk.rgb(0, 255, 250)("  | $$__  $$| $$  \\ $$| $$  | $$  | $$      | $$    | $$  \\ $$").trim(),
  chalk.rgb(0, 255, 250)("  | $$  \\ $$| $$  | $$| $$  | $$  | $$ /$$  | $$ /$$| $$  | $$").trim(),
  chalk.rgb(0, 255, 250)("  | $$$$$$$/| $$  | $$|  $$$$$$/  |  $$$$/  |  $$$$/|  $$$$$$/").trim(),
  chalk.rgb(0, 255, 250)("  |_______/ |__/  |__/ \\______/    \\___/     \\___/   \\______/ ").trim(),




  "\n",
  "clear",


  chalk.rgb(0, 255, 250)(" UUUUUUUU     UUUUUUUU                                            iiii                          ").trim(),
  chalk.rgb(0, 255, 250)(" U::::::U     U::::::U                                           i::::i                         ").trim(),
  chalk.rgb(0, 255, 250)(" U::::::U     U::::::U                                            iiii                          ").trim(),
  chalk.rgb(0, 255, 250)(" UU:::::U     U:::::UU                                                                          ").trim(),
  chalk.rgb(0, 255, 250)("  U:::::U     U:::::U    mmmmmmm    mmmmmmm     aaaaaaaaaaaaa   iiiiiii rrrrr   rrrrrrrrr       ").trim(),
  chalk.rgb(0, 255, 250)("  U:::::D     D:::::U  mm:::::::m  m:::::::mm   a::::::::::::a  i:::::i r::::rrr:::::::::r      ").trim(),
  chalk.rgb(0, 255, 250)("  U:::::D     D:::::U m::::::::::mm::::::::::m  aaaaaaaaa:::::a  i::::i r:::::::::::::::::r     ").trim(),
  chalk.rgb(0, 255, 250)("  U:::::D     D:::::U m::::::::::::::::::::::m           a::::a  i::::i rr::::::rrrrr::::::r    ").trim(),
  chalk.rgb(0, 255, 250)("  U:::::D     D:::::U m:::::mmm::::::mmm:::::m    aaaaaaa:::::a  i::::i  r:::::r     r:::::r    ").trim(),
  chalk.rgb(0, 255, 250)("  U:::::D     D:::::U m::::m   m::::m   m::::m  aa::::::::::::a  i::::i  r:::::r     rrrrrrr    ").trim(),
  chalk.rgb(0, 255, 250)("  U:::::D     D:::::U m::::m   m::::m   m::::m a::::aaaa::::::a  i::::i  r:::::r                ").trim(),
  chalk.rgb(0, 255, 250)("  U::::::U   U::::::U m::::m   m::::m   m::::ma::::a    a:::::a  i::::i  r:::::r                ").trim(),
  chalk.rgb(0, 255, 250)("  U:::::::UUU:::::::U m::::m   m::::m   m::::ma::::a    a:::::a i::::::i r:::::r                ").trim(),
  chalk.rgb(0, 255, 250)("   UU:::::::::::::UU  m::::m   m::::m   m::::ma:::::aaaa::::::a i::::::i r:::::r                ").trim(),
  chalk.rgb(0, 255, 250)("     UU:::::::::UU    m::::m   m::::m   m::::m a::::::::::aa:::ai::::::i r:::::r                ").trim(),
  chalk.rgb(0, 255, 250)("       UUUUUUUUU      mmmmmm   mmmmmm   mmmmmm  aaaaaaaaaa  aaaaiiiiiiii rrrrrrr                ").trim(),
  "\n",

  chalk.rgb(0, 255, 250)("                AAA               lllllll   iiii     ").trim(),
  chalk.rgb(0, 255, 250)("               A:::A              l:::::l  i::::i    ").trim(),
  chalk.rgb(0, 255, 250)("              A:::::A             l:::::l   iiii     ").trim(),
  chalk.rgb(0, 255, 250)("             A:::::::A            l:::::l            ").trim(),
  chalk.rgb(0, 255, 250)("            A:::::::::A            l::::l iiiiiii    ").trim(),
  chalk.rgb(0, 255, 250)("           A:::::A:::::A           l::::l i:::::i    ").trim(),
  chalk.rgb(0, 255, 250)("          A:::::A A:::::A          l::::l  i::::i    ").trim(),
  chalk.rgb(0, 255, 250)("         A:::::A   A:::::A         l::::l  i::::i    ").trim(),
  chalk.rgb(0, 255, 250)("        A:::::A     A:::::A        l::::l  i::::i    ").trim(),
  chalk.rgb(0, 255, 250)("       A:::::AAAAAAAAA:::::A       l::::l  i::::i    ").trim(),
  chalk.rgb(0, 255, 250)("      A:::::::::::::::::::::A      l::::l  i::::i    ").trim(),
  chalk.rgb(0, 255, 250)("     A:::::AAAAAAAAAAAAA:::::A     l::::l  i::::i    ").trim(),
  chalk.rgb(0, 255, 250)("    A:::::A             A:::::A   l::::::li::::::i   ").trim(),
  chalk.rgb(0, 255, 250)("   A:::::A               A:::::A  l::::::li::::::i   ").trim(),
  chalk.rgb(0, 255, 250)("  A:::::A                 A:::::A l::::::li::::::i   ").trim(),
  chalk.rgb(0, 255, 250)(" AAAAAAA                   AAAAAAAlllllllliiiiiiii   ").trim(),
  "\n",

  chalk.rgb(0, 255, 250)("  BBBBBBBBBBBBBBBBB   hhhhhhh                                        tttt                   tttt                           ").trim(),
  chalk.rgb(0, 255, 250)("  B::::::::::::::::B  h:::::h                                     ttt:::t                ttt:::t                           ").trim(),
  chalk.rgb(0, 255, 250)("  B::::::BBBBBB:::::B h:::::h                                     t:::::t                t:::::t                           ").trim(),
  chalk.rgb(0, 255, 250)("  BB:::::B     B:::::Bh:::::h                                     t:::::t                t:::::t                           ").trim(),
  chalk.rgb(0, 255, 250)("    B::::B     B:::::B h::::h hhhhh       uuuuuu    uuuuuu  ttttttt:::::ttttttt    ttttttt:::::ttttttt       ooooooooooo   ").trim(),
  chalk.rgb(0, 255, 250)("    B::::B     B:::::B h::::hh:::::hhh    u::::u    u::::u  t:::::::::::::::::t    t:::::::::::::::::t     oo:::::::::::oo ").trim(),
  chalk.rgb(0, 255, 250)("    B::::BBBBBB:::::B  h::::::::::::::hh  u::::u    u::::u  t:::::::::::::::::t    t:::::::::::::::::t    o:::::::::::::::o").trim(),
  chalk.rgb(0, 255, 250)("    B:::::::::::::BB   h:::::::hhh::::::h u::::u    u::::u  tttttt:::::::tttttt    tttttt:::::::tttttt    o:::::ooooo:::::o").trim(),
  chalk.rgb(0, 255, 250)("    B::::BBBBBB:::::B  h::::::h   h::::::hu::::u    u::::u        t:::::t                t:::::t          o::::o     o::::o").trim(),
  chalk.rgb(0, 255, 250)("    B::::B     B:::::B h:::::h     h:::::hu::::u    u::::u        t:::::t                t:::::t          o::::o     o::::o").trim(),
  chalk.rgb(0, 255, 250)("    B::::B     B:::::B h:::::h     h:::::hu::::u    u::::u        t:::::t                t:::::t          o::::o     o::::o").trim(),
  chalk.rgb(0, 255, 250)("    B::::B     B:::::B h:::::h     h:::::hu:::::uuuu:::::u        t:::::t    tttttt      t:::::t    tttttto::::o     o::::o").trim(),
  chalk.rgb(0, 255, 250)("  BB:::::BBBBBB::::::B h:::::h     h:::::hu:::::::::::::::uu      t::::::tttt:::::t      t::::::tttt:::::to:::::ooooo:::::o").trim(),
  chalk.rgb(0, 255, 250)("  B:::::::::::::::::B  h:::::h     h:::::h u:::::::::::::::u      tt::::::::::::::t      tt::::::::::::::to:::::::::::::::o").trim(),
  chalk.rgb(0, 255, 250)("  B::::::::::::::::B   h:::::h     h:::::h  uu::::::::uu:::u        tt:::::::::::tt        tt:::::::::::tt oo:::::::::::oo ").trim(),
  chalk.rgb(0, 255, 250)("  BBBBBBBBBBBBBBBBB    hhhhhhh     hhhhhhh    uuuuuuuu  uuuu          ttttttttttt            ttttttttttt     ooooooooooo   ").trim(),


  "\n",
  "clear",

  chalk.rgb(0, 255, 250)(" ██╗   ██╗███╗   ███╗ █████╗ ██╗██████╗  ").trim(),
  chalk.rgb(0, 255, 250)(" ██║   ██║████╗ ████║██╔══██╗██║██╔══██╗ ").trim(),
  chalk.rgb(0, 255, 250)(" ██║   ██║██╔████╔██║███████║██║██████╔╝ ").trim(),
  chalk.rgb(0, 255, 250)(" ██║   ██║██║╚██╔╝██║██╔══██║██║██╔══██╗ ").trim(),
  chalk.rgb(0, 255, 250)(" ╚██████╔╝██║ ╚═╝ ██║██║  ██║██║██║  ██║ ").trim(),
  chalk.rgb(0, 255, 250)("  ╚═════╝ ╚═╝     ╚═╝╚═╝  ╚═╝╚═╝╚═╝  ╚═╝ ").trim(),
                                                                                                                        
  "\n",
  chalk.rgb(0, 255, 250)("   █████╗ ██╗     ██╗  ").trim(), 
  chalk.rgb(0, 255, 250)("  ██╔══██╗██║     ██║  ").trim(), 
  chalk.rgb(0, 255, 250)("  ███████║██║     ██║  ").trim(), 
  chalk.rgb(0, 255, 250)("  ██╔══██║██║     ██║  ").trim(), 
  chalk.rgb(0, 255, 250)("  ██║  ██║███████╗██║  ").trim(), 
  chalk.rgb(0, 255, 250)("  ╚═╝  ╚═╝╚══════╝╚═╝  ").trim(), 
  "\n",
  
  chalk.rgb(0, 255, 250)("  ██████╗ ██╗  ██╗██╗   ██╗████████╗████████╗ ██████╗ ").trim(),
  chalk.rgb(0, 255, 250)("  ██╔══██╗██║  ██║██║   ██║╚══██╔══╝╚══██╔══╝██╔═══██╗").trim(),
  chalk.rgb(0, 255, 250)("  ██████╔╝███████║██║   ██║   ██║      ██║   ██║   ██║").trim(),
  chalk.rgb(0, 255, 250)("  ██╔══██╗██╔══██║██║   ██║   ██║      ██║   ██║   ██║").trim(),
  chalk.rgb(0, 255, 250)("  ██████╔╝██║  ██║╚██████╔╝   ██║      ██║   ╚██████╔╝").trim(),
  chalk.rgb(0, 255, 250)("  ╚═════╝ ╚═╝  ╚═╝ ╚═════╝    ╚═╝      ╚═╝    ╚═════╝ ").trim(),
  

  
  
  "\n",
  "clear",
chalk.rgb(0, 255, 250)(" >=>     >=>                                          ").trim(),
chalk.rgb(0, 255, 250)(" >=>     >=>                            >>            ").trim(),
chalk.rgb(0, 255, 250)(" >=>     >=> >===>>=>>==>     >=> >=>      >> >==>    ").trim(),
chalk.rgb(0, 255, 250)(" >=>     >=>  >=>  >>  >=>  >=>   >=>  >=>  >=>       ").trim(),
chalk.rgb(0, 255, 250)(" >=>     >=>  >=>  >>  >=> >=>    >=>  >=>  >=>       ").trim(),
chalk.rgb(0, 255, 250)(" >=>     >=>  >=>  >>  >=>  >=>   >=>  >=>  >=>       ").trim(),
chalk.rgb(0, 255, 250)("   >====>    >==>  >>  >=>   >==>>>==> >=> >==>       ").trim(),
"\n",
chalk.rgb(0, 255, 250)("         >>        >=>         ").trim(), 
chalk.rgb(0, 255, 250)("        >>=>       >=>  >>     ").trim(), 
chalk.rgb(0, 255, 250)("       >> >=>      >=>         ").trim(), 
chalk.rgb(0, 255, 250)("      >=>  >=>     >=> >=>     ").trim(), 
chalk.rgb(0, 255, 250)("     >=====>>=>    >=> >=>     ").trim(), 
chalk.rgb(0, 255, 250)("    >=>      >=>   >=> >=>     ").trim(), 
chalk.rgb(0, 255, 250)("   >=>        >=> >==> >=>     ").trim(), 


"\n",

chalk.rgb(0, 255, 250)("  >=>>=>                        >=>     >=>              ").trim(),
chalk.rgb(0, 255, 250)("  >>   >=>  >=>                 >=>     >=>              ").trim(),
chalk.rgb(0, 255, 250)("  >>    >=> >=>      >=>  >=> >=>>==> >=>>==>    >=>     ").trim(),
chalk.rgb(0, 255, 250)("  >==>>=>   >=>>=>   >=>  >=>   >=>     >=>    >=>  >=>  ").trim(),
chalk.rgb(0, 255, 250)("  >>    >=> >=>  >=> >=>  >=>   >=>     >=>   >=>    >=> ").trim(),
chalk.rgb(0, 255, 250)("  >>     >> >>   >=> >=>  >=>   >=>     >=>    >=>  >=>  ").trim(),
chalk.rgb(0, 255, 250)("  >===>>=>  >=>  >=>   >==>=>    >=>     >=>     >=>     ").trim(),
   




"clear",


"\n",
                                                                                                                                                                                     
chalk.rgb(0, 255, 250)("      ***** *    **                                                     ").trim(),
chalk.rgb(0, 255, 250)("   ******  *  *****                                 *                   ").trim(),
chalk.rgb(0, 255, 250)("  **   *  *     *****                              ***                  ").trim(),
chalk.rgb(0, 255, 250)(" *    *  **     * **                                *                   ").trim(),
chalk.rgb(0, 255, 250)("     *  ***     *                                         ***  ****     ").trim(),
chalk.rgb(0, 255, 250)("    **   **     *     *** **** ****       ****    ***      **** **** *  ").trim(),
chalk.rgb(0, 255, 250)("    **   **     *      *** **** ***  *   * ***  *  ***      **   ****   ").trim(),
chalk.rgb(0, 255, 250)("    **   **     *       **  **** ****   *   ****    **      **          ").trim(),
chalk.rgb(0, 255, 250)("    **   **     *       **   **   **   **    **     **      **          ").trim(),
chalk.rgb(0, 255, 250)("    **   **     *       **   **   **   **    **     **      **          ").trim(),
chalk.rgb(0, 255, 250)("     **  **     *       **   **   **   **    **     **      **          ").trim(),
chalk.rgb(0, 255, 250)("      ** *      *       **   **   **   **    **     **      **          ").trim(),
chalk.rgb(0, 255, 250)("       ***      *       **   **   **   **    **     **      ***         ").trim(),
chalk.rgb(0, 255, 250)("        ********        ***  ***  ***   ***** **    *** *    ***        ").trim(),
chalk.rgb(0, 255, 250)("          ****           ***  ***  ***   ***   **    ***                ").trim(),
chalk.rgb(0, 255, 250)("                                                                        ").trim(),
chalk.rgb(0, 255, 250)("                                                                        ").trim(),
chalk.rgb(0, 255, 250)("                                                                        ").trim(),
chalk.rgb(0, 255, 250)("                                                                        ").trim(),
        
"\n",

chalk.rgb(0, 255, 250)("          **        ***             ").trim(),
chalk.rgb(0, 255, 250)("       *****         ***      *     ").trim(),
chalk.rgb(0, 255, 250)("      *  ***          **     ***    ").trim(),
chalk.rgb(0, 255, 250)("         ***          **      *     ").trim(),
chalk.rgb(0, 255, 250)("        *  **         **            ").trim(),
chalk.rgb(0, 255, 250)("        *  **         **    ***     ").trim(),
chalk.rgb(0, 255, 250)("       *    **        **     ***    ").trim(),
chalk.rgb(0, 255, 250)("       *    **        **      **    ").trim(),
chalk.rgb(0, 255, 250)("      *      **       **      **    ").trim(),
chalk.rgb(0, 255, 250)("      *********       **      **    ").trim(),
chalk.rgb(0, 255, 250)("     *        **      **      **    ").trim(),
chalk.rgb(0, 255, 250)("     *        **      **      **    ").trim(),
chalk.rgb(0, 255, 250)("    *****      **     **      **    ").trim(),
chalk.rgb(0, 255, 250)("   *   ****    ** *   *** *   *** * ").trim(),
chalk.rgb(0, 255, 250)("  *     **      **     ***     ***  ").trim(),
chalk.rgb(0, 255, 250)("  *                                 ").trim(),
chalk.rgb(0, 255, 250)("   **                               ").trim(),
chalk.rgb(0, 255, 250)("                                    ").trim(),
chalk.rgb(0, 255, 250)("                                    ").trim(),
"\n",


chalk.rgb(0, 255, 250)("        ***** **     *                                                    ").trim(),
chalk.rgb(0, 255, 250)("     ******  ***   **                          *         *                ").trim(),
chalk.rgb(0, 255, 250)("    **   *  * **   **                         **        **                ").trim(),
chalk.rgb(0, 255, 250)("   *    *  *  **   **                         **        **                ").trim(),
chalk.rgb(0, 255, 250)("       *  *   *    **        **   ****      ********  ********    ****    ").trim(),
chalk.rgb(0, 255, 250)("      ** **  *     **  ***    **    ***  * ********  ********    * ***  * ").trim(),
chalk.rgb(0, 255, 250)("      ** ** *      ** * ***   **     ****     **        **      *   ****  ").trim(),
chalk.rgb(0, 255, 250)("      ** ***       ***   ***  **      **      **        **     **    **   ").trim(),
chalk.rgb(0, 255, 250)("      ** ** ***    **     **  **      **      **        **     **    **   ").trim(),
chalk.rgb(0, 255, 250)("      ** **   ***  **     **  **      **      **        **     **    **   ").trim(),
chalk.rgb(0, 255, 250)("      *  **     ** **     **  **      **      **        **     **    **   ").trim(),
chalk.rgb(0, 255, 250)("         *      ** **     **  **      **      **        **     **    **   ").trim(),
chalk.rgb(0, 255, 250)("     ****     ***  **     **   ******* **     **        **      ******    ").trim(),
chalk.rgb(0, 255, 250)("    *  ********    **     **    *****   **     **        **      ****     ").trim(),
chalk.rgb(0, 255, 250)("   *     ****       **    **                                              ").trim(),
chalk.rgb(0, 255, 250)("   *                      *                                               ").trim(),
chalk.rgb(0, 255, 250)("    **                   *                                                ").trim(),
chalk.rgb(0, 255, 250)("                        *                                                 ").trim(),
chalk.rgb(0, 255, 250)("                       *                                                  ").trim(),



"clear",
"\n",

chalk.rgb(0, 255, 250)(" @@@  @@@  @@@@@@@@@@    @@@@@@   @@@  @@@@@@@    ").trim(), 
chalk.rgb(0, 255, 250)(" @@@  @@@  @@@@@@@@@@@  @@@@@@@@  @@@  @@@@@@@@   ").trim(), 
chalk.rgb(0, 255, 250)(" @@!  @@@  @@! @@! @@!  @@!  @@@  @@!  @@!  @@@   ").trim(), 
chalk.rgb(0, 255, 250)(" !@!  @!@  !@! !@! !@!  !@!  @!@  !@!  !@!  @!@   ").trim(), 
chalk.rgb(0, 255, 250)(" @!@  !@!  @!! !!@ @!@  @!@!@!@!  !!@  @!@!!@!    ").trim(), 
chalk.rgb(0, 255, 250)(" !@!  !!!  !@!   ! !@!  !!!@!!!!  !!!  !!@!@!     ").trim(), 
chalk.rgb(0, 255, 250)(" !!:  !!!  !!:     !!:  !!:  !!!  !!:  !!: :!!    ").trim(), 
chalk.rgb(0, 255, 250)(" :!:  !:!  :!:     :!:  :!:  !:!  :!:  :!:  !:!   ").trim(), 
chalk.rgb(0, 255, 250)(" ::::: ::  :::     ::   ::   :::   ::  ::   :::   ").trim(), 
chalk.rgb(0, 255, 250)("  : :  :    :      :     :   : :  :     :   : :   ").trim(), 
"\n",

chalk.rgb(0, 255, 250)("   @@@@@@   @@@       @@@  ").trim(), 
chalk.rgb(0, 255, 250)("  @@@@@@@@  @@@       @@@  ").trim(), 
chalk.rgb(0, 255, 250)("  @@!  @@@  @@!       @@!  ").trim(), 
chalk.rgb(0, 255, 250)("  !@!  @!@  !@!       !@!  ").trim(), 
chalk.rgb(0, 255, 250)("  @!@!@!@!  @!!       !!@  ").trim(), 
chalk.rgb(0, 255, 250)("  !!!@!!!!  !!!       !!!  ").trim(), 
chalk.rgb(0, 255, 250)("  !!:  !!!  !!:       !!:  ").trim(), 
chalk.rgb(0, 255, 250)("  :!:  !:!   :!:      :!:  ").trim(), 
chalk.rgb(0, 255, 250)("  ::   :::   :: ::::   ::  ").trim(), 
chalk.rgb(0, 255, 250)("   :   : :  : :: : :  :    ").trim(), 


"\n",
                                                                                                                                         
chalk.rgb(0, 255, 250)("   @@@@@@@   @@@  @@@  @@@  @@@  @@@@@@@  @@@@@@@   @@@@@@   ").trim(),
chalk.rgb(0, 255, 250)("   @@@@@@@@  @@@  @@@  @@@  @@@  @@@@@@@  @@@@@@@  @@@@@@@@  ").trim(),
chalk.rgb(0, 255, 250)("   @@!  @@@  @@!  @@@  @@!  @@@    @@!      @@!    @@!  @@@  ").trim(),
chalk.rgb(0, 255, 250)("   !@   @!@  !@!  @!@  !@!  @!@    !@!      !@!    !@!  @!@  ").trim(),
chalk.rgb(0, 255, 250)("   @!@!@!@   @!@!@!@!  @!@  !@!    @!!      @!!    @!@  !@!  ").trim(),
chalk.rgb(0, 255, 250)("   !!!@!!!!  !!!@!!!!  !@!  !!!    !!!      !!!    !@!  !!!  ").trim(),
chalk.rgb(0, 255, 250)("   !!:  !!!  !!:  !!!  !!:  !!!    !!:      !!:    !!:  !!!  ").trim(),
chalk.rgb(0, 255, 250)("   :!:  !:!  :!:  !:!  :!:  !:!    :!:      :!:    :!:  !:!  ").trim(),
chalk.rgb(0, 255, 250)("    :: ::::  ::   :::  ::::: ::     ::       ::    ::::: ::  ").trim(),
chalk.rgb(0, 255, 250)("   :: : ::    :   : :   : :  :      :        :      : :  :   ").trim(),
          




];

const frames2 = [
  chalk.rgb(0, 255, 250)("  ?????????? ???????? ??????? ??????        ").trim(),
  chalk.rgb(0, 255, 250)("  ??         ??    ?? ??   ?? ??   ??       ").trim(),
  chalk.rgb(0, 255, 250)("  ??         ??    ?? ??   ?? ??    ??      ").trim(),
  chalk.rgb(0, 255, 250)("  ??         ??    ?? ??   ?? ??    ??      ").trim(),
  chalk.rgb(0, 255, 250)("  ??         ??    ?? ??   ?? ??    ??      ").trim(),
  chalk.rgb(0, 255, 250)("  ??  ?????? ??    ?? ??   ?? ??    ??      ").trim(),
  chalk.rgb(0, 255, 250)("  ??  ??  ?? ??    ?? ??   ?? ??    ??      ").trim(),
  chalk.rgb(0, 255, 250)("  ??      ?? ??    ?? ??   ?? ??   ??       ").trim(),
  chalk.rgb(0, 255, 250)("  ?????????? ???????? ??????? ??????        ").trim(),
  "\n",

  chalk.rgb(0, 255, 250)("  ?????????? ??      ?? ????????           ").trim(),
  chalk.rgb(0, 255, 250)("  ??      ?? ??      ?? ??                 ").trim(),
  chalk.rgb(0, 255, 250)("  ??      ?? ??      ?? ??                 ").trim(),
  chalk.rgb(0, 255, 250)("  ??      ?? ??      ?? ??                 ").trim(),
  chalk.rgb(0, 255, 250)("  ?????????? ?????????? ????????           ").trim(),
  chalk.rgb(0, 255, 250)("  ??      ??         ?? ??                 ").trim(),
  chalk.rgb(0, 255, 250)("  ??      ??         ?? ??                 ").trim(),
  chalk.rgb(0, 255, 250)("  ??      ??         ?? ??                 ").trim(),
  chalk.rgb(0, 255, 250)("  ?????????? ?????????? ????????           ").trim(),
]


// Function to clear the screen
function clearScreen() {
  process.stdout.write(ansiEscapes.clearScreen);
}

// Function to display the ASCII animation
function displayAnimation() {
  clearScreen();
  process.stdout.write(ansiEscapes.cursorTo(0, 0));



  // Loop through each frame of the animation
  for (let i = 0; i < frames.length; i++) {

   
    if (frames[i] == 'clear') {
      // Delay between frames (in milliseconds)
    const delay = 1000;

    // Pause execution for the specified delay
    // Note: This is a synchronous delay and may not be accurate in all cases
    // For more precise timing, consider using a library like "sleep" or "wait-for"
    const start = new Date().getTime();
    while (new Date().getTime() < start + delay) {
      // Do nothing
    }
      clearScreen();
    }else{
       // Print the current frame
    process.stdout.write(frames[i] + "\n");

    }

    // Delay between frames (in milliseconds)
    const delay = 100;

    // Pause execution for the specified delay
    // Note: This is a synchronous delay and may not be accurate in all cases
    // For more precise timing, consider using a library like "sleep" or "wait-for"
    const start = new Date().getTime();
    while (new Date().getTime() < start + delay) {
      // Do nothing
    }
  }


  const delay = 1000;
  const start = new Date().getTime();
  while (new Date().getTime() < start + delay) {
  }

  // clearScreen();

  for (let i = 0; i < frames2.length; i++) {
    // Print the current frame
    process.stdout.write(frames2[i] + "\n");

    // Delay between frames (in milliseconds)
    const delay = 50;
    // Pause execution for the specified delay
    const start = new Date().getTime();
    while (new Date().getTime() < start + delay) {
      // Do nothing
    }
  }


}


// Start the animation
displayAnimation();


//set timeout to end code execution after certain time
const pauseDuration = 10000;
setTimeout(() => {
  process.exit();
}, pauseDuration);







