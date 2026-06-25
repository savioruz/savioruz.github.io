import { projects } from './projects';
import { experience } from './experience';

export interface Project {
	name: string;
	description: string;
	tags: string[];
	href: string;
}

export interface Experience {
	company: string;
	role: string;
	type?: string;
	location: string;
	period: string;
	description: string;
	tags?: string[];
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
	experience: Experience[];
}

export const resume: Resume = {
	name: 'Kheril Faqih',
	email: 'kheril.dev@gmail.com',
	linkedin: 'https://www.linkedin.com/in/savioruz',
	github: 'https://github.com/savioruz',
	twitter: 'https://x.com/rill_blastmith',
	url: 'https://s.id/resume-kheril',
	summary:
		"I mostly write Go, building APIs and the services behind them. When I'm not working, I'm usually messing with side projects or poking around Web3.",
	projects,
	experience
};
