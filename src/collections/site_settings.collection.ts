import type { CollectionConfig } from '@sonicjs-cms/core';

export default {
	name: 'site_settings',
	displayName: 'Site Settings',
	description: 'Global site configuration including branding, navigation, social links, and business hours',
	icon: '\u2699\uFE0F',

	schema: {
		type: 'object',
		properties: {
			siteName: {
				type: 'string',
				title: 'Site Name',
				required: true,
				maxLength: 100
			},
			tagline: {
				type: 'string',
				title: 'Tagline',
				maxLength: 200
			},
			logo: {
				type: 'media',
				title: 'Site Logo'
			},
			favicon: {
				type: 'media',
				title: 'Favicon'
			},
			footerDescription: {
				type: 'textarea',
				title: 'Footer Description',
				maxLength: 300
			},
			twitterUrl: {
				type: 'url',
				title: 'Twitter/X URL'
			},
			linkedinUrl: {
				type: 'url',
				title: 'LinkedIn URL'
			},
			businessHours: {
				type: 'array',
				title: 'Business Hours',
				items: {
					type: 'object',
					properties: {
						days: {
							type: 'string',
							title: 'Days',
							required: true
						},
						hours: {
							type: 'string',
							title: 'Hours',
							required: true
						}
					}
				}
			},
			navigationLinks: {
				type: 'array',
				title: 'Main Navigation Links',
				items: {
					type: 'object',
					properties: {
						label: {
							type: 'string',
							title: 'Link Label',
							required: true
						},
						href: {
							type: 'string',
							title: 'Link URL',
							required: true
						}
					}
				}
			},
			footerCompanyLinks: {
				type: 'array',
				title: 'Footer Company Links',
				items: {
					type: 'object',
					properties: {
						label: {
							type: 'string',
							title: 'Link Label',
							required: true
						},
						href: {
							type: 'string',
							title: 'Link URL',
							required: true
						}
					}
				}
			},
			footerServiceLinks: {
				type: 'array',
				title: 'Footer Service Links',
				items: {
					type: 'object',
					properties: {
						label: {
							type: 'string',
							title: 'Link Label',
							required: true
						},
						href: {
							type: 'string',
							title: 'Link URL',
							required: true
						}
					}
				}
			},
			footerLegalLinks: {
				type: 'array',
				title: 'Footer Legal Links',
				items: {
					type: 'object',
					properties: {
						label: {
							type: 'string',
							title: 'Link Label',
							required: true
						},
						href: {
							type: 'string',
							title: 'Link URL',
							required: true
						}
					}
				}
			},
			trustedByLabel: {
				type: 'string',
				title: 'Trusted By Section Label',
				maxLength: 100,
				default: 'TRUSTED BY CLIENTS'
			},
			trustedByLogos: {
				type: 'array',
				title: 'Trusted By Client Logos',
				items: {
					type: 'object',
					properties: {
						name: {
							type: 'string',
							title: 'Company Name',
							required: true
						},
						logo: {
							type: 'media',
							title: 'Company Logo'
						}
					}
				}
			}
		},
		required: ['siteName']
	},

	listFields: ['siteName'],
	searchFields: ['siteName'],
	defaultSort: 'createdAt',
	defaultSortOrder: 'desc',
	managed: true,
	isActive: true
} satisfies CollectionConfig;
