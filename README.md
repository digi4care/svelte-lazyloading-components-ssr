# svelte-lazyloading-components-ssr

Trying to figure out how to lazy/dynamicly import components while preserving SSR.

Example:

// +page.server.js

lets say we are fetching data from an external db.
constructing an array with the component name and it's content, if some content is available.

// +page.js

Here i am trying to import these components and put them in an array so i can pass it for further use.

// +page.svelte

Trying to make the data reactive so i can tapp in to it and use it in an each block.

```$: ({ list, container } = data);```


---

1. install everything

```bash
(p)npm i
```

2. start

```bash
(p)npm run dev
```
