import type { Resume } from './resume';

const hashCache = new Map<string, number>();

function getImage(name: string) {
	if (hashCache.has(name)) {
		return `https://opengraph.githubassets.com/${hashCache.get(name)}/savioruz/${name}`;
	}

	const generateHash = (name: string) => {
		const hash = name.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0);
		hashCache.set(name, hash);
		return hash;
	};

	return `https://opengraph.githubassets.com/${generateHash(name)}/savioruz/${name}`;
}

export const projects: Resume['projects'] = [
	{
		name: 'Smrv2',
		description: 'A rework of the original Simeru website, built using Astro and React.',
		tags: ['TypeScript', 'Astro', 'React', 'JavaScript', 'CSS'],
		startDate: '2024-01-01',
		endDate: '2024-12-31',
		url: 'https://github.com/savioruz/Smrv2',
		image: 'https://simeru.vercel.app/opengraph.png',
		href: 'https://simeru.vercel.app'
	},
	{
		name: 'smrv2-apk',
		description: 'Android App for Smrv2, built with Kotlin.',
		tags: ['Kotlin', 'Android', 'Mobile'],
		startDate: '2024-12-14',
		endDate: null,
		url: 'https://github.com/savioruz/smrv2-apk',
		image: getImage('smrv2-apk'),
		href: 'https://github.com/savioruz/smrv2-apk'
	},
	{
		name: 'zerowrt',
		description: 'A project related to OpenWRT customization and networking.',
		tags: ['Networking', 'OpenWRT', 'Linux'],
		startDate: null,
		endDate: null,
		url: 'https://github.com/savioruz/zerowrt',
		image: 'https://raw.githubusercontent.com/jakues/zerowrt/master/images/zerowrt.png',
		href: 'https://github.com/savioruz/zerowrt'
	},
	{
		name: 'ql',
		description: 'Query language tool for structured data processing.',
		tags: ['Shell', 'Bash', 'CLI'],
		startDate: null,
		endDate: null,
		url: 'https://github.com/savioruz/ql',
		image: getImage('ql'),
		href: 'https://github.com/savioruz/ql'
	},
	{
		name: 'simeru-scraper',
		description: 'A web scraper built to collect Simeru data.',
		tags: ['Go', 'Web Scraping', 'Chromedp'],
		startDate: '2024-09-18',
		endDate: null,
		url: 'https://github.com/savioruz/simeru-scraper',
		image: 'https://github.com/savioruz/simeru-scraper/raw/main/assets/preview.png',
		href: 'https://github.com/savioruz/simeru-scraper'
	},
	{
		name: 'roastgithub',
		description: "A frontend tool for analyzing and 'roasting' GitHub profiles.",
		tags: ['Svelte', 'TailwindCSS', 'TypeScript'],
		startDate: null,
		endDate: null,
		url: 'https://github.com/savioruz/roastgithub',
		image: 'https://roastgithub.svrz.xyz/og.jpg',
		href: 'https://roastgithub.svrz.xyz'
	},
	{
		name: 'roastgithub-api',
		description: 'The API backend for analyzing GitHub profiles.',
		tags: ['Go', 'GitHub API', 'REST API', 'Redis', 'Docker', 'Unit Testing', 'CI/CD'],
		startDate: null,
		endDate: null,
		url: 'https://github.com/savioruz/roastgithub-api',
		image: 'https://github.com/savioruz/roastgithub-api/raw/main/assets/preview.png',
		href: 'https://github.com/savioruz/roastgithub-api'
	},
	{
		name: 'roast-resume',
		description: "An application for analyzing and 'roasting' resumes.",
		tags: ['Svelte', 'TailwindCSS', 'TypeScript'],
		startDate: null,
		endDate: null,
		url: 'https://github.com/savioruz/roast-resume',
		image: 'https://roastresume.svrz.xyz/og.png',
		href: 'https://roastresume.svrz.xyz'
	},
	{
		name: 'TrinityKnights.Backend',
		description: 'Capstone Project for MIKTI Batch 7, a backend system built with Go.',
		tags: ['Go', 'PostgreSQL', 'Redis', 'REST API', 'GraphQL', 'Docker', 'Unit Testing', 'CI/CD'],
		startDate: '2024-12-05',
		endDate: null,
		url: 'https://github.com/savioruz/TrinityKnights.Backend',
		image: getImage('TrinityKnights.Backend'),
		href: 'https://github.com/savioruz/TrinityKnights.Backend'
	},
	{
		name: 'short',
		description: 'A URL shortening API (development pending, frontend not started).',
		tags: ['Go', 'Redis', 'REST API'],
		startDate: null,
		endDate: null,
		url: 'https://github.com/savioruz/short',
		image: getImage('short'),
		href: 'https://github.com/savioruz/short'
	},
	{
		name: 'task',
		description: 'A simple Todo App built for MIKTI Batch 7 using Go.',
		tags: ['Go', 'PostgreSQL', 'Redis', 'REST API', 'GraphQL', 'Docker', 'Unit Testing', 'CI/CD'],
		startDate: '2024-09-21',
		endDate: null,
		url: 'https://github.com/savioruz/mikti-task',
		image: getImage('mikti-task'),
		href: 'https://github.com/savioruz/mikti-task'
	},
	{
		name: 'k-bot',
		description: 'A WhatsApp bot built with Node.js.',
		tags: ['Node.js', 'WhatsApp', 'Bot'],
		startDate: null,
		endDate: null,
		url: 'https://github.com/savioruz/k-bot',
		image: getImage('k-bot'),
		href: 'https://github.com/savioruz/k-bot'
	}
];
