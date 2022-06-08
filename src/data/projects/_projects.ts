import type { SvelteComponentTyped } from 'svelte';
import GuardiansofHeart, { metadata } from './guardiansofheart.md';

export interface ProjectComponent {
  component: SvelteComponentTyped;
  metadata: Project;
}

export interface Project {
  title: string;
  partner: string;
  url: string;
  logo: string;
  imageFile: string;
  repo: string;
  description: string;
}

export default [
  {
    component: GuardiansofHeart,
    metadata: metadata,
  },
] as ProjectComponent[];
