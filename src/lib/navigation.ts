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
		href: '/ask',
		label: 'Ask Me'
	},
	{
		href: '/blog',
		label: 'Blog'
	}
];
