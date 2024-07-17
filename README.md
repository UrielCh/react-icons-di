# Devicons icons for deno / Preact

**License** [MIT](https://github.com/Klarr-Agency/Circum-Icons/blob/main/LICENSE)

**Project** [https://vorillaz.github.io/devicons/](https://vorillaz.github.io/devicons/)

[See available icons here](https://react-icons.deno.dev/di)

## import_map.json

For a transparent usage:

```json
{
  "imports": {
    "preact":  "https://esm.sh/preact@10.22.1",
    "preact/": "https://esm.sh/preact@10.22.1/",
    "react-icons/di":  "https://cdn.jsdelivr.net/gh/urielch/react-icons-di@1.0.10/mod.ts",
    "react-icons/di/": "https://cdn.jsdelivr.net/gh/urielch/react-icons-di@1.0.10/ico/",
  }
}
```

## Import an icon without import_map by and afer loading all icons from the lib di

```ts
import { DiAndroid } from "https://deno.land/x/react_icons_di@1.0.10/mod.ts"
```

## import_map import an icon from all icons

```ts
import { DiAndroid } from "react-icons/di"
```

## import a single icon, downloading just one icon

```ts
import { DiAndroid } from "react-icons/di/DiAndroid.ts"
```

or using default export

```ts
import DiAndroid from "react-icons/di/DiAndroid.ts"
```

