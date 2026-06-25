import type { Resume } from './resume';

export const experience: Resume['experience'] = [
	{
		company: 'PT. Andiantara Sinergi Hagoon',
		role: 'Backend Developer',
		type: 'Contract',
		location: 'Yogyakarta',
		period: 'Jan 2026 — Jun 2026',
		description:
			'Built scalable Golang services with Clean Architecture, managed PostgreSQL and Redis, implemented Kafka messaging, integrated RAG with Qdrant, and configured CI/CD pipelines.',
		tags: ['Go', 'Kafka', 'Qdrant', 'PostgreSQL', 'Redis']
	},
	{
		company: 'PT. ILCS',
		role: 'Backend Developer',
		type: 'Internship',
		location: 'Yogyakarta',
		period: 'Apr 2025 — Jul 2025',
		description:
			'Performed API testing with k6, refactored microservices, and applied Clean Architecture across Golang services with PostgreSQL, Redis, and OpenTelemetry.',
		tags: ['Go', 'PostgreSQL', 'Redis', 'k6', 'OpenTelemetry']
	},
	{
		company: 'BSI UAD',
		role: 'Backend Developer',
		type: 'Internship',
		location: 'Yogyakarta',
		period: 'Dec 2024 — Mar 2025',
		description:
			'Built asset-management APIs with the Laravel framework and developed secure endpoints.',
		tags: ['Laravel', 'PHP', 'REST API']
	},
	{
		company: 'MIKTI',
		role: 'Golang Developer - AI & Computer Vision',
		type: 'Internship',
		location: 'Indonesia',
		period: 'Sep 2024 — Dec 2024',
		description:
			'Developed backend systems focused on concurrency, built RESTful APIs, integrated payment gateways, and used Redis and RabbitMQ.',
		tags: ['Go', 'Redis', 'RabbitMQ']
	},
	{
		company: 'Poseidon Network',
		role: 'Community Assistant',
		type: 'Remote',
		location: 'Taipei',
		period: 'Jun 2020 — Dec 2020',
		description:
			'Monitored community metrics and provided technical support for node configuration.',
		tags: ['Community', 'Networking']
	}
];
