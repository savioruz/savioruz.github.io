import type { Resume } from './resume';

export const projects: Resume['projects'] = [
	{
		name: 'TrinityKnights.Backend',
		description: 'Capstone Project for MIKTI Batch 7, a backend system built with Go.',
		tags: ['Go', 'PostgreSQL', 'Redis', 'REST API', 'GraphQL', 'Docker', 'Unit Testing', 'CI/CD'],
		href: 'https://github.com/savioruz/TrinityKnights.Backend'
	},
	{
		name: 'smrv2-api',
		description: 'A web scraper built to collect Simeru data.',
		tags: ['Go', 'RabbitMQ', 'PostgreSQL', 'Redis', 'Web Scraping', 'Chromedp'],
		href: 'https://github.com/savioruz/smrv2-api'
	},
	{
		name: 'roastgithub-api',
		description: 'The API backend for analyzing GitHub profiles.',
		tags: ['Go', 'GitHub API', 'REST API', 'Redis', 'Docker', 'Unit Testing', 'CI/CD'],
		href: 'https://github.com/savioruz/roastgithub-api'
	},
	{
		name: 'task',
		description: 'A simple Todo App built for MIKTI Batch 7 using Go.',
		tags: ['Go', 'PostgreSQL', 'Redis', 'REST API', 'GraphQL', 'Docker', 'Unit Testing', 'CI/CD'],
		href: 'https://github.com/savioruz/mikti-task'
	},
	{
		name: 'smrv2',
		description: 'A rework of the original Simeru website, built using Astro and React.',
		tags: ['TypeScript', 'Svelte', 'JavaScript', 'TailwindCSS'],
		href: 'https://simeru.vercel.app'
	},
	{
		name: 'smrv2-apk',
		description: 'Android App for Smrv2, built with Kotlin.',
		tags: ['Kotlin', 'Android', 'Mobile'],
		href: 'https://github.com/savioruz/smrv2-apk'
	},
	{
		name: 'short',
		description: 'A URL shortening API (development pending, frontend not started).',
		tags: ['Go', 'Redis', 'REST API'],
		href: 'https://github.com/savioruz/short'
	},
	{
		name: 'roastgithub',
		description: "A frontend tool for analyzing and 'roasting' GitHub profiles.",
		tags: ['Svelte', 'TailwindCSS', 'TypeScript'],
		href: 'https://roastgithub.svrz.xyz'
	},
	{
		name: 'roast-resume',
		description: "An application for analyzing and 'roasting' resumes.",
		tags: ['Svelte', 'TailwindCSS', 'TypeScript'],
		href: 'https://roastresume.svrz.xyz'
	},
	{
		name: 'k-bot',
		description: 'A WhatsApp bot built with Node.js.',
		tags: ['Node.js', 'WhatsApp', 'Bot'],
		href: 'https://github.com/savioruz/k-bot'
	},
	{
		name: 'zerowrt',
		description: 'A project related to OpenWRT customization and networking.',
		tags: ['Networking', 'OpenWRT', 'Linux'],
		href: 'https://github.com/savioruz/zerowrt'
	},
	{
		name: 'ql',
		description: 'Qlauncher node installer.',
		tags: ['Shell', 'Bash', 'CLI'],
		href: 'https://github.com/savioruz/ql'
	}
];
