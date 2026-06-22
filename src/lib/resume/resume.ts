import { projects } from './projects';

export interface Project {
	name: string;
	description: string;
	tags: string[];
	href: string;
}

export interface Resume {
	name: string;
	email: string;
	linkedin: string;
	github: string;
	twitter: string;
	url: string;
	summary: string;
	projects: Project[];
}

export const resume: Resume = {
	name: 'Kheril Faqih',
	email: 'kheril.dev@gmail.com',
	linkedin: 'https://www.linkedin.com/in/savioruz',
	github: 'https://github.com/savioruz',
	twitter: 'https://x.com/savioruz',
	url: 'https://s.id/resume-kheril',
	summary:
		'Backend-focused software engineer with a passion for building scalable and efficient systems. Experienced in designing and implementing robust server-side architectures, APIs, and database solutions.',
	projects
};
