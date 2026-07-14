/**
 * Hostinger/Linux builds sometimes skip lightningcss optional natives
 * when the lockfile was generated on macOS. Install them on Linux if missing.
 */
const { existsSync } = require('fs')
const { execSync } = require('child_process')
const { join } = require('path')

if (process.platform !== 'linux' || process.arch !== 'x64') {
  process.exit(0)
}

const packages = [
  'lightningcss-linux-x64-gnu@1.32.0',
  'lightningcss-linux-x64-musl@1.32.0',
  '@tailwindcss/oxide-linux-x64-gnu@4.3.2',
  '@tailwindcss/oxide-linux-x64-musl@4.3.2',
]

const missing = packages.filter((spec) => {
  const name = spec.replace(/@.+$/, '')
  return !existsSync(join(process.cwd(), 'node_modules', name))
})

if (missing.length === 0) {
  process.exit(0)
}

console.log('[ensure-native-css] Installing missing Linux CSS natives:', missing.join(', '))

try {
  execSync(`npm install --no-save --force ${missing.join(' ')}`, {
    stdio: 'inherit',
    env: {
      ...process.env,
      npm_config_ignore_scripts: 'true',
    },
  })
} catch (error) {
  console.warn('[ensure-native-css] Failed to install natives:', error.message)
  process.exit(0)
}
