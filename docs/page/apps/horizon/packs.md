In main menu of Inner Core pack there are 5 buttons:

1. **Play** — button to start the game
2. **Native mods** — button on the right side of the screen to open the native mods menu
3. **Mod browser** — integrated mod browser
   1. Download mods — a tab where you can download any mods for the game
   2. My mods — a tab where you can manage your installed mods
   3. Modpacks — ready-made builds of mods that are created by developers
   4. Updates — list of mods that are available for update
   5. Visit website — opens a full-fledged mods site for the game
4. **Preferences and links**
   1. Pack settings
      1. **Disable the loading screen** — displaying the loading screen of mods, when turned on on some devices, it may speed up the download.
      2. **Developer Mode** — useful for mod creators, includes debugging mode in supported mods.
      3. **Limitation of updates by version** — the number of updates of mods in the tick will be limited by the execution time, otherwise by the number of updated objects. Simply put, how many calls to the tick can mods make.
      4. **Maximum updates per tick** — adjustment of the _time limit_.
      5. **Advanced thread priority settings** — a higher priority of the server thread stabilizes the number of ticks per second of TPS (this means more stable operation and response time), however, this can cause freezes and frame drawdown per second of FPS.
      6. **Server thread priority** — adjustment of the _expanded thread priority setting_.
      7. **Threshold FPS** — as long as FPS is below this threshold, the server thread will work at the lower priority, otherwise the upper priority will be set.
      8. **Number of additional threads** — additional threads are an experimental setup. On powerful devices, it can improve performance under heavy load.
      9. **Priority of additional threads** — adjustment of _the number of additional threads_.
      10. **Auto-save** — allows you to save the world and mods data if the game may abruptly shut down or incorrectly.
      11. **Autosave period** — time in seconds between autosave launches.
      12. **Enable Socket Server** — allows players on a local network to connect to your world using sockets.
      13. **Use the native protocol** — connect using the native protocol (by default, the protocol based on _sockets_ has a higher priority).
      14. **Force the Local Native Protocol** - _**for developers!**_ — use the native protocol for communication between the local client and the server. This setting is only needed for debugging mods and the engine, **do not use it for production!**
   2. Guides and links — a tab with links and guides
   3. Thanks — a tab with credits of the developers, testers, mod developers
   4. About app
