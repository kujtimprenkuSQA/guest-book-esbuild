// esbuild.config.js
const res = require('esbuild').buildSync({
  bundle: true,
  entryPoints: ['src/App.tsx'],
  outfile: 'dist/output.js',
  minify: true,
  format: 'esm',
  target: "es2017",
  sourcemap: true,
  platform: "browser",
  // external: ['react', 'react-dom'],
})
