Before we start writing your mod page, we need to learn about Markdown format.
You can goto [this article](https://www.markdownguide.org/getting-started/) to learn what is Markdown.
And [this article](https://www.markdownguide.org/basic-syntax/) to learn basic markdown syntax.

After learning about Markdown format, you can start writing your pages.

## Where we are

Before do anything determine what page will be created and which language(s) must included.

Every page at documentation described in markdown at *documentation/static/\<language\>* folder.

```txt
<language>
├─ README.md (index of current language, or nothing)
├─ page (most interesting thing, markdown content)
│  ├─ apps (layout, e.g. Horizon and Inner Core)
│  ├─ guides (here placed everything about our game, e.g. attributes)
│  ├─ lib (your (as developer) libraries)
│  ├─ mod (your (as developer) template mods)
│  └─ other (such as contributing guides, exclusive to maintainers)
└─ config (routing for your pages, docsify configuration)
   ├─ _sidebar.md (sidebar to left of content, navigation)
   └─ _navbar.md (e.g. switching between languages)
```

> Required folder that will be used to documentation doesn't appears here? Contact with maintainers to submit new location.

## Writing new content

Just create new markdown at *documentation/static/\<language\>/page/\<category\>/\<name\>.md* and here we set.

```md
Library — is the most common part of modding, it usage is very simple and sweet.

## IMPORT

How to `IMPORT` actually does work?
Dependencies will be resolved, repository with them automatically appears in your code.
Include .d.ts into your *declarations/* and everything is set!
```

Additionally or otherwise, you can simply include existing external guide. It may be more handly than updating your guide every time.

```md
[REPOSITORY](https://raw.githubusercontent.com/AUTHOR/REPOSITORY/master/README.md ':include')
```

Some attentions before anything will be pull-requested:

1. Corresponding markdown must be categorized by [description above](#where-we-are).
2. Do not use directly route to external content, links must be appeared only on page.
3. Mod template / library page may exists only once, few occupants is not allowed.
4. Use `:include` in markdown only when you need include relative content or describe your mod template / library. Guides must be remain in this repository, to just build and use locally as documentation.

## Creating routes for your pages

Configuration will be performed with corresponding *documentation/static/\<language\>/config/_sidebar.md* markdown. Do not change existing pathes, it already used as url location and can be accessed from another site.

You can just use already created template below, or copy-paste existing markdown entry.

### Inner Core or Minecraft Guide

```md
  Category
  - [Guide 1](/en/page/guides/category/guide.md)
  - [Advanced Guide 2](/en/page/guides/category/complex-guide.md)

- [Category Page](/en/page/guides/new-category/index.md)
  - [Another Guide](/en/page/guides/new-category/another-guide.md)
```

### Library page

```md
  - [BackpackAPI](/en/page/lib/BackpackAPI.md)
```

### Mod template

```md
  - [IndustrialCraft](/en/page/mod/IndustrialCraft2.md)
```
