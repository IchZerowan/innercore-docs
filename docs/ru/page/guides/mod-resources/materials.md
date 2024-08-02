Inner Core allows you to add new materials and attach shaders to them to use for items in the inventory and 3d models.

**Material** is a set of OpenGL properties, vertex and fragment shaders that is used for an in-game object.

## Adding custom materials

Custom materials files should be located in the resource pack in the _custom-materials_ directory. Each file should have _.material_ extension and can contain one or multiple material descriptions. An example of such a file for vanilla barrel material is listed below:

```json
{
    "materials": {
        "version": "1.0.0",

        "barrier": {
            "+defines": ["ALPHA_TEST", "TEXEL_AA", "ATLAS_TEXTURE"],
            "+states": ["DisableAlphaWrite"],

            "vertexFields": [{ "field": "Position" }, { "field": "UV1" }, { "field": "Color" }, { "field": "UV0" }],

            "vertexShader": "shaders/barrier.vertex",
            "vrGeometryShader": "shaders/uv.geometry",
            "fragmentShader": "shaders/renderchunk.fragment",

            "msaaSupport": "Both",

            "depthFunc": "LessEqual",

            "blendSrc": "SourceAlpha",
            "blendDst": "OneMinusSrcAlpha",

            "+samplerStates": [
                {
                    "samplerIndex": 0,
                    "textureFilter": "TexelAA"
                },
                {
                    "samplerIndex": 1,
                    "textureFilter": "Bilinear"
                }
            ]
        }
    }
}
```

Full documentation of _.material_ file format is currently unavailable.

You can inherit an existing material using _material_name:material_parent_ syntax in your material declaration.

> _Note that Minecraft doesn't display any materials or shaders compilation errors and doesn't display an object with invalid materials or shaders at all._

## Using custom shaders

You can add custom shaders to your mod by locating them in the _custom-shaders_ directory or in child directories.

Custom shaders for Minecraft: Bedrock Edition use GLSL language. You can find some of the examples of shaders in Minecraft's vanilla resource pack. We recommend using _entity.vertex_/_entity.fragment_ as a scratch.

If you locate your shader in one of the subdirectories, you should use relative path in your material declaration.
