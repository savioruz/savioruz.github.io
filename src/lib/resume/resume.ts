import { projects } from './projects';

export interface Resume {
	name: string;
	email: string;
	linkedin: string;
	github: string;
	twitter: string;
	website: string;
	about: string;
	summary: string;
	url: string;
	experience: Experience[];
	education: Education[];
	skills: string[];
	projects: Project[];
}

interface Experience {
	company: string;
	position: string;
	location: string;
	startDate: string;
	endDate: string;
}

interface Education {
	school: string;
	degree: string;
	location: string;
	startDate: string;
	endDate: string;
}

interface Project {
	name: string;
	description: string;
	tags: string[];
	startDate: string | null;
	endDate: string | null;
	url: string;
	image: string | null;
	href: string;
}

export const resume: Resume = {
	name: 'Kheril Faqih',
	email: 'kherr.riil@gmail.com',
	linkedin: 'https://www.linkedin.com/in/savioruz',
	github: 'https://github.com/savioruz',
	twitter: 'https://x.com/savioruz',
	website: 'https://svrz.xyz',
	about: `Hi, I'm Kheril Faqih, a passionate backend developer and Computer Science student based in Yogyakarta, Indonesia. With a strong foundation in Golang, modern web technologies, and backend architecture.
    I specialize in building scalable and efficient APIs, implementing caching strategies with Redis, and optimizing performance using concurrency and message queues.
    Throughout my journey, I've worked on diverse projects, from RESTful and GraphQL APIs to AI-driven systems and web scraping tools.
    My experience includes integrating payment gateways, containerized deployments with Docker, and cloud-based solutions.
    I thrive on solving complex problems, writing clean and maintainable code, and collaborating with teams to create impactful software.
    `,
	summary:
		'Backend-focused software engineer with a passion for building scalable and efficient systems. Experienced in designing and implementing robust server-side architectures, APIs, and database solutions.',
	url: 'https://s.id/resume-kheril',
	experience: [
		{
			company: 'Example Company',
			position: 'Software Engineer',
			location: 'San Francisco, CA',
			startDate: '2020-01-01',
			endDate: '2024-01-01'
		},
		{
			company: 'Example Company',
			position: 'Software Engineer',
			location: 'San Francisco, CA',
			startDate: '2020-01-01',
			endDate: '2024-01-01'
		}
	],
	education: [
		{
			school: 'Example School',
			degree: 'Bachelor of Science in Computer Science',
			location: 'San Francisco, CA',
			startDate: '2020-01-01',
			endDate: '2024-01-01'
		}
	],
	skills: [
		'Go',
		'PHP',
		'Python',
		'JavaScript',
		'TypeScript',
		'React',
		'Next.js',
		'Svelte',
		'Tailwind CSS',
		'PostgreSQL',
		'MySQL',
		'Redis',
		'Docker',
		'Kubernetes',
		'CI/CD',
		'Git',
		'Linux'
	],
	projects: [...projects]
};
