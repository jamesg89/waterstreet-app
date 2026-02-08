import type { CollectionConfig } from '@sonicjs-cms/core';

export default {
	name: 'services',
	displayName: 'Services',
	description: 'Financial services offered by Water Street Bookkeeping',
	icon: '\uD83D\uDCBC',

	schema: {
		type: 'object',
		properties: {
			title: {
				type: 'string',
				title: 'Service Title',
				required: true,
				minLength: 3,
				maxLength: 200
			},
			slug: {
				type: 'slug',
				title: 'URL Slug',
				required: true
			},
			description: {
				type: 'textarea',
				title: 'Short Description',
				required: true,
				maxLength: 500
			},
			icon: {
				type: 'select',
				title: 'Icon Type',
				required: true,
				enum: ['cfo', 'accounting', 'tax', 'payroll'],
				enumLabels: ['CFO', 'Accounting', 'Tax', 'Payroll']
			},
			colorScheme: {
				type: 'select',
				title: 'Color Scheme',
				required: true,
				enum: ['primary', 'secondary', 'accent', 'muted'],
				enumLabels: ['Primary', 'Secondary', 'Accent', 'Muted'],
				default: 'primary'
			},
			features: {
				type: 'array',
				title: 'Service Features',
				items: {
					type: 'object',
					properties: {
						feature: {
							type: 'string',
							title: 'Feature',
							required: true
						}
					}
				}
			},
			sortOrder: {
				type: 'number',
				title: 'Display Order',
				default: 0
			}
		},
		required: ['title', 'slug', 'description', 'icon', 'colorScheme']
	},

	listFields: ['title', 'icon', 'colorScheme', 'sortOrder'],
	searchFields: ['title', 'description'],
	defaultSort: 'sortOrder',
	defaultSortOrder: 'asc',
	managed: true,
	isActive: true
} satisfies CollectionConfig;
