Abilities is a mechanism that allows to set some flags (allow/disallow actions) or values (fly speed, walk speed) for the player. Inner Core provides an interface to the underlying Abilities implementation. Not all of the abilities are well tested, some may not work at all.

Abilities may be of two types: _boolean_ and _float_. The appropriate setter is invoked automatically when you call [[Player.setAbility]] function. To keep types consistent, two functions, [[Player.getFloatAbility]] and [[Player.getBooleanAbility]] are used to retrieve value in the required form.

## Abilities List

You can find the list of all the abilities with their default values available in Minecraft 1.11.4 below. If you find out more information about some of the abilities, feel free to contribute (See {@page Contributing}).

### ATTACK_MOBS

Whether the player can attack mobs

```js
Native.PlayerAbility.ATTACK_MOBS = true;
```

### ATTACK_PLAYERS

Whether the player can attack other players

```js
Native.PlayerAbility.ATTACK_PLAYERS = true;
```

### BUILD

Whether the player can place blocks

```js
Native.PlayerAbility.BUILD = true;
```

### DOORS_AND_SWITCHES

Whether the player can operate doors, levers, etc.

```js
Native.PlayerAbility.DOORS_AND_SWITCHES = true;
```

### FLYING

Specifies whether the player is flying at the moment or not

```js
Native.PlayerAbility.FLYING = false;
```

### FLYSPEED

The speed at which the player flies in Creative

```js
Native.PlayerAbility.FLYSPEED = 0.1;
```

### INSTABUILD

Whether the player can break blocks instantly. Normally only true in Creative.

```js
Native.PlayerAbility.INSTABUILD = false;
```

### INVULNERABLE

True if the player is immune to all damage and harmful effects except for void damage. (damage caused by the /kill command is void damage)

```js
Native.PlayerAbility.INVULNERABLE = false;
```

### LIGHTNING

Whether lightning appears in thunderstorms

```js
Native.PlayerAbility.LIGHTNING = false;
```

### MAYFLY

Specifies whether the player has the ability to fly or not

```js
Native.PlayerAbility.MAYFLY = false;
```

### MINE

Whether the player can destroy blocks

```js
Native.PlayerAbility.MINE = true;
```

### MUTED

If true, disables chat so that you cannot send messages

```js
Native.PlayerAbility.MUTED = false;
```

### NOCLIP

If true, player can pass through the walls

```js
Native.PlayerAbility.NOCLIP = false;
```

### OPEN_CONTAINERS

Whether the player can interact with chests and other containers

```js
Native.PlayerAbility.OPEN_CONTAINERS = true;
```

### OPERATOR_COMMANDS

Whether the player can use operator commands

```js
Native.PlayerAbility.OPERATOR_COMMANDS = true;
```

### TELEPORT

Whether the player can use teleportation commands

```js
Native.PlayerAbility.TELEPORT = true;
```

### WALKSPEED

The speed at which the player walks

```js
Native.PlayerAbility.WALKSPEED = 0.05;
```

### WORLDBUILDER

True, if player can use worldbuilder command (education edition only)

```js
Native.PlayerAbility.WORLDBUILDER = false;
```
