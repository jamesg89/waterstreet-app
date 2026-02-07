/**
 * Pages Collection
 *
 * Website pages (homepage, about, contact, etc.)
 */

import type { CollectionConfig } from '@sonicjs-cms/core'

export default {
  name: 'pages',
  displayName: 'Pages',
  description: 'Manage website pages',
  icon: '📄',

  schema: {
    type: 'object',
    properties: {
      title: {
        type: 'string',
        title: 'Page Title',
        required: true,
        maxLength: 200
      },
      slug: {
        type: 'slug',
        title: 'URL Slug',
        required: true,
        maxLength: 200,
        helpText: 'e.g., "about", "contact", "home"'
      },
      heroImage: {
        type: 'media',
        title: 'Hero Image'
      },
      heroHeadline: {
        type: 'string',
        title: 'Hero Headline',
        maxLength: 200
      },
      heroSubheadline: {
        type: 'textarea',
        title: 'Hero Subheadline',
        maxLength: 500
      },
      content: {
        type: 'quill',
        title: 'Page Content'
      },
      metaDescription: {
        type: 'textarea',
        title: 'Meta Description',
        maxLength: 160,
        helpText: 'SEO description for search engines'
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

  listFields: ['title', 'slug', 'status'],
  searchFields: ['title', 'slug', 'content'],
  defaultSort: 'title',
  defaultSortOrder: 'asc'
} satisfies CollectionConfig
