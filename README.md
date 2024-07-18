# Devicons icons for preact

[![JSR](https://jsr.io/badges/@preact-icons/di)](https://jsr.io/@preact-icons/di)

**License** [MIT](https://github.com/Klarr-Agency/Circum-Icons/blob/main/LICENSE)

**Project** [https://vorillaz.github.io/devicons/](https://vorillaz.github.io/devicons/)

[See available icons here](https://react-icons.deno.dev/di)

## install the module

```bash
deno add @preact-icons/di
dnpx jsr add @preact-icons/di
pnpm dlx jsr add @preact-icons/di
bunx jsr add @preact-icons/di
```

You may need to update your preact mapping to avoid mixing JSR and http import:
Currently Deno fresh import preact using https://esm.sh/preact http import can not be mixed with JSR package, so you may need to update your preact mapping:
```json
{
 "preact": "npm:preact@10.22.1",
 "preact/jsx-runtime": "npm:preact@10.22.1/jsx-runtime",
 "preact/hooks": "npm:preact@10.22.1/hooks",
}
```

## import an icon from all icons

```ts
import { DiAndroid } from "@preact-icons/di"
```

## import a single icon, downloading just one icon

```ts
import { DiAndroid } from "react-icons/di/DiAndroid"
```

or using default export

```ts
import DiAndroid from "react-icons/di/DiAndroid.ts"
```
