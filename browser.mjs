// Bootstrap yargs for browser:
import browserPlatformShim from './lib/platform-shims/browser.js'
import { YargsWithShim } from './build/lib/yargs-factory.js'

const Yargs = YargsWithShim(browserPlatformShim)

export { Yargs }
