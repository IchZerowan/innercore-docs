Mod on Inner Core is a directory with build.config file, also can be several additional files, such as description file and default configuration file. Last one will be created automatically.

## config.json

To make the behavior of your mod dependent on some user-defined settings, use mod configuration file. Configuration file is a JSON file stored in the mod's root directory and called _config.json_. To access this configuration file from your code, use [[__config__]] global variable.

The only option that should always be present in your mod is _enabled_. If it is not in the mod configuration file, it will be added automatically.

An example of mod configuration file:

```json
{
    "enabled": true,
    "topLevelSetting": 12,
    "someSettingsGroup": {
        "key1": "value1",
        "key2": true
    }
}
```

As you can see, some of the settings may be nested, so that you can group them accordingly. It is generally not recommended to use more then two layers of nested settings, since when displaying in mods manager they are flattened to a two-layer structure.

## config.info.json

All the settings of the mod can be changed from Inner Core's Mods Manager module. By default, Mods Manager uses text inputs for numbers and strings and switches for boolean values. It also generates readable setting names from property names, e.g. `some_sample_setting` gets transformed into __"Some sample setting"__. Thus, in most cases, the settings are visualized correctly. However, you might want to change the controls' look, localize settings names or supply descriptions. To customize the way your settings are displayed, you can place a JSON file called _config.info.json_ in the mod's root directory. A simple example of such a file is given below:

```json
{
    "description": "This is a global config description",
    "properties": {
        "topLevelSetting": {
            "name": "Some setting",
            "type": "SeekBar",
            "min": 10,
            "max": 120
        },
        "someSettingsGroup": {
            "name": "I will appear when mod enabled",
            "collapsible": false,
            "displayIf": "enabled"
        },
        "someSettingsGroup.key1": {
            "name": {
                "en": "Some setting",
                "ru": "Некая настройка"
            },
            "description": {
                "en": "Some setting allows to do something cool",
                "ru": "Некая настройка для создания нечто классного"
            }
        }
    }
}
```

- __description__ option allows to specify the description of the whole config file that will be displayed at the top of config view
- __properties__ option is an object containing option names (dot-separated for nested settings) as keys and their properties objects as values. All available properties of options are listed below:
  - _name_ specifies the actual name of the setting. Can be either a string or an object containing language codes as keys and localized strings as values. In the second case, English (_"en"_) localization is required
  - _description_ specifies the description that will be displayed above the setting. Can be either string or an object like in the _name_ property
  - _collapsible_ can be applied only to settings group. If false, the group is expanded by default and cannot be collapsed. Defaults to true
  - _display_ allows to hide settings by specifying as false. Defaults to true
  - _displayIf_ allows to display settings only if some boolean setting is either true or false. Use `"displayIf": "propertyName"` to display the setting if the appropriate property is true and `"displayIf": "!propertyName"` to display the setting if the appropriate property is false
  - _index_ is used to specify the order of settings in the config view. The settings with specified indexes go first, then the settings with no indexes in the order they appear in the _config.json_ file. Note that the indexes work only on the single layer of nested settings, so that you can rearrange settings inside the group
    - _type_ allows for some additional setting appearance modification. The only currently supported explicit setting type is a _"SeekBar"_. It creates a slider for numeric values rather then just a text input
    - _min_ specifies the minimum value for the _SeekBar_ settings
    - _max_ specifies the maximum value for the _SeekBar_ settings
