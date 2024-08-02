**BackpackAPI** — a library that allows you to create backpacks.

## Downloads

|                                    Version                                    |                             Changelog                             | Released at |
| :---------------------------------------------------------------------------: | :---------------------------------------------------------------: | :---------: |
| [v10](https://github.com/DDCompany/ICLibraries/releases/tag/backpack-api-v10) |                                                                   |  10.11.20   |
|  [v9](https://github.com/DDCompany/ICLibraries/releases/tag/backpack-api-v9)  |                                                                   |  16.10.20   |
|  [v8](https://github.com/DDCompany/ICLibraries/releases/tag/backpack-api-v9)  |                                                                   |  15.05.20   |
|  [v7](https://github.com/DDCompany/ICLibraries/releases/tag/backpack-api-v9)  |                                                                   |  24.04.20   |
|                    [v6](https://yadi.sk/d/J94TU-NAg0DfaQ)                     | Added support for store id of container inside extra data of item |  21.04.20   |
|                    [v5](https://yadi.sk/d/3UwUF1QpD7-T5g)                     |                   Fixed bugs, code optimization                   |  16.10.19   |
|                    [v4](https://yadi.sk/d/fGqQqOp9UmF_qQ)                     |                            Fixed bugs                             |  11.09.19   |
|                    [v3](https://yadi.sk/d/zNFKHFwWtygALw)                     |                   New properties - items, title                   |  10.09.19   |
|          [v1](https://vk.com/forestry_pe?w=wall-149493963_1420/all)           |                           First release                           |  09.03.18   |

## Terms of Use

- You are not allowed to distribute this library on any other sites without a link to the official community
- You are not allowed to change the code of the library
- You are not allowed to copy the code in other libraries or mods

By using this library, you automatically agree to these rules

## Documentation

For registering backpack use method *register* from **BackpackRegistry**, import it from library

```js
IMPORT("BackpackAPI");

IDRegistry.genItemID("backpackTest");
Item.createItem("backpackTest", "Test Backpack", {
    name: "backpackMiners", meta: 0
}, { stack: 1 });

BackpackRegistry.register(ItemID.backpackTest, {
    title: "My Backpack",
    slots: 80,
    slotsCenter: true,
    inRow: 10,
    items: ["^ore.+", "^ingot.+", 1, {
        id: 345, data: "^[1-3]$"
    }]
});
```

First argument - item **id**, when clicked will open the backpack interface for item with this **id**

- **title** — title of the backpack window
- **slots** — number of slots in the backpack
- **inRow** — number of slots in a row
- **slotsCenter** — center the slots in the width
- **kind** — defines the way to store the unique backpack id. Can have values `BackpackKind.EXTRA` and `BackpackKind.META`. If the first value is set, the id will be stored in the `__backpack_id` extra, the second - in the item metadata
- **items** — array of items that can be placed in the backpack. The regular expressions are described, the item id or object with id and data (both can be specified by regular expression)

In object you can call method `isValidItem(id, data, count);`

If it returned true, the item will be placed in the slot. If it is not, the standard will be set, which allows to move all items described in `items` array, except other backpacks. In this example, you can place only stone:

```js
BackpackRegistry.register(ItemID.backpackTest, {
    slots: 20,
    isValidItem: function (id, data, count) {
        return id === 1;
    },
});
```

For backpacks you can set custom interfaces, but in this case all fields described above will be ignored.

```js
let gui = new UI.StandartWindow({
    standart: {
        header: {
            text: {
                text: 'Custom Gui',
            },
        },
        inventory: {
            standart: true,
        },
        background: {
            standart: true,
        },
    },
    drawing: [],
    elements: {},
});

IDRegistry.genItemID('backpackTest');
Item.createItem('backpackTest', 'Test Backpack', {
    name: 'backpackMiners', meta: 0
}, { stack: 1 });

BackpackRegistry.register(ItemID.backpackTest, {
    gui: gui,
});
```
