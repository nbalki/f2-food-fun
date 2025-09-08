// scripts/postinstall.js
const { execSync } = require('child_process');

try {
  if (process.platform !== 'win32') {
    execSync('chmod +x node_modules/.bin/vite', { stdio: 'ignore' });
  }
} catch (err) {
  // ignore errors — it's non-critical
}
