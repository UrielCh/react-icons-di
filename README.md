# Devicons icons for deno / Preact

**License** [MIT](https://github.com/Klarr-Agency/Circum-Icons/blob/main/LICENSE)

**Project** [https://vorillaz.github.io/devicons/](https://vorillaz.github.io/devicons/)

[See available icons here](https://react-icons.github.io/react-icons/icons?name=di)

## import_map.json

For a transparent usage:

```json
{
  "imports": {
    "preact":  "https://esm.sh/preact@10.15.1",
    "preact/": "https://esm.sh/preact@10.15.1/",
    "react-icons/di":  "https://cdn.jsdelivr.net/gh/urielch/react-icons-di@1.0.3/mod.ts",
    "react-icons/di/": "https://cdn.jsdelivr.net/gh/urielch/react-icons-di/ico/",
  }
}
```

## Direct import sample

```ts
import { DiAndroid } from "https://deno.land/x/react_icons_di@1.0.3/mod.ts"
```

## import_map import sample

```ts
import { DiAndroid } from "react-icons/di"
```

## minimal import

```ts
import { DiAndroid } from "react-icons/di/DiAndroid.ts"
```

## minimal import using default export

```ts
import DiAndroid from "react-icons/di/DiAndroid.ts"
```

