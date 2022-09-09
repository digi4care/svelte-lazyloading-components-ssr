# svelte-lazyloading-components-ssr

Trying to figure out how to lazy/dynamicly import components while preserving SSR.

I am using the 'Houdini starter kit for 0.16.0-next.x'

Example:


---

1. install everything

```bash
pnpm i
```

2. start

```bash
pnpm run dev
```

2. tweak the example by changing the endpoint `https://countries.trevorblades.com/graphql` to your own.

2 places:

- [client.ts](./src/client.ts)
- [houdini.config.js](./houdini.config.js)
