import { cpSync, mkdirSync, rmSync } from 'node:fs';
import { join } from 'node:path';
const root = process.cwd();
const out = join(root, 'www');
rmSync(out, { recursive: true, force: true });
mkdirSync(out, { recursive: true });
for (const file of ['index.html', 'app.js', 'styles.css', 'manifest.webmanifest', 'sw.js', 'icons']) {
  cpSync(join(root, file), join(out, file), { recursive: true });
}
console.log('Prepared PWA assets in www/');
