import type { CollectionConfig } from '@sonicjs-cms/core';

export default {
	name: 'contact_methods',
	displayName: 'Contact Methods',
	description: 'Contact channels displayed on the contact page',
	icon: '\uD83D\uDCDE',

	schema: {
		type: 'object',
		properties: {
			title: {
				type: 'string',
				title: 'Title',
				required: true,
				maxLength: 100
			},
			description: {
				type: 'textarea',
				title: 'Description',
				required: true,
				maxLength: 300
			},
			icon: {
				type: 'select',
				title: 'Icon Type',
				required: true,
				enum: ['email', 'phone', 'location'],
				enumLabels: ['Email', 'Phone', 'Location']
			},
			detail: {
				type: 'string',
				title: 'Contact Detail',
				required: true,
				maxLength: 300
			},
			sortOrder: {
				type: 'number',
				title: 'Display Order',
				default: 0
			}
		},
		required: ['title', 'description', 'icon', 'detail']
	},

	listFields: ['title', 'icon', 'detail', 'sortOrder'],
	searchFields: ['title', 'detail'],
	defaultSort: 'sortOrder',
	defaultSortOrder: 'asc',
	managed: true,
	isActive: true
} satisfies CollectionConfig;
