import type { CollectionConfig } from '@sonicjs-cms/core';

export default {
	name: 'faqs',
	displayName: 'FAQs',
	description: 'Frequently asked questions for the contact page',
	icon: '\u2753',

	schema: {
		type: 'object',
		properties: {
			question: {
				type: 'string',
				title: 'Question',
				required: true,
				maxLength: 300
			},
			answer: {
				type: 'textarea',
				title: 'Answer',
				required: true,
				maxLength: 1000
			},
			sortOrder: {
				type: 'number',
				title: 'Display Order',
				default: 0
			}
		},
		required: ['question', 'answer']
	},

	listFields: ['question', 'sortOrder'],
	searchFields: ['question', 'answer'],
	defaultSort: 'sortOrder',
	defaultSortOrder: 'asc',
	managed: true,
	isActive: true
} satisfies CollectionConfig;
