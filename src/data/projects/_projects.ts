import type { SvelteComponentTyped } from 'svelte';
import * as OnoTuroTuro from './onoturoturo.md';
import * as GuardiansofHeart from './guardiansofheart.md';
import * as LukeShaferCom from './lukeshafercom.md';
import * as EnnysWheels from './ennyswheels.md';
import * as DoGoodCollective from './dogoodcollective.md';
import * as FridgeMagnets from './fridgemagnets.md';

/* To add additional .md files, just import above, and put into the below array 
    in the desired order for the website */
const projects = [
	FridgeMagnets,
	OnoTuroTuro,
	LukeShaferCom,
	EnnysWheels,
	DoGoodCollective,
	GuardiansofHeart,
];

export interface ProjectComponent {
	component: SvelteComponentTyped;
	metadata: Project;
}

export interface Project {
	title: string;
	partner: string;
	url: string;
	logo: string;
	logoAlt: string;
	imageFile: string;
	repo: string;
	description: string;
}

// Only exports the parts of the object we need, does so dynamically
export default projects.map((p) => {
	return {
		component: p.default,
		metadata: p.metadata,
	};
}) as ProjectComponent[];
