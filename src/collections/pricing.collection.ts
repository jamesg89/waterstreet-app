/**
 * Pricing Collection
 *
 * Pricing tiers and packages
 */

import type { CollectionConfig } from '@sonicjs-cms/core'

export default {
  name: 'pricing',
  displayName: 'Pricing',
  description: 'Manage pricing tiers',
  icon: '💰',

  schema: {
    type: 'object',
    properties: {
      tierName: {
        type: 'string',
        title: 'Tier Name',
        required: true,
        maxLength: 100,
        helpText: 'e.g., "Basic", "Professional", "Enterprise"'
      },
      subtitle: {
        type: 'string',
        title: 'Subtitle',
        maxLength: 200,
        helpText: 'e.g., "For small businesses"'
      },
      price: {
        type: 'string',
        title: 'Price',
        required: true,
        helpText: 'e.g., "$99" or "Custom"'
      },
      billingPeriod: {
        type: 'select',
        title: 'Billing Period',
        enum: ['monthly', 'annually', 'one-time', 'custom'],
        enumLabels: ['Per Month', 'Per Year', 'One-Time', 'Custom'],
        default: 'monthly'
      },
      features: {
        type: 'textarea',
        title: 'Included Features',
        helpText: 'One feature per line'
      },
      isPopular: {
        type: 'boolean',
        title: 'Highlight as Popular',
        default: false
      },
      ctaText: {
        type: 'string',
        title: 'Button Text',
        default: 'Get Started',
        maxLength: 50
      },
      ctaLink: {
        type: 'string',
        title: 'Button Link',
        helpText: 'URL or path (e.g., "/contact")'
      },
      sortOrder: {
        type: 'number',
        title: 'Display Order',
        default: 0,
        helpText: 'Lower numbers appear first'
      },
      status: {
        type: 'select',
        title: 'Status',
        enum: ['draft', 'published'],
        enumLabels: ['Draft', 'Published'],
        default: 'draft'
      }
    },
    required: ['tierName', 'price']
  },

  listFields: ['tierName', 'price', 'billingPeriod', 'isPopular', 'status'],
  searchFields: ['tierName', 'subtitle'],
  defaultSort: 'sortOrder',
  defaultSortOrder: 'asc'
} satisfies CollectionConfig
