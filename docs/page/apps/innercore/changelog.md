## 2.2.1b105

- Added experimental API for creating custom enchants: <https://gist.github.com/zheka2304/188a43e9ee130c1830af6cdc308cbeff>
- Minor optimization for C++ to Java calls
- Minor fixes for icons in UI

## 2.2.1b104

- Fixed last item in hend was not spending
- Fixed animated liquid textures
- Fixed endless custom buckets in survival
- Now changing items in ItemUse callback are handled correctly when not prevented
- Added Block.registerClickFunction\[ForID\](nameId/id, (coords, item, block, player) => void)
- Fixed position, passed dispense callback, added slot parameter (4th argument)

## 2.2.1b103

- When creating liquids you can now automatically create buckets with full functionality (see docs)
- Added isRenewable parameter for custom liquids
- Fixed bucket interaction with custom liquids

## 2.2.1b102

- Added methods for creating liquid blocks, docs: <https://gist.github.com/zheka2304/a93f32f612750cbffc637a265fbf9027>
- Fixed some mod manager issues and crashes, added ability to search mod by its id
- Added Entity.hasEffect(entity, effectId) and Entity.getEffect(entity, effectId)
- Added BlockSource.setDestroyParticlesEnabled(boolean) method
- Fixed Item.invokeItemUseOn not using given entity block source
- Fixed vanilla swords tool data
- Fixed destroying attachables was causing crash
- Fixed creating block states by block id
- Fixed BlockState.addStates was not accepting JS object
- Other minor fixes

## 2.2.1b101

- Fixed some fence blocks were not displayed correctly in world

## 2.2.1b100

- Added Block.getMaterial(blockId)
- Added PlayerActor methods: getItemUseDuration(), getItemUseIntervalProgress(), getItemUseStartupProgress()
- Fixed multiplayer mod list was built with incorrect mod info
- Fixed BlockSource.listAllEntitiesInAABB was not returning player, when passed no filter parameters

## 2.2.1b99

- Fixed syncing runtime ids in multiplayer could fail
- Fixed multiplayer mod list check was not working
- Fixed startup crash on old android versions on some devices

## 2.2.1b98

- Fixed Commands.exec
- Fixed Entity.getNameTag

## 2.2.1b97

- Now when connecting to remote world, additional synchronization is done, to assure block runtime ids will match even in case of different mods.

## 2.2.1b96

- Added methods Recipes.getAllWorkbenchRecipes() and Recipes.getAllFurnaceRecipes()
- Added method BlockSource.getBiomeDownfallAt(x, y, z)
- Added slot element properties: iconScale and disablePixelPerfect
- Added methods for UI.Window: updateScrollDimensions() and updateWindowPositionAndSize()
- Added new text alignment type: 3 - ALIGN_CENTER_HORIZONTAL
- Added functon runOnClientThread(function), works as runOnMainThread, but for client ticking thread
- Fixed some item ids compatibility and related recipes - nether start, melon, records, horse armor, fireball, fireworks
- Fixed chestplate model for modded armor

## 2.2.1b95

- Added BlockSource methods setExtraBlock(x, y, z, BlockState/\[id, data\]) and getExtraBlock(x, y, z) -> BlockState to access and modify extra blocks, such as liquids in other blocks
- Added block description parameters "can_contain_liquid" and "can_be_extra_block"
- Added methods Block.canContainLiquid(id) and Block.canBeExtraBlock(id)
- Fixed settings changes were not applied on first launch after change
- Fixed crashes in mod config
- Fixed language settings were not loaded correctly
- Added developer option to output block state info dump

## 2.2.1b94

- Fixed new modpack selecting bug from 2.2.1b93
- Fixed Item.isValid(id), added IDRegistry.getStringIdAndTypeForIntegerId(id), IDRegistry.getTypeForIntegerId(id), IDRegistry.getStringIdForIntegerId(id)
- Fixed getEnchantName from ItemExtraData

## 2.2.1b93

- Fixed modded food
- Restored basic functionality of PathNavigation
- Added API to override underwater fog parameters and fixed underwater fog in custom dimensions
- Added EntityAddedLocal and EntityRemovedLocal callbacks - client side variants of EntityAdded and EntityRemoved
- Fixed Entity.setOffhandItem
- Added Dimensions.getAllRegisteredCustomBiomes() method, returning map of all custom biomes
- Various possible in-game chashes fixed
- Fixed some mod manager crashes & minor redesign
- Fixed wrong modpack can be loaded, when multiple modpacks are installed
- Improved Chinese support

## 2.2.1b92

- Errors in updatables (for example machines) now will not shutdown all mods until world reload. Instead it will disable only updatable, causing error.
- Crash fixes

## 2.2.1b90-91

- Previous version hotfix

## 2.2.1b89

- Fixed bug when block ids were not synced in multiplayer
- Added vanilla block states API
- Fixed workbench for connected players
- Fixed generation callbacks errors
- Improved saves stability
- Fixed links and guides page
- Fixed excess items were added to creative

## 2.2.1b88

- Added callback EntityPickUpDrop(entity, dropEntity, dropStack, count), it is called, when entity picks up dropped item, right now works only for players
- Updated guides and links page, added links to mod and modpack development guides
- Minor fixes for ItemModel and other crashes and errors

## 2.2.1b87

- Fixed modpack system and mod manager issues
- Fixed missing or invalid workbench recipes and item icons
- Added useful links to preferences and links menu

## 2.2.1b86

- Global engine optimization will increase overall modded performance
- Fixed lags in creative inventory, when items with extra data are present
- Minor optimization for creative search

## 2.2.1b85

- Massive update to mod manager with alot of new features, fixes and improvements
- Added modpack support, including installation, modification and creating your own
- Block models are now loading faster and consume less RAM
- BlockSource.breakBlock/ForJsResult methods now also invoke DestroyBlock callback, if actor is passed as a parameter and exists in BlockSource's dimension (and it was not prevented by BreakBlock callback)

## 2.2.0b84

- Added PreProcessChunk and PostProcessChunk callbacks - universal world generation callbacks. First one called before vanilla structures generation and second one after it. All others callbacks are called after vanilla generation but before PostProcessChunk
- Fixed missing bed and chest recipes
- Fixed using mesh in ActorRenderer
- Fixed rare crashes when entering and leaving the world
- Fixed transparency was not working for far blocks
- Fixed config.json interaction with .redirect
- Added slot element binding selection_forced

## 2.2.0b83

- Rework for block drop system
- Added callback BreakBlock (BlockSource, position, block, isDropAllowed, player, item) - called when block is destroyed, unlike DestroyBlock can be called not only when block is destroyed by player, but also by new BlockSource methods. This callback is used for block drops, player destroy logic must remain in DestroyBlock
- Drop functions now using BreakBlock
- Added blocksource methods BlockSource: breakBlock(x, y, z, isDropAllowed\[, actor\]\[, item\]) - destroys block, calls BreakBlock, breakBlockForJsResult(x, y, z\[, actor\]\[, item\]) - same as breakBlock, but instead of dropping items and exp orbs, returns: {experience:, items: \[{id:, count:, data:, extra:}, ...\]}

## 2.2.0b82

- Added ItemContainer methods setSlotSavingEnabled(name, enabled), setGlobalSlotSavingEnabled(enabled), they are used to control, which slots are saved
- Added parameter to destroy method of tile entity, that indicates, if it was destroyed in DestroyBlock callback
- Optimized inventory editing methods for player
- Fixed editing player abilities, including flying
- Fixed server open listener in ItemContainer was called before open packet is sent
- Fixed some furnace recipes
- Fixed loading bug on older android versions
- Fixed breaking ice

## 2.2.0b79-81

- Added missing and fixed existing workbench recipes
- Fixed constant startup crashes on some devices (new bug since 1.16.201)
- Fixed frequend startup crashes on some devices (old bug since 1.11.4)

## 2.2.0b78

- Continued fixing worldgen

## 2.2.0b77

- Fixed modded world generation was called multiple times per chunk. It will significantly reduce lag.
- Modded world generation now called AFTER vanilla worldgen.
- Another attemt to fix loading mods on some devices
- Added log methods: Logger.debug(tag, message), Logger.info(tag, message), Logger.error(tag, message\[, error\]);

## 2.2.0b76

- Fixed loading mods with resource packs
- Fixed saves errors
- Fixed loading mods on some devices
- Added parameter "category" in Item.createItem

## 2.2.0b75

- Updated for Minecraft 1.16.201
- Multiplayer might experience some issues with ID sync, if it happens, try swapping host and client
- Added API for armor and attachable renderer
- Major refactor for mod loader
- Major refactor for saves system and some other engine modules
- Started working on ECS and Java API

## 2.1.0b72

- Now, when connecting to host with some blocks or items, missing on client, placeholders will be created to prevent crash
- Native protocol tested on extremely high load, possible lags and crashes fixed

## 2.1.0b71

- Saving previously logged in Xbox account (experimental)
- Minor fixes

## 2.1.0b70

- Added multiplayer FAQ in Xbox login window.
- Increased initialization packet timeout up to 90 seconds.
- Fixes for network entities
- Other minor fixes

## 2.1.0b69

- Nice, we have reached this point
- Fixed items with extra data were sometimes invisible in vanilla UI
- Added getLightLevel(x, y, z) to BlockSource

## 2.1.0b68

- Minor improvements to native protocol (Xbox multiplayer).

## 2.1.0b65-67

- Made Xbox login functional on most devices.

## 2.1.0b64

- Added experimental custom xbox login feature. You can connect to your friends from xbox account with same mods as yours (with multiplayer support). Xbox connection will use only native protocol, that was added in 2.1.0b63.

## 2.1.0b63

- Added ability to use multiplayer with native minecraft protocol. This option can be turned on in engine config. Native protocol might reduce ping, but could be less stable.
- Minor fixes

## 2.1.0b61-62

- Fixes for ItemContainer and BlockSource
- Other fixes

## 2.1.0b60

- Added method exists() to animations
- Minor fixes

## 2.1.0b59

- Added methods BlockRenderer.setCustomRaycastShape(id, data, collisionShape), BlockRenderer.setCustomCollisionAndRaycastShape(id, data, collisionShape)
- Added methods BlockRenderer.mapCollisionModelAtCoords(dimensionId, x, y, z, model), BlockRenderer.mapRaycastModelAtCoords(dimensionId, x, y, z, model), BlockRenderer.mapCollisionAndRaycastModelAtCoords(dimensionId, x, y, z, model), for collision and raycast shape mapping, passing null model will unmap it, mapping works on any block including air
- Added BlockSource method getBlock(x, y, z), returning object, that contains both id and data
- Clearing mapped render models (not collision ones) on local player dimension change as well as animations
- Other minor fixes

## 2.1.0b58

- Minor fixes

## 2.1.0b57

- Added method Network.inRemoteWorld() - returns true, if player connected to remote world
- Added callback ItemUseLocal(coords, item, block, player) for client side item use
- Added callback ConnectingToHost(host, minecraftPort, moddedPort)
- Improvements for NetworkConnectedClientList
- Added method BlockSource.getCurrentClientRegion()
- Other minor fixes

## 2.1.0b56

- New item caching system, that caches every complex icon, not only custom models and allows creating of model cache groups
- Call ItemModel.setCurrentCacheGroup("groupName", "version") at the start of your mod to create cache group, it will be applied to all models, created at the root of your mod (including default ones). If specified version does not match cache version, whole group will be re-created.
- Fixed ItemContainer interaction with items with extra data.

## 2.1.0b55

- Fixed compatibility with Recipe Viewer
- Added block special type parameter color_source, can be one of "none", "leaves", "grass", "water"
- Sped up loading of item models and made it less RAM consuming
- Minor improvements

## 2.1.0b48-54

Following updates contain fixes for multiplayer update.

## 2.1.0b47

This update adds experimental LAN multiplayer support, allowing players on same Wi-Fi and same set of mods play together.

**ALL MODS NEED TO BE UPDATED TO SUPPORT MULTIPLAYER.** Playing with mods without multiplayer support (warning will appear) might cause undefined behaviour or even crash, so do it at your own risk.

Alot of new API modules, callbacks and functions were introduced in this update, but backwards compatibility remains. There will be a migration guide for mod developers.

## 2.0.5b46

- Fixed 2.0.5b45 bug, which caused icon problems of items with extra data
- Fixed mod manager didnt show redirected mods

## 2.0.5b45

- Added item model method setModelOverrideCallback(function(item) {...}), acts like itemOverrideFunctions, but returns ItemModel instance, instead of icon
- Added method ItemModel.newStandalone(), creates empty ItemModel instance, not linked to any item, this models should be used in setModelOverrideCallback
- Item override function now receives extra data
- Fixed crash, caused by calling toScriptable() method of NBT tags
- D8 dexer, instead of old DX is now used to build dex files from java

## 2.0.5b44

- Mods now can access and modify NBT of entities, tile entities and items. Docs are located at the bottom.
- Added functions: Entity.getCompoundTag(entity), Entity.setCompoundTag(entity, tag)
- Added methods to vanilla TileEntity, returned by World.getContainer(): getCompoundTag(), setCompoundTag(tag)
- Added methods to ItemExtraData: getCompoundTag(), setCompoundTag(tag)
- Mod UI now supports modded animated item icons
- Icon override functions now receives second parameter - isModUi
- Added function Debug.big, acts like Debug.m, but outputs dialog with selectable text and pretty JSON
- TileEntity function click now receives additional parameter - click coords
- Fixed rare addon-related crash

NBT.CompoundTag (map, string keys):

- constructor() - creates empty tag
- constructor(NBT.CompoundTag) - creates tag copy
- toScriptable() - returns javascript object, that represents contents
- getAllKeys() - returns java array with all keys
- contains(key) - checks tag contains key
- containsValueOfType(key, type) - checks tag contains key and value is desired type
- getValueType(key) - returns value type by key (type is integer)
- get(Byte|Short|Int|Int64|Float|Double|String|CompoundTag|ListTag)(key) - value getters
- put(Byte|Short|Int|Int64|Float|Double|String|CompoundTag|ListTag)(key, value) - value setters
- remove(key) - deletes value by key
- clear() - deletes all values

NBT.ListTag (list, non-negative integer indices):

- constructor() - creates empty list
- constructor(NBT.ListTag) - creates list copy
- toScriptable() - returns javascript object, that represents contents
- length() - returns list length
- getValueType(index) - returns value type by index (type is integer)
- get(Byte|Short|Int|Int64|Float|Double|String|CompoundTag|ListTag)(index) - returns value by index
- put(Byte|Short|Int|Int64|Float|Double|String|CompoundTag|ListTag)(index, value) - set value by index, if index >= length, adds to the end, if index < 0 adds to beginning, else replaces
- clear() - deletes all values

## 2.0.4b43

- Automatically deleting resource and behavior packs from uninstalled mods upon world load
- RenderMesh now can receive not only absolute file path, but also resource path and name of file in models/ dir in resources.
- Deprecated slot element parameters isTransparentBackground and needClean, now slot supports transparent background by default
- Added container method setOnOpenListener(function(container, window) {...})
- Removed shared objects, built for x86 ABI to reduce overall weight
- Fixed error, that occurred after second WRAP_JAVA call on same class

## 2.0.4b42

- Callback.addCallback now has third optional parameter - priority (integer, default value is 0). Callbacks with higher priority will be called earlier
- UI slots now support animated background (texture name array must be passed instead of single name). For other textures in UI this feature was already present.
- UI slots now has text parameter, also container.setText work on them. If this parameter is not null, it value will be shown instead of count
- World.clip now works on actors, but only on certain mode parameter values.
- Fixed block icon generation for ICRender models.

## 2.0.4b41

- Attemt to fix blurry UI on some devices

## 2.0.4b40

- Optimized mod UI, making it a bit faster and consume less RAM
- Added new mode for standard window, making all contents appear in separate window instead of background one. To use it in a new mode, use UI.StandardWindow instead of misspelled UI.StandartWindow
- Resource and behavior packs are now injected inside each world upon enter
- Animations (static models) are now cleaned up on dimension change
- Animations are now garbage collected after they are destroyed in world
- Added Updatable.addAnimator(updatable_object), which adds updatable, that ticks on client thread and never saves

## 2.0.4b39

- Minor fixes for previous version

## 2.0.4b38

- Added TagRegistry module. Docs will be available after some tests and maybe rework.
- Added particle type properties framesX and framesY, which define frame grid size.
- Added particle type property rebuildDelay, which defines time in ticks between particle mesh updates
- Added particle type properties color2 and animators.color, which allow animation of particle color
- Fixed slabs drop
- Fixed some textures in ui

## 2.0.4b37

- Custom dimension generator got heavy optimizations by decreasing noise level of detail. However, custom level of detail now can be set to individual noise generators.
- ItemModel got new methods, that can set custom bitmap as icon in mod ui
- Added DimensionLoaded(currentId, lastId) and DimensionUnloaded(unloadedId) callbacks

## 2.0.4b36

More minor fixes

## 2.0.4b34-35

- Inner Core preferences menu was majorly improved and new settings were added
- Fixed critical error, that could cause server thread to stop
- Fixed OutOfMemory crashes, that could occur during startup
- Alot of minor fixes from GP statistics
- After installing mod you can now install all its dependencies
- Saving system improved: overall stability increased, saves backup is created and all saves errors, if occured, are now displayed in one window instead of one window per error
- Main menu is slightly redesigned
- Added function Entity.getAllInsideBox(coords1, coords2\[, type, flag\])
- Added function Entity.getDimension(entity)
- Added function Item.setAllowedInOffhand(id, allowed)
- Added function Game.simulateBackPressed()
- PathNavigation is majorly fixed and improved
- Fixed Entity.setCarriedItem/setOffhandItem/setArmor were not sending data to client on non-player entities
- Fixed some crashes, that could occur while transferring between dimensions
- Fixed rotation of animations
- Fixed error, that caused mod behavior packs to be ignored on first launch
- Fixed duplication mod behavior packs in world folder
- Fixed Entity.spawn was working incorrectly with addon entities
- Fixed Translation module doing English to English translations
- Increased item name caching capacity
- Fixed window method setTouchable not working for game overlays
- Other minor stability-related fixes

## 2.0.3b33

- Added support for custom shader uniforms, that can be passed for individual models (more documentation will be released soon)
- Added support for controlled entity navigation via Entity.getPathNavigation(entity)
- Added function Entity.getAttribute(entity, name) to access and modify entity attributes
- Added functions: Player.setAbility(name, value), Player.getFloatAbility(name), Player.getBooleanAbility(name)
- Added uniform vec3 VIEW_POS to shaders on world models (animations)

## 2.0.3b32

- Fixed vanilla particles and mod models with blending drawing behing alpha-tested blocks and clouds

## 2.0.3b31

- Minor fixes, including custom dimensions and block meshes in hand render

## 2.0.3b30

- All changes applied to main version
- Fixed item icons with metadata

## 2.0.2b29

- Better TileEntity system: now unloaded TileEntities, or ones without tick function will not be counted, when checking updatable limit. Added TileEntity functions load(), unload() and onCheckerTick(isInitialized, isLoaded, wasLoaded)
- Fixed crash with mob custom models
- Other minor fixes

## 2.0.2b28

- Added option disable_loading_screen, that disables loading screen and loads mods on main thread
- Fixed World.clip, RenderMesh.clone, Block.setupAsRedstone\[Receiver/Emitter\]
- Fixed some crashes from item models

## 2.0.2b27

- Fixed issue with spending items when tapping on block with UI
- Added functions to World module: clip(x1, y1, z1, x2, y2, z2), doesVanillaTileHasUI(id), setBlockUpdateAllowed(true, false), setBlockUpdateType(type)
- Fixed functions for player experience work
- Fixed meshes after app was minimized

## 2.0.2b26

- Added server thread priority to Inner Core config
- Added Block.registerNeighbourChangeFunction\[ForID\](id, function(coords, block, changeCoords){})
- Added Block.registerEntityInsideFunction\[ForID\](id, function(coords, block, entity){})
- Added Block.registerEntityStepOnFunction\[ForID\](id, function(coords, block, entity){})
- Added RenderMesh methods rotate(x, y, z, rx, ry, rz), fitIn(x1, y1, z1, x2, y2, z2\[, keepRatio\]), clone()
- Fixed colors and mesh position in item models

## 2.0.2b25

- Added block description property - sound, sets one of standard block sound types
- Added RenderMesh method setLightPos(x, y, z) - set relative position for block lighting
- Added RenderMesh method parameter setFoliageTinted(leavesType)
- Fixed ItemModel.occupy() method not preventing setting ICRender models

## 2.0.2b24

- Fixed crash from massive amount of blocks with RenderMesh
- Added methods to RenderMesh - setNoTint(), setGrassTinted(), setFoliageTinted(), setWaterTinted()
- Added preloader scipt methods - Resources.getAllMatchingResources("regex"), Resources.getResourcePath("local path"), Resources.getAllResourceDirectoriesPaths()

## 2.0.2b23

- UI and world item models engine was fully rewritten:
  - Mod UI support custom item models (non-meshes for now)
  - Item animations now based on RenderMesh and support custom item models and materials
  - Generating item models moved to new loading phase
  - Item model caching will make their generation much faster after first launch
  - ItemModel API module is massively improved and allows access to all model-related stuff
  - Additional materials can be passed to handle glint on item models
  - Block rendertype parameter is fixed and will affect block item model
- Other improvements:
  - Added condition ICRender.RANDOM(value, max\[, seed\]) - for given block position generates random number from 0 to max - 1, and returns, if it is equal to value. Has method setAxisEnabled(0-2, enabled) to ignore some axises.
  - Added functions Block.setupAsRedstoneReceiver(nameID, connectToRedstone), Block.setupAsRedstoneEmitter(nameID, connectToRedstone, Block.setupAsNonRedstoneTile(nameID)
  - RenderMesh: added method addMesh(mesh\[, x, y, z\[, scaleX, scaleY, scaleZ\]\]), alpha value now can be passed to setColor
  - Added block description property - mapcolor, sets 0xRRGGBB map color to block

## 2.0.2b22

- Minor fixes and improvements

## 2.0.2b21

- (Experimental) Global optimization, attempting to increase FPS by using dynamic thread priority
- (Experimental) World generation optimized
- Minor fixes for item models

## 2.0.2b20

This update adds alot and might be unstable.

- Added ability to create custom materials and shaders (more info will be provided soon)
- Added UI and in-hand item models, to access use ItemModel.getFor(id, data)
- Added new animation mode - direct mesh render with material, to enter this mode call method describe({mesh: RenderMesh, skin: "texture name", material: "material name"})
- Blocks with ICRender will automatically gain inventory models
- Added custom dimension methods: setFogDistance(close, far), resetFogDistance()
- Other minor fixes

## 2.0.1b18

- Added directories innercore/resource_packs, innercore/behaviour_packs for adding resource and behaviour packs
- Local world resource and behaviour packs are now automatically forced for this world
- Added module AddonEntityRegistry and functions to work with addon-added mobs
- Minor fixes

## 2.0.1b17

- Added GenerationUtils.generateOreCustom(x, y, z, id, data, amount, mode, listOfIds\[, seed\]), also added optional seed parameter to GenerationUtils.generateOre
- Fixed drops from World.destroyBlock
- Fixed Player.setHunger, Player.setSaturation, Player.setExhaustion
- Fixed some block drops

## 2.0.1b16

- Added machine place sound
- Fixed some block drops
- Minor fixes for custom dimensions

## 2.0.1b15

- Attempt to optimize biome map

## 2.0.1b14

- Temporary disabled biome maps

## 2.0.1b13

- Minor fixed and optimizations

## 2.0.1b12

- Added better API for new custom dimensions
- Fixed empty and non ASCII base item name crash (Mods like Divine RPG)

## 2.0.1b11

- Added API for custom biomes
- Added callback GenerateBiomeMap, that uses World.get/setBiomeMap to build chunk biome map before any generation
- Added new parameters to generation callbacks: (chunkX, chunkZ, random, dimensionId, chunkSeed, worldSeed, dimensionSeed)
- Added GenerationUtils.getPerlinNoise(x, y, z, seed, scale, numOctaves)
- Added World.addGenerationCallback(callbackName, callback\[, hashString\]), that uniquely modifies chunk seed before calling callback

## 2.0.1b10

- Added mod loading UI
- Mods are now loading in separate thread
- Fixed UI hangs after fast-clicking on block or item with UI
- Fixed some errors with drops and tools
- Fixed fatal error tip message randomly appearing during world load

## 2.0.0b9

- Completed classic mod UI and workbench UI
- Now mod UI will close when back is pressed or app is minimized
- Fixed possible crashes from render mapping and Item.getName
- Now when all mods are stopped in case of an fatal error it is displayed as tip message
- Applied stability fixes from build 8

## 2.0.0b8

- Another attempt to fix stability, eliminate lags and crashes upon minecraft loading (checks for crashes are required), after all this attempts best solution from builds 6-8 will be selected
- Fixed new workbench

## 2.0.0b7

- Another attempt to fix stability, eliminate lags and crashes upon minecraft loading (checks for crashes are required)

## 2.0.0b6

- More stability fixes (report any new or more frequent crashes)
- Classic-styled workbench
- Started migrating mod UI to classic style

## 2.0.0b5

- Fixes for system versions lower than Android 9

## 2.0.0b4

- Some UI fixes, mostly for devices with cutout
