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
import statsCollection from './collections/stats.collection'
import processStepsCollection from './collections/process_steps.collection'
import faqsCollection from './collections/faqs.collection'
import contactMethodsCollection from './collections/contact_methods.collection'
import siteSettingsCollection from './collections/site_settings.collection'
import contactSubmissionsCollection from './collections/contact_submissions.collection'

// Register collections BEFORE creating the app
// This ensures they are synced to the database on startup
registerCollections([
  pagesCollection,
  servicesCollection,
  statsCollection,
  processStepsCollection,
  faqsCollection,
  contactMethodsCollection,
  siteSettingsCollection,
  contactSubmissionsCollection,
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
