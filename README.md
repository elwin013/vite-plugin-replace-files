# vite-plugin-replace-files

Replace files during Vite build - handy when replacing strings is not enough.

## Install

Install with your favorite package manager (e.g. `npm`):

```
npm install -D vite-plugin-replace-files
```

## Usage

Add to `vite.config.ts` - example below will replace file `src/env.ts` with file `conf/env.ts`:

```ts
import { defineConfig } from 'vite';
import path from 'path';
import replaceFiles from 'vite-plugin-replace-files';

export default defineConfig({
  plugins: [
    replaceFiles([
      {
        file: path.join('src', 'env.ts'),
        replacement: path.join('conf', 'env.ts'),
      },
    ])
  ],
});
```

## License

[MIT](LICENSE)