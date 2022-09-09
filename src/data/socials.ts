import type * as Icons from 'lucide-svelte';
import { Github, Linkedin, Facebook, Twitter } from 'lucide-svelte';

type IconKey = keyof typeof Icons;
type Icon = typeof Icons[IconKey];

export interface IconData {
	name: string;
	component: Icon;
	href: string;
	bottom?: boolean;
	invert?: boolean;
}

export default [
	{
		name: 'GitHub',
		component: Github,
		href: 'https://github.com/lukeshafer/',
		bottom: true,
	},
	{
		name: 'LinkedIn',
		component: Linkedin,
		href: 'https://www.linkedin.com/in/lukealanshafer/',
	},
	{
		name: 'Twitter',
		component: Twitter,
		href: 'https://twitter.com/lksh_dev',
	},
	{
		name: 'FaceBook',
		component: Facebook,
		href: 'https://www.facebook.com/lukeshaferwebdesign/',
		bottom: true,
	},
] as IconData[];
