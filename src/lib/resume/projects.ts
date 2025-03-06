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

export const featuredProjects: Resume['featuredProjects'] = [
	{
		name: 'TrinityKnights.Backend',
		description: 'Capstone Project for MIKTI Batch 7, a backend system built with Go.',
		tags: ['Go', 'PostgreSQL', 'Redis', 'REST API', 'GraphQL', 'Docker', 'Unit Testing', 'CI/CD'],
		startDate: 'Dec 2024',
		endDate: 'Dec 2024',
		url: 'https://github.com/savioruz/TrinityKnights.Backend',
		image: getImage('TrinityKnights.Backend'),
		href: 'https://github.com/savioruz/TrinityKnights.Backend'
	},
	{
		name: 'smrv2-api',
		description: 'A web scraper built to collect Simeru data.',
		tags: ['Go', 'RabbitMQ', 'PostgreSQL', 'Redis', 'Web Scraping', 'Chromedp'],
		startDate: 'Sep 2024',
		endDate: 'present',
		url: 'https://github.com/savioruz/smrv2-api',
		image: 'https://github.com/savioruz/smrv2-api/raw/main/assets/preview.png',
		href: 'https://github.com/savioruz/smrv2-api'
	},
	{
		name: 'roastgithub-api',
		description: 'The API backend for analyzing GitHub profiles.',
		tags: ['Go', 'GitHub API', 'REST API', 'Redis', 'Docker', 'Unit Testing', 'CI/CD'],
		startDate: 'Aug 2024',
		endDate: 'present',
		url: 'https://github.com/savioruz/roastgithub-api',
		image: 'https://github.com/savioruz/roastgithub-api/raw/main/assets/preview.png',
		href: 'https://github.com/savioruz/roastgithub-api'
	},
	{
		name: 'task',
		description: 'A simple Todo App built for MIKTI Batch 7 using Go.',
		tags: ['Go', 'PostgreSQL', 'Redis', 'REST API', 'GraphQL', 'Docker', 'Unit Testing', 'CI/CD'],
		startDate: 'Sep 2024',
		endDate: 'Dec 2024',
		url: 'https://github.com/savioruz/mikti-task',
		image: getImage('mikti-task'),
		href: 'https://github.com/savioruz/mikti-task'
	}
];

export const pastProjects: Resume['pastProjects'] = [
	{
		name: 'smrv2',
		description: 'A rework of the original Simeru website, built using Astro and React.',
		tags: ['TypeScript', 'Svelte', 'JavaScript', 'TailwindCSS'],
		startDate: 'Sep 2024',
		endDate: 'present',
		url: 'https://github.com/savioruz/Smrv2',
		image: 'https://simeru.vercel.app/opengraph.png',
		href: 'https://simeru.vercel.app'
	},
	{
		name: 'smrv2-apk',
		description: 'Android App for Smrv2, built with Kotlin.',
		tags: ['Kotlin', 'Android', 'Mobile'],
		startDate: 'Dec 2024',
		endDate: 'Dec 2024',
		url: 'https://github.com/savioruz/smrv2-apk',
		image: getImage('smrv2-apk'),
		href: 'https://github.com/savioruz/smrv2-apk'
	},
	{
		name: 'short',
		description: 'A URL shortening API (development pending, frontend not started).',
		tags: ['Go', 'Redis', 'REST API'],
		startDate: 'Sep 2024',
		endDate: 'present',
		url: 'https://github.com/savioruz/short',
		image: getImage('short'),
		href: 'https://github.com/savioruz/short'
	},
	{
		name: 'roastgithub',
		description: "A frontend tool for analyzing and 'roasting' GitHub profiles.",
		tags: ['Svelte', 'TailwindCSS', 'TypeScript'],
		startDate: 'Aug 2024',
		endDate: 'Aug 2024',
		url: 'https://github.com/savioruz/roastgithub',
		image: 'https://roastgithub.svrz.xyz/og.jpg',
		href: 'https://roastgithub.svrz.xyz'
	},
	{
		name: 'roast-resume',
		description: "An application for analyzing and 'roasting' resumes.",
		tags: ['Svelte', 'TailwindCSS', 'TypeScript'],
		startDate: 'Aug 2024',
		endDate: 'Aug 2024',
		url: 'https://github.com/savioruz/roast-resume',
		image: 'https://roastresume.svrz.xyz/og.png',
		href: 'https://roastresume.svrz.xyz'
	},
	{
		name: 'k-bot',
		description: 'A WhatsApp bot built with Node.js.',
		tags: ['Node.js', 'WhatsApp', 'Bot'],
		startDate: 'Sep 2023',
		endDate: 'Oct 2023',
		url: 'https://github.com/savioruz/k-bot',
		image: getImage('k-bot'),
		href: 'https://github.com/savioruz/k-bot'
	},
	{
		name: 'zerowrt',
		description: 'A project related to OpenWRT customization and networking.',
		tags: ['Networking', 'OpenWRT', 'Linux'],
		startDate: 'Mar 2021',
		endDate: 'present',
		url: 'https://github.com/savioruz/zerowrt',
		image: 'https://raw.githubusercontent.com/jakues/zerowrt/master/images/zerowrt.png',
		href: 'https://github.com/savioruz/zerowrt'
	},
	{
		name: 'ql',
		description: 'Query language tool for structured data processing.',
		tags: ['Shell', 'Bash', 'CLI'],
		startDate: 'Jul 2021',
		endDate: 'Sep 2021',
		url: 'https://github.com/savioruz/ql',
		image: getImage('ql'),
		href: 'https://github.com/savioruz/ql'
	}
];
