import type { SvelteComponentTyped } from 'svelte';
import * as TrueCommerce from './truecommerce.md';
import * as GuardiansOfHeart from './guardiansofheart.md';
import * as CodeWizardsHQ from './codewizardshq.md';
import * as Apple from './apple.md';
import * as LCS from './lcs.md';
import * as MartinAndAssoc from './martinandassoc.md';

/* To add additional .md files, just import above, and put into the below array 
    in the desired order for the website */
const jobs = [
  TrueCommerce,
  GuardiansOfHeart,
  CodeWizardsHQ,
  Apple,
  LCS,
  MartinAndAssoc,
];

export interface JobComponent {
  component: SvelteComponentTyped;
  metadata: Job;
}

export interface Job {
  title: string;
  filename: string;
  employer: string;
  website: string;
  dates: string;
  description: string;
  skills: string[];
}

// Only exports the parts of the object we need, does so dynamically
export default jobs.map((j) => {
  return {
    component: j.default,
    metadata: j.metadata,
  };
}) as JobComponent[];
