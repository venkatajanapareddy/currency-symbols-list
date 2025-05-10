import { defineConfig } from 'tsup';
import { writeFileSync } from 'fs';
import { resolve } from 'path';
import { currencySymbolsMap } from './src/data';

export default defineConfig({
  entry: ['src/index.ts', 'src/cli.ts'],
  format: ['cjs', 'esm'],
  dts: true,
  splitting: false,
  sourcemap: true,
  clean: true,
  shims: true,
  outDir: 'dist',
  onSuccess: async () => {
    // Generate the JSON data file
    const jsonPath = resolve('./dist/currencySymbolsMap.json');
    writeFileSync(jsonPath, JSON.stringify(currencySymbolsMap, null, 2), 'utf-8');
    console.log('✅ Generated currencySymbolsMap.json');

    // Make CLI executable
    const { chmod } = await import('fs/promises');
    await chmod('./dist/cli.js', '755');
    console.log('✅ Made CLI executable');
  },
});
