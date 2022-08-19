import type { LayoutLoad } from '@sveltejs/kit';

export const load: LayoutLoad = async ({ url }) => ({ url });
