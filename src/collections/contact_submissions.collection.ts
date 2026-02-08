import type { CollectionConfig } from '@sonicjs-cms/core';

export default {
	name: 'contact_submissions',
	displayName: 'Contact Submissions',
	description: 'Form submissions from the contact page',
	icon: '\uD83D\uDCE9',

	schema: {
		type: 'object',
		properties: {
			name: {
				type: 'string',
				title: 'Name',
				required: true,
				maxLength: 200
			},
			email: {
				type: 'email',
				title: 'Email',
				required: true
			},
			phone: {
				type: 'string',
				title: 'Phone Number',
				maxLength: 30
			},
			message: {
				type: 'textarea',
				title: 'Message',
				required: true,
				maxLength: 5000
			},
			status: {
				type: 'select',
				title: 'Status',
				enum: ['new', 'read', 'replied', 'archived'],
				enumLabels: ['New', 'Read', 'Replied', 'Archived'],
				default: 'new'
			}
		},
		required: ['name', 'email', 'message']
	},

	listFields: ['name', 'email', 'status'],
	searchFields: ['name', 'email', 'message'],
	defaultSort: 'createdAt',
	defaultSortOrder: 'desc',
	managed: true,
	isActive: true
} satisfies CollectionConfig;
