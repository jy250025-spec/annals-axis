const fs = require('fs');
const path = require('path');

const src = path.join(__dirname, '..', 'node_modules', 'lucide', 'dist', 'umd', 'lucide.js');
const dest = path.join(__dirname, '..', 'src', 'lucide.js');

if (fs.existsSync(src)) {
  fs.cpSync(src, dest);
  console.log('Lucide UMD bundle copied to src/lucide.js');
} else {
  // Try ESM/CJS fallback paths
  const fallbacks = [
    path.join(__dirname, '..', 'node_modules', 'lucide', 'dist', 'lucide.js'),
    path.join(__dirname, '..', 'node_modules', 'lucide', 'dist', 'cjs', 'lucide.js'),
  ];
  for (const f of fallbacks) {
    if (fs.existsSync(f)) {
      fs.cpSync(f, dest);
      console.log(`Lucide bundle copied from ${f}`);
      return;
    }
  }
  console.error('Could not find lucide bundle. Run npm install first.');
  process.exit(1);
}
