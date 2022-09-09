import type { LayoutLoad } from './$types';

export const load: LayoutLoad = async ({ url }) => ({ url });
export const prerender = true;
