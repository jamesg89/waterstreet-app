/**
 * SonicJS CMS - Waterstreet Bookkeeping
 *
 * Entry point for the headless CMS application
 */

import { createSonicJSApp, registerCollections } from '@sonicjs-cms/core'
import type { SonicJSConfig } from '@sonicjs-cms/core'

// Import collection configurations
import pagesCollection from './collections/pages.collection'
import servicesCollection from './collections/services.collection'
import pricingCollection from './collections/pricing.collection'

// Register collections BEFORE creating the app
// This ensures they are synced to the database on startup
registerCollections([
  pagesCollection,
  servicesCollection,
  pricingCollection,
])

// Application configuration
const config: SonicJSConfig = {
  collections: {
    autoSync: true
  },
  plugins: {
    directory: './src/plugins',
    autoLoad: false
  }
}

// Create and export the application
export default createSonicJSApp(config)
