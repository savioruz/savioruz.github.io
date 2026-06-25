import type { Resume } from './resume';

export const projects: Resume['projects'] = [
	{
		name: 'Sheka',
		description: 'A prediction market built on the Sui blockchain.',
		tags: ['TypeScript', 'Sui', 'Web3', 'Move', 'Hono', 'SvelteKit'],
		href: 'https://github.com/savioruz/Sheka-monorepo'
	},
	{
		name: 'Wormy',
		description:
			'Wormy Token and Wormy Race, a DApp on the Linea network. Ranked 2nd at Linea Exponent Season 1.',
		tags: ['Solidity', 'Linea', 'Web3', 'Smart Contracts', 'Go', 'SvelteKit'],
		href: 'https://github.com/WormyToken'
	},
	{
		name: 'polymarket-ops',
		description: 'AI-powered Polymarket copy-trading bot.',
		tags: ['Go', 'AI', 'Trading'],
		href: 'https://github.com/savioruz/polymarket-ops'
	},
	{
		name: 'butuhkidul',
		description: 'A community fundraising platform.',
		tags: ['SvelteKit', 'TypeScript', 'TailwindCSS'],
		href: 'https://butuhkidul.my.id'
	},
	{
		name: 'oil',
		description: 'A Go backend boilerplate.',
		tags: ['Go', 'PostgreSQL', 'Kafka', 'Redis'],
		href: 'https://github.com/savioruz/oil'
	},
	{
		name: 'oil-auth',
		description: 'An auth boilerplate with better-auth, Hono, PostgreSQL, and OpenTelemetry.',
		tags: ['TypeScript', 'Hono', 'OpenTelemetry'],
		href: 'https://github.com/savioruz/oil-auth'
	},
	{
		name: 'taskls',
		description: 'A task management tool.',
		tags: ['SvelteKit', 'TypeScript'],
		href: 'https://github.com/savioruz/taskls'
	},
	{
		name: 'syntax-highlighter',
		description: 'A code highlighting utility for Word documents.',
		tags: ['SvelteKit', 'TypeScript'],
		href: 'https://word-syntax-highlighter.vercel.app'
	},
	{
		name: 'TrinityKnights.Backend',
		description: 'Capstone Project for MIKTI Batch 7, a backend system built with Go.',
		tags: ['Go', 'PostgreSQL', 'Redis', 'GraphQL'],
		href: 'https://github.com/savioruz/TrinityKnights.Backend'
	}
];
