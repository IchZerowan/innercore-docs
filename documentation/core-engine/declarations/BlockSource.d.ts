/**
 * New class to work with world instead of some methods from [[World]] module.
 */
declare class BlockSource {
	/**
	 * @returns the dimension id to which the following object belongs
	 */
	getDimension(): number;

	/**
	 * @param x X coord of the block
	 * @param y Y coord of the block
	 * @param z Z coord of the block
	 * @returns [[BlockState]] object of the block on given coords
	 * or [[Tile]] object in Legacy pack
	 */
	getBlock(x: number, y: number, z: number): BlockState;

	/**
	 * @returns block's id at coords
	 * @param x X coord of the block
	 * @param y Y coord of the block
	 * @param z Z coord of the block
	 */
	getBlockId(x: number, y: number, z: number): number;

	/**
	 * @returns block's data at coords
	 * @param x X coord of the block
	 * @param y Y coord of the block
	 * @param z Z coord of the block
	 */
	getBlockData(x: number, y: number, z: number): number;

	/**
	 * Sets block on coords
	 * @param id id of the block to set
	 * @param data data of the block to set
	 */
	setBlock(x: number, y: number, z: number, id: number, data: number): void;

	/**
	 * Sets block by given [[BlockState]] on coords
	 */
	setBlock(x: number, y: number, z: number, state: BlockState): void;

	/**
	 * Sets extra block (for example, water inside another blocks), on given coords by given id and data
	 */
	setExtraBlock(x: number, y: number, z: number, id: number, data: number): void;

	/**
	 * Sets extra block (for example, water inside another blocks), on given coords by given [[BlockState]]
	 */
	setExtraBlock(x: number, y: number, z: number, state: BlockState): void;

	/**
	 * @returns [[BlockState]] object of the extra block on given coords
	 */
	getExtraBlock(x: number, y: number, z: number): BlockState;

	 /**
	  * Creates an explosion on coords
	  * @param power defines how many blocks can the explosion destroy and what
	  * blocks can or cannot be destroyed
	  * @param fire if true, puts the crater on fire
	  */
	explode(x: number, y: number, z: number, power: number, fire: boolean): void;

	/**
	 * Destroys block on coords producing appropriate drop
	 * and particles. Do not use for massive tasks due to particles being 
	 * produced
	 * @param x X coord of the block
	 * @param y Y coord of the block
	 * @param z Z coord of the block
	 * @param drop whether to provide drop for the block or not
	 */
	destroyBlock(x: number, y: number, z: number, drop?: boolean): void;

	/**
	 * Destroys block on coords by entity using specified item.
	 * @param x X coord of the block
	 * @param y Y coord of the block
	 * @param z Z coord of the block
	 * @param allowDrop whether to provide drop for the block or not
	 * @param entity Entity id or -1 id if entity is not specified
	 * @param item Tool which broke block
	 */
	breakBlock(x: number, y: number, z: number, allowDrop: boolean, entity: number, item: ItemInstance): void;

	/**
	 * Same as breakBlock, but returns object containing drop and experince.
	 * @param x X coord of the block
	 * @param y Y coord of the block
	 * @param z Z coord of the block
	 * @param entity Entity id or -1 id if entity is not specified
	 * @param item Tool which broke block
	 */
	breakBlockForJsResult(x: number, y: number, z: number, player: number, item: ItemInstance): {items: ItemInstance[], experience: number};

	/**
	 * @param x X coord of the block
	 * @param y Y coord of the block
	 * @param z Z coord of the block
	 * @returns interface to the vanilla TileEntity (chest, furnace, etc.) 
	 * on the coords, and null if it's not found
	 */
	getBlockEntity(x: number, y: number, z: number): Nullable<NativeTileEntity>;

	/**
	 * @param x X coord of the block
	 * @param z Z coord of the block
	 * @returns biome id
	 */
	getBiome(x: number, z: number): number;

	/**
	 * Sets biome id by coords
	 * @param id id of the biome to set
	 */
	setBiome(x: number, z: number, biomeID: number): void;

	/**
	 * @returns temperature of the biome on coords
	 */
	getBiomeTemperatureAt(x: number, y: number, z: number): number;

	/**
	 * @returns downfall of the biome on coords
	 */
	getBiomeDownfallAt(x: number, y: number, z: number): number;

	/**
	* @param chunkX X coord of the chunk
	 * @param chunkZ Z coord of the chunk
	 * @returns true if chunk is loaded, false otherwise
	 */
	isChunkLoaded(chunkX: number, chunkZ: number): boolean;

	/**
	* @param x X coord of the position
	 * @param z Z coord of the position
	 * @returns true if chunk on the position is loaded, false otherwise
	 */
	isChunkLoadedAt(x: number, z: number): boolean;

	/**
	* @param chunkX X coord of the chunk
	 * @param chunkZ Z coord of the chunk
	 * @returns the loading state of the chunk by chunk coords
	 */
	getChunkState(chunkX: number, chunkZ: number): number;

	/**
	* @param x X coord of the position
	 * @param z Z coord of the position
	 * @returns the loading state of the chunk by coords
	 */
	getChunkStateAt(x: number, z: number): number;

	/**
     * @returns light level on the specified coordinates, from 0 to 15
     */
	getLightLevel(x: number, y: number, z: number): number;

	/**
	 * @returns whether the sky can be seen from coords
	 */
	canSeeSky(x: number, y: number, z: number): boolean;

	/**
	 * @returns grass color on coords
	 */
	getGrassColor(x: number, y: number, z: number): number;

	/**
	 * Creates dropped item and returns entity id
	 * @param x X coord of the place where item will be dropped
	 * @param y Y coord of the place where item will be dropped
	 * @param z Z coord of the place where item will be dropped
	 * @param id id of the item to drop
	 * @param count count of the item to drop
	 * @param data data of the item to drop
	 * @param extra extra of the item to drop
	 * @returns drop entity id
	 */
	spawnDroppedItem(x: number, y: number, z: number, id: number, count: number, data: number, extra?: ItemExtraData): number;

	/**
	  * Spawns entity of given numeric type on coords
	  */
	spawnEntity(x: number, y: number, z: number, type: number | string): number;

	/**
	 * Spawns entity of given type on coords with specified spawn event.
	 * @param namespace namespace of the entity type: 'minecraft' or from add-on.
	 * @param type entity type name
	 * @param spawnEvent built-in event for entity spawn. Use 'minecraft:entity_born' to spawn baby mob.
	 */
	spawnEntity(x: number, y: number, z: number, namespace: string, type: string, spawnEvent: string): number;

	/**
	  * Spawns experience orbs on coords
	  * @param amount experience amount
	  */
	spawnExpOrbs(x: number, y: number, z: number, amount: number): void;

	/**
	 * @returns the list of entity IDs in given box,
	 * that are equal to the given type, if blacklist value is false,
	 * and all except the entities of the given type, if blacklist value is true
	 */
	fetchEntitiesInAABB(x1: number, y1: number, z1: number, x2: number, y2: number, z2: number, type: number, blacklist: boolean): number[];

	/**
	 * @returns the list of entity IDs in given box,
	 * that are equal to the given type, if blacklist value is false,
	 * and all except the entities of the given type, if blacklist value is true
	 */
	listEntitiesInAABB(x1: number, y1: number, z1: number, x2: number, y2: number, z2: number, type: number, blacklist: boolean): number[];
	
	setDestroyParticlesEnabled(destroyParticlesEnabled: boolean): void;

	/**
	 * @returns interface to given dimension by default 
	 * (null if given dimension is not loaded and this interface 
	 * was not created yet)
	 */
	static getDefaultForDimension(dimension: number): Nullable<BlockSource>;

	/**
	 * @returns interface to the dimension where the given entity is 
	 * (null if given entity does not exist or the dimension is not loaded 
	 * and interface was not created)
	 */
	static getDefaultForActor(entityUid: number): Nullable<BlockSource>;

	/**
	 * @returns BlockSource for world generation
	 */
	static getCurrentWorldGenRegion(): Nullable<BlockSource>;

	/**
	 * @returns BlockSource for the current client
	 */
	static getCurrentClientRegion(): Nullable<BlockSource>;

}
