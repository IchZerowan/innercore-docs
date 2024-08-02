# Предварительные требования

- Visual Studio Code
- node.js & npm
- пакет grunt-cli, установленный глобально с помощью npm

Для установки grunt-cli, запустите следующую команду в вашем терминале:

```bat
npm install -g grunt-cli
```

## Сборка документации и деклараций

Репозиторий с документацией расположен на [GitHub](https://github.com/mineprogramming/innercore-docs).

Для сборки этого репозитория локально, откройте эту папку в Visual Studio Code и запустите (_Ctrl+Shift+B_) **Initialize Environment** таск. Это установит все необходимые библиотеки локально. Для сборки сайта с документацией typedoc и деклараций, запустите **Run Typedoc** таск. Используйте менеджер пакетов npm для остальных операций, таких как `npm run build-serve` или `npm run serve-out` и `npm run serve-docs`.

[Перейти в документацию](/)
