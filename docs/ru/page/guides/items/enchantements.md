Зачарования позволяют задать предмету дополнительные свойства, реализовать новую механику или увеличить количество путей развития. В любом из случаев, Inner Core позволяет использовать зачарования во всех вариантах.

## Применение к предмету

Изначально любой предмет создается без возможности к зачарованию, естественно, в том случае, если это не реализует библиотека.

Самые базовые вещи, которые вы можете сделать для добавления чар к вашему инструменту, броне или чему бы то ни было, это:

```js
Item.setEnchantType(ItemID.multi_tool, EEnchantType.HOE, 0);
Item.setEnchantType(ItemID.multi_tool, EEnchantType.SHOVEL, 1);
Item.setEnchantType(ItemID.multi_tool, EEnchantType.PICKAXE, 2);
Item.setEnchantType(ItemID.multi_tool, EEnchantType.AXE, 4);
```

В данном случае мы определяем возможность зачарования сразу для нескольких типов зачарования [[EEnchantType]], давая возможность наложить чары характерные лишь для конкретного инструмента. Например, стандартными чарами являются починка и прочность, а уникальными чарами топора остается острота. Соответственно, теперь предмет может быть зачарован на столе зачарований или наковальне, используя любые из указанных уникальных чар.

Последняя цифра функции [[Item.setEnchantType]] определяет "качество" зачарования, у алмазной кирки оно выше чем, например, железной. Информацию о качестве можно найти [здесь](TODO).

Давайте сделаем что-то поинтереснее, например, будем добавлять уровень для существующего зачарования при разрушении блоков, а при определенных условиях увеличим шанс на это, т.е. добавим навыки:

```js
Callback.addCallback("DestroyBlock", function (coords, block, actorUid) {
    var item = Entity.getCarriedItem(actorUid);

    // ничего не делаем в случае если у предмета нет экстры или он не зачарован
    if (item.extra == null || !item.extra.isEnchanted()) {
        return;
    }

    // проверяем есть ли зачарование удачи на нашем предмете
    var enchantLevel = item.extra.getEnchantLevel(EEnchantment.FORTUNE);
    if (enchantLevel > 0 && enchantLevel < 3) {
        // меняем шанс повышения уровня в зависимости от условий
        var chance = 0.0025; // 1/4% повышения уровня от разрушения блока
        if (block.id == VanillaBlockID.diamond_ore) {
            chance *= 2;
        } else if (block.id == VanillaBlockID.diamond_block) {
            chance *= 8;
        }
        if (Math.random() < chance) {
            // дристаем партикли на месте разрушенного блока и повышаем уровень
            Particles.addParticle(Native.ParticleType.enchantmenttable, coords.x - 0.25, coords.y, coords.z - 0.25, 0, 0, 0);
            Particles.addParticle(Native.ParticleType.enchantmenttable, coords.x + 0.25, coords.y, coords.z - 0.25, 0, 0, 0);
            Particles.addParticle(Native.ParticleType.enchantmenttable, coords.x - 0.25, coords.y, coords.z + 0.25, 0, 0, 0);
            Particles.addParticle(Native.ParticleType.enchantmenttable, coords.x + 0.25, coords.y, coords.z + 0.25, 0, 0, 0);
            item.extra.addEnchant(EEnchantment.FORTUNE, enchantLevel + 1);
        }
    }
});
```

Теперь при использовании удачи для разрушения блоков ее уровень со временем будет повышаться. Экстра имеет некоторые методы для взаимодействия с чарами, откройте [[com.zhekasmirnov.innercore.api.NativeItemInstanceExtra]] для получения деталей.

## Создание новых зачарований

Помимо стандартного применения зачарований к вашим предметам, существует возможность создания своих собственных. Созданные таким способом зачарования могут быть применены на столе зачарований или найдены как сокровища.

Для создания новых зачарований, используйте конструктор [[CustomEnchant.newEnchant]]:

```js
Translation.addTranslation("Prism", {
    en: "Prism",
    ru: "Призма"
});

const PRISM_ENCHANT = CustomEnchant.newEnchant("prism", "Prism");
PRISM_ENCHANT.setMinMaxLevel(1, 3);
PRISM_ENCHANT.setIsDiscoverable(false)
             .setIsTreasure(true);
PRISM_ENCHANT.setIsLootable(false);
```

Это создаст зачарование с уровнем от 1 до 3, которое можно будет выловить с помощью удочки и нельзя зачаровать на столе зачарований. Так как маска не задана, оно применимо к любому предмету. Что такое маска? Это типы предметов, на которые может быть применено зачарование, то есть [[EEnchantType]]. Если мы хотим применять зачарование лишь к броне, используйте что-то вроде:

```js
PRISM_ENCHANT.setMask(EEnchantType.HELMET
    | EEnchantType.LEGGINGS
    | EEnchantType.BOOTS
    | EEnchantType.CHESTPLATE);
```

Однако в случае выше, маска не задействована, а зачарование может быть получено лишь в следствии рыбалки. Давайте исправим это, убрав `PRISM_ENCHANT.setIsLootable(false);`, так мы добьемся добавления зачарования в сундуки структур. Это производит сама игра, в противном случае зачарованные вещи и книги с вашим зачарованием могут быть найдены в сундуках для сокровищ, так работает починка, она не может быть зачарована на столе зачарования, зато может быть выловлена удочкой или найдена в сундуках энда. Изучите [библиотеку NativeStructure](/ru/lib/NativeStructure) для получения подробностей о создании новых карт лута для сундуков и новых структур с ними.

Если вам понадобится получить идентификатор зачарования, используйте `PRISM_ENCHANT.id`, он не изменится после первой генерации как это происходит с блоками и предметами.

## События и свойства зачарований

Функции в событиях вызываются при каждом взаимодействии с зачарованным предметом и значения в них могут динамично обновляться в зависимости от внешних условий. Они все еще остаются экспериментальной возможностью и могут работать нестабильно, однако возможно этот функционал необходим именно для вашего мода.

```ts
PRISM_ENCHANT.setAttackDamageBonusProvider((damage: int, entityId: number) => float);
```

```ts
PRISM_ENCHANT.setPostAttackCallback((item: ItemStack, damage: int, entityId1: number, entityId2: number) => void);
```

```ts
PRISM_ENCHANT.setProtectionBonusProvider((damage: int, damageType: int, entityId: number) => float);
```

```ts
PRISM_ENCHANT.setPostHurtCallback((item: ItemStack, damage: int, entityId1: number, entityId2: number) => void);
```

Проводники нужны для возвращения дополнительных (бонусных) очков значения. В этих случаях урон при атаке с зачарованием будет повышен (или понижен если угодно) на заданное количество полусердец, а при использовании зачарования на броне, ее защита соответственно будет повышена.
