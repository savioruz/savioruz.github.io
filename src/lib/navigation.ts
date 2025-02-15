interface NavItem {
	href: string;
	label: string;
}

export const navigationConfig: NavItem[] = [
	{
		href: '/',
		label: 'Home'
	},
	{
		href: '/projects',
		label: 'Projects'
	},
	{
		href: '/ask',
		label: 'Ask Me'
	},
	{
		href: '/blog',
		label: 'Blog'
	}
];
