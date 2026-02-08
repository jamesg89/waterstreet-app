import type { CollectionConfig } from '@sonicjs-cms/core';

export default {
	name: 'pages',
	displayName: 'Pages',
	description: 'Site pages with hero sections and CTA blocks',
	icon: '\uD83D\uDCC4',

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
				required: true
			},
			metaTitle: {
				type: 'string',
				title: 'SEO Meta Title',
				maxLength: 70
			},
			metaDescription: {
				type: 'textarea',
				title: 'SEO Meta Description',
				maxLength: 160
			},
			heroTitle: {
				type: 'string',
				title: 'Hero Title',
				required: true,
				maxLength: 200
			},
			heroSubtitle: {
				type: 'string',
				title: 'Hero Subtitle',
				maxLength: 200
			},
			heroDescription: {
				type: 'textarea',
				title: 'Hero Description',
				maxLength: 500
			},
			heroPrimaryCta: {
				type: 'string',
				title: 'Primary CTA Text',
				maxLength: 50
			},
			heroPrimaryCtaHref: {
				type: 'string',
				title: 'Primary CTA Link',
				maxLength: 200
			},
			heroSecondaryCta: {
				type: 'string',
				title: 'Secondary CTA Text',
				maxLength: 50
			},
			heroSecondaryCtaHref: {
				type: 'string',
				title: 'Secondary CTA Link',
				maxLength: 200
			},
			heroImage: {
				type: 'media',
				title: 'Hero Image'
			},
			ctaTitle: {
				type: 'string',
				title: 'CTA Section Title',
				maxLength: 200
			},
			ctaDescription: {
				type: 'textarea',
				title: 'CTA Section Description',
				maxLength: 500
			},
			ctaPrimaryCta: {
				type: 'string',
				title: 'CTA Primary Button Text',
				maxLength: 50
			},
			ctaPrimaryCtaHref: {
				type: 'string',
				title: 'CTA Primary Button Link',
				maxLength: 200
			},
			ctaSecondaryCta: {
				type: 'string',
				title: 'CTA Secondary Button Text',
				maxLength: 50
			},
			ctaSecondaryCtaHref: {
				type: 'string',
				title: 'CTA Secondary Button Link',
				maxLength: 200
			},
			sectionTitle: {
				type: 'string',
				title: 'Main Section Title',
				maxLength: 200
			},
			sectionDescription: {
				type: 'textarea',
				title: 'Main Section Description',
				maxLength: 500
			}
		},
		required: ['title', 'slug', 'heroTitle']
	},

	listFields: ['title', 'slug'],
	searchFields: ['title', 'heroTitle', 'metaTitle'],
	defaultSort: 'title',
	defaultSortOrder: 'asc',
	managed: true,
	isActive: true
} satisfies CollectionConfig;
