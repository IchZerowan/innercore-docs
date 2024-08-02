## Biome Map

Biome map is a way Minecraft generates biomes. In fact, biome map is a two-dimensional array of biome ids inside every chunk.

To be able to change this map, _GenerateBiomeMap_ callback is called after the landscape generation is performed and before cover and decorations generation. See {@page Callbacks} for details. Inside this callback you should call [[World.setBiomeMap]] to set biome on the coordinates and [[World.getBiomeMap]] to retrieve one. Note that these methods are available only inside _GenerateBiomeMap_ callback. Also, you should pass coordinates inside the specified chunk. The coordinates should be inside these bounds:

```js
var minX = chunkX * 16;
var minZ = chunkZ * 16;
var maxX = (chunkX + 1) * 16 - 1;
var maxZ = (chunkZ + 1) * 16 - 1;
```

## Using Perlin Noise for biome generation

To generate biome map, use [[GenerationUtils.getPerlinNoise]] method. Let's take a closer look at the example of biome generation:

```js
Callback.addCallback('GenerateBiomeMap', function (chunkX, chunkZ, random, dimensionId, chunkSeed, worldSeed, dimensionSeed) {
    // Generate only in the overworld
    if (dimensionId != 0) {
        return;
    }

    // Verify if we can skip this biome
    if (GenerationUtils.getPerlinNoise(chunkX * 16 + 8, 0, chunkZ * 16 + 8, dimensionSeed, 1 / 128, 2) < 0.7 - 12 / 128) {
        return;
    }

    // Change biome map according to current perlin noise
    for (var x = chunkX * 16; x < (chunkX + 1) * 16; x++) {
        for (var z = chunkZ * 16; z < (chunkZ + 1) * 16; z++) {
            if (GenerationUtils.getPerlinNoise(x, 0, z, dimensionSeed, 1 / 128, 2) > 0.7) {
                World.setBiomeMap(x, z, myCustomBiome.id);
            }
        }
    }
});
```

For each block of the biome we verify that the value of Perlin noise is larger then some constant value (we call it _generation threshold_). If the condition is evaluated to _true_, we set the biome on the specified coordinates to our biome's id.

We use 2-octave Perlin noise for this generation with octave size of 128. It is the most convenient way to generate cool vanilla-like biomes. If you use more octaves, the edges of the biome will be more torn, otherwise more smooth. Changing octaves size will increase or decrease biome size. To control biome density, change generation threshold.

An optimization is also performed before going to the time-consuming loop. We take a block from the center of the chunk and verify if Perlin noise value at the point it is larger then `T - 12/size` where T is biome generation threshold and size is the scale of the larger octave.

You can add any additional conditions to your code, e.g. generating only inside existing Minecraft biome. Then you'll need to add an additional check inside your code.
