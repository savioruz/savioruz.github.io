import { featuredProjects, pastProjects } from './projects';

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
	other: string;
	experience: Experience[];
	education: Education[];
	skills: string[];
	featuredProjects: Project[];
	pastProjects: Project[];
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

export interface Project {
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
	other: `I like to learn new things and share my knowledge to others. I'm a fast learner and I'm always eager to take on new challenges.
	I like blue color and I like travelling. My favorite food is Nasi Padang. I'm a big fan of "Stranger Things" and "Money Heist". I also like to play Valorant. I like to watch anime and read manga. My favorite anime/manga is "One Piece" and "Dragon Ball".
	`,
	summary:
		'Backend-focused software engineer with a passion for building scalable and efficient systems. Experienced in designing and implementing robust server-side architectures, APIs, and database solutions.',
	url: 'https://s.id/resume-kheril',
	experience: [
		{
			company: 'BSI UAD - Biro Sistem Informasi UAD',
			position: 'Backend Developer (Intern)',
			location: 'Yogyakarta, Indonesia',
			startDate: 'Dec 2024',
			endDate: 'Present'
		},
		{
			company: 'MIKTI - Masyarakat Industri Kreatif Teknologi Informasi dan Komunikasi Indonesia',
			position: 'Golang Developer - AI & Computer Vision (Apprenticeship)',
			location: 'Yogyakarta, Indonesia',
			startDate: 'Sep 2024',
			endDate: 'Dec 2024'
		},
		{
			company: 'Poseidon Network',
			position: 'Community Assistant',
			location: 'Remote',
			startDate: 'June 2020',
			endDate: 'Dec 2020'
		},
		{
			company: 'UPT Laboratorium Kesehatan',
			position: 'Laboratory Analyst',
			location: 'Magelang, Indonesia',
			startDate: 'Feb 2019',
			endDate: 'Apr 2019'
		}
	],
	education: [
		{
			school: 'Ahmad Dahlan University',
			degree: 'Bachelor of Science in Computer Science',
			location: 'Yogyakarta, Indonesia',
			startDate: 'Sep 2022',
			endDate: 'Present'
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
	featuredProjects: featuredProjects,
	pastProjects: pastProjects
};
