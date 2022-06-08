import type { SvelteComponentTyped } from 'svelte';

export interface JobComponent {
  component: SvelteComponentTyped;
  metadata: Job;
}

export interface Job {
  title: string;
  employer: string;
  website: string;
  dates: string;
  description: string;
  skills: string[];
}
