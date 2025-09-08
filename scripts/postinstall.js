// scripts/postinstall.js
const { execSync } = require('child_process');

try {
  // Only run chmod on POSIX platforms (linux, darwin). skip on Windows.
  if (process.platform !== 'win32') {
    execSync('chmod +x node_modules/.bin/vite', { stdio: 'ignore' });
  }
} catch (err) {
  // non-critical: ignore errors to avoid breaking installs
  // console.error('postinstall script error', err);
}
