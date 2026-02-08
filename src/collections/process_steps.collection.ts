import type { CollectionConfig } from '@sonicjs-cms/core';

export default {
	name: 'process_steps',
	displayName: 'Process Steps',
	description: 'Steps in the company process workflow shown on the homepage',
	icon: '\uD83D\uDCCB',

	schema: {
		type: 'object',
		properties: {
			number: {
				type: 'string',
				title: 'Step Number',
				required: true,
				maxLength: 5
			},
			title: {
				type: 'string',
				title: 'Step Title',
				required: true,
				maxLength: 200
			},
			description: {
				type: 'textarea',
				title: 'Step Description',
				required: true,
				maxLength: 500
			},
			sortOrder: {
				type: 'number',
				title: 'Display Order',
				default: 0
			}
		},
		required: ['number', 'title', 'description']
	},

	listFields: ['number', 'title', 'sortOrder'],
	searchFields: ['title', 'description'],
	defaultSort: 'sortOrder',
	defaultSortOrder: 'asc',
	managed: true,
	isActive: true
} satisfies CollectionConfig;
