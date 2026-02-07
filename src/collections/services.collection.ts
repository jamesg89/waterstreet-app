/**
 * Services Collection
 *
 * Bookkeeping services offered
 */

import type { CollectionConfig } from '@sonicjs-cms/core'

export default {
  name: 'services',
  displayName: 'Services',
  description: 'Manage bookkeeping services',
  icon: '💼',

  schema: {
    type: 'object',
    properties: {
      title: {
        type: 'string',
        title: 'Service Name',
        required: true,
        maxLength: 200
      },
      slug: {
        type: 'slug',
        title: 'URL Slug',
        required: true,
        maxLength: 200
      },
      shortDescription: {
        type: 'textarea',
        title: 'Short Description',
        maxLength: 300,
        helpText: 'Brief summary shown in service cards'
      },
      fullDescription: {
        type: 'quill',
        title: 'Full Description'
      },
      icon: {
        type: 'string',
        title: 'Icon',
        helpText: 'Emoji or icon class (e.g., 📊)'
      },
      image: {
        type: 'media',
        title: 'Service Image'
      },
      features: {
        type: 'textarea',
        title: 'Key Features',
        helpText: 'One feature per line'
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
    required: ['title', 'slug']
  },

  listFields: ['title', 'sortOrder', 'status'],
  searchFields: ['title', 'shortDescription'],
  defaultSort: 'sortOrder',
  defaultSortOrder: 'asc'
} satisfies CollectionConfig
