export const siteConfig = {
	name: 'Savioruz',
	description: 'Personal website of Savioruz',
	url: new URL('https://svrz.xyz'),
	ogImage: new URL('https://svrz.xyz/og.png'),
	links: {
		twitter: new URL('https://twitter.com/savioruz'),
		github: new URL('https://github.com/savioruz')
	},
	googleVerification: 'your-google-verification-code',
	yandexVerification: 'your-yandex-verification-code'
} as const;

export type SiteConfig = typeof siteConfig;
