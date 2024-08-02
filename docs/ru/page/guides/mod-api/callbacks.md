Callbacks is a mechanism that allows to handle and prevent some of the in-game events as well as user-invoked events. When some native event Occurs, all callback functions registered for this event are called. To add a callback to some event, use [[Callback.addCallback]] function. To invoke a custom event, use [[Callback.invokeCallback]]. To prevent the default flow of the event, use [[Game.prevent]].

All pre-defined (in-game) callbacks with their functions interfaces are listed below. If no function interface is provided, use a function with no params and return value:

## UI callbacks

### ContainerOpened

Occurs when user opens some container. See [[ContainerOpenedFunction]] for details

### ContainerClosed

Occurs when some container is closed. See [[ContainerClosedFunction]] for details

### CustomWindowOpened

Occurs when every single window is opened. Called for every window and subwindow. Examples of subwindows include standard inventory, window title, main window, etc. See [[CustomWindowOpenedFunction]] for details

### CustomWindowClosed

Occurs when every single window is closed. See [[CustomWindowClosedFunction]] for details

## Workbench callbacks

### CraftRecipePreProvided

Occurs before crafting is performed. See [[CraftRecipePreProvidedFunction]] for details

### CraftRecipeProvided

Occurs after crafting recipe result is determined. See [[CraftRecipeProvidedFunction]] for details

### VanillaWorkbenchCraft

Occurs just before adding crafting recipe result to player's inventory. See [[VanillaWorkbenchCraftFunction]] for details

### VanillaWorkbenchPostCraft

Occurs after adding crafting recipe result to player's inventory. See [[VanillaWorkbenchCraftFunction]] for details

### VanillaWorkbenchRecipeSelected

Occurs when player selects recipe in the workbench. See [[VanillaWorkbenchRecipeSelectedFunction]] for details

## Inner Core and Core Engine callbacks

### CoreConfigured

Occurs when Inner Core default configuration file is loaded. See [[CoreConfiguredFunction]] for details

### PreLoaded

Occurs directly after "CoreConfigured" callback

### APILoaded

Occurs directly after "PreLoaded" callback

### ModsLoaded

Occurs directly after "APILoaded" callback

### PostLoaded

Occurs directly after "ModsLoaded" callback. Last of the loading callbacks

### AppSuspended

Occurs when Minecraft application is paused

### NativeGuiChanged

Occurs when vanilla screen changes. See [[NativeGuiChangedFunction]] for details

### ReadSaves

Occurs when reading saves from global scope. See [[SavesFunction]] for details

### WriteSaves

Occurs when writing saves to global scope. See [[SavesFunction]] for details

## Worlds and dimensions callbacks

### tick

Is main game tick. This callback is called 20 times per second and is used to define all dynamic events in the game. Avoid overloading tick functions and use [[Updatable]]s and [[TileEntity]]s when possible

### LevelSelected

Occurs when the level is selected and will be loaded. See [[LevelSelectedFunction]] for details

### LevelCreated

Occurs when level is created in the memory of the device

### LevelDisplayed

Occurs when level is displayed to the player

### LevelPreLoaded

Occurs before some level initialization

### LevelLoaded

Occurs when level is completely loaded and is ready to be displayed to the player

### DimensionLoaded

Occurs when vanilla or custom dimension is loaded. See [[DimensionLoadedFunction]] for details

### LevelPreLeft

Occurs when player starts leaving world

### LevelLeft

Occurs when player completes leaving world

### PreBlocksDefined

Occurs before saving block data while loading world

### BlocksDefined

Occurs after saving block data while loading world

## Player actions callbacks

### DestroyBlock

Occurs when player breaks block. See [[DestroyBlockFunction]] for details

### DestroyBlockStart

Occurs when player starts breaking block. Has the same parameters as "DestroyBlock" callback, see [[DestroyBlockFunction]] for details

### DestroyBlockContinue

Occurs when player continues breaking block. Occurs several times during one block breaking. See [[DestroyBlockContinueFunction]] for details

### BuildBlock

Occurs when player places block somewhere in the world. See [[BuildBlockFunction]] for details

### BlockChanged

Occurs when block changes in the world. To capture this event you should register blocks that you need to watch using [[World.setBlockChangeCallbackEnabled]] method. All block changes that are related to the registered blocks trigger this event. See [[BlockChangedFunction]] for details

### ItemUse

Occurs when player uses item on some block. Doesn't work if vanilla container is opened (e.g. chest, workbench, etc.). Use "ItemUseLocalServer" to track such events instead. See [[ItemUseFunction]] for details

### ItemUseLocalServer

Occurs when player uses some item on the local server. Can be used to prevent vanilla container from opening. See [[ItemUseFunction]] for details

### FoodEaten

Occurs when player eats food. See [[FoodEatenFunction]] for details

### ExpAdd

Occurs when player gains some experience. See [[ExpAddFunction]] for details

### ExpLevelAdd

Occurs when player gains some experience levels. See [[ExpLevelAddFunction]] for details

### NativeCommand

Occurs when player enters some command. See [[NativeCommandFunction]] for details

### PlayerAttack

Occurs when player attacks some entity. See [[PlayerAttackFunction]] for details

### EntityInteract

Occurs when player longclick some entity (interacts with it). See [[EntityInteractFunction]] for details

### ItemUseNoTarget

Occurs when an item is used in the air. See [[ItemUseNoTargetFunction]] for details

### ItemUsingReleased

Occurs when player doesn't complete using item that has maximum use time set with [[Item.setMaxUseDuration]] function. See [[ItemUsingReleasedFunction]] for details

### ItemUsingComplete

When player completes using item that has maximum use time set with [[Item.setMaxUseDuration]] function. See [[ItemUsingCompleteFunction]] for details

## Entities and environment callbacks

### Explosion

Occurs when something is exploded in the world. See [[ExplosionFunction]] for details

### EntityAdded

Occurs when an entity is added in the world. See [[EntityAddedFunction]] for details

### EntityRemoved

Occurs when an entity is removed from the world. See [[EntityRemovedFunction]] for details

### EntityDeath

Occurs when an entity dies. See [[EntityDeathFunction]] for details

### EntityHurt

Occurs when an entity is hurt. See [[EntityHurtFunction]] for details

### ProjectileHit

Occurs when a projectile entity hits entity or block. See [[ProjectileHitFunction]] for details

## Items and blocks callbacks

### RedstoneSignal

Occurs when redstone signal changes on the specified coordinates. To register block as redstone consumer, use [[Block.setRedstoneTile]] function. See [[RedstoneSignalFunction]] for details

### PopBlockResources

Occurs when block is destroyed somehow (not by player). See [[PopBlockResourcesFunction]] for details

### CustomBlockTessellation

Occurs when custom block rendering needs to be performed. See [[CustomBlockTessellationFunction]] for details

### ItemIconOverride

Occurs when displaying item somewhere to override item's icon. You can use it to change item's icon depending on some item state. See [[ItemIconOverrideFunction]] for details

### ItemNameOverride

Occurs when displaying item name to override it. You can use it to display item charge, status, etc. See [[ItemNameOverrideFunction]] for details

### ItemDispensed

Occurs when an item is dispensed using dispenser. See [ItemDispensedFunction]] for details

## Generation callbacks

### GenerateChunk

Occurs when generating chunk in overworld. Should be used for all generation process. See [[GenerateChunkFunction]] for details

### GenerateChunkUnderground

Occurs when generating chunk's underground in overworld. Can be used for all underground generation process (though it is OK to use "GenerateChunk" for it as well). See [[GenerateChunkFunction]] for details

### GenerateNetherChunk

Occurs when generating chunk in neather world. See [[GenerateChunkFunction]] for details

### GenerateEndChunk

Occurs when generating chunk in end world. See [[GenerateChunkFunction]] for details

### GenerateChunkUniversal

Occurs when any chunk is generated. See [[GenerateChunkFunction]] for details

### GenerateBiomeMap

Occurs after generating vanilla biome map so that we can modify it before the covers generation. See {@page Biomes} for the biomes generation information. See [[GenerateChunkFunction]] for details
