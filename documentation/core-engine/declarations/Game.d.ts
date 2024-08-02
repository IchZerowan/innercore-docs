/**
 * Module that provides some general game-related functions
 */
declare namespace Game {
    /**
     * Prevents current callback function from being called in Minecraft.
     * For most callbacks it prevents default game behaviour
     */
    function prevent(): void;

    /**
     * @returns true if the current callback function has already been
     * prevented from being called in Minecraft using [[Game.prevent]],
     * false otherwise
     */
    function isActionPrevented(): boolean;

    /**
     * Writes message to the chat. Message can be formatted using 
     * [[Native.Color]] values
     * @param msg message to be displayed
     */
    function message(msg: string): void;

    /**
     * Writes message above the hot bar. Message can be formatted using 
     * [[Native.Color]] values
     * @param msg message to be displayed
     */
    function tipMessage(msg: string): void;

    /**
     * Displays android AlertDialog with given message and dialog title
     * @param message message to be displayed
     * @param title title of the AlertDialog
     */
    function dialogMessage(message: string, title: string): void;

    /**
     * Sets game difficulty, one of [[Native.GameDifficulty]] values
     * @param difficulty game difficulty to be set
     */
    function setDifficulty(difficulty: number): void;

    /**
     * @returns current game difficulty, one of the [[Native.GameDifficulty]] 
     * values
     */
    function getDifficulty(): number;

    /**
     * Sets current level game mode
     * @param gameMode new game mode, should be one of the [[Native.GameMode]]
     * values
     */
    function setGameMode(gameMode: number): void;

    /**
     * @returns current level game mode, one of the [[Native.GameMode]] values
     */
    function getGameMode(): number;

    /**
     * @returns string containing current Minecraft version
     */
    function getMinecraftVersion(): string;

    /**
     * @returns string containing current Core Engine version
     */
    function getEngineVersion(): string;

    /**
     * @returns true if item spending allowed
     */
    function isItemSpendingAllowed(player?: number): boolean;

    /**
     * true if developer mode was enabled in Inner Core config, false otherwise
     */
    let isDeveloperMode: boolean;
}