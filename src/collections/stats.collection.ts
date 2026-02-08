import type { CollectionConfig } from '@sonicjs-cms/core';

export default {
	name: 'stats',
	displayName: 'Statistics',
	description: 'Key business statistics displayed on the homepage',
	icon: '\uD83D\uDCCA',

	schema: {
		type: 'object',
		properties: {
			value: {
				type: 'string',
				title: 'Stat Value',
				required: true,
				maxLength: 20
			},
			suffix: {
				type: 'string',
				title: 'Suffix (e.g. %, +, yrs+)',
				maxLength: 10
			},
			label: {
				type: 'string',
				title: 'Label',
				required: true,
				maxLength: 100
			},
			sortOrder: {
				type: 'number',
				title: 'Display Order',
				default: 0
			}
		},
		required: ['value', 'label']
	},

	listFields: ['value', 'suffix', 'label', 'sortOrder'],
	searchFields: ['label'],
	defaultSort: 'sortOrder',
	defaultSortOrder: 'asc',
	managed: true,
	isActive: true
} satisfies CollectionConfig;
