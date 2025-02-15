export const siteConfig = {
	name: 'Kheril Faqih',
	description:
		'Personal website of Kheril Faqih - Software Developer and Open Source Enthusiast. Sharing insights about web development, programming, and technology.',
	keywords: 'Kheril Faqih, Software Developer, Web Development, Programming, Tech Blog',
	url: new URL('https://www.svrz.xyz'),
	ogImage: new URL('https://www.svrz.xyz/og.png'),
	links: {
		twitter: new URL('https://x.com/savioruz'),
		github: new URL('https://github.com/savioruz')
	},
	googleVerification: 'ytFl6Kttrtc2Tp989W4sG1RYa7m2W_3HMranwrY2KhE',
	yandexVerification: 'your-yandex-verification-code'
} as const;

export type SiteConfig = typeof siteConfig;
