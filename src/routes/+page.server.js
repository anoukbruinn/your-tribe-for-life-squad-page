import { createClient } from '$lib/prismicio';

export async function load({ fetch, request }) {
	const client = createClient({ fetch, request });

	const document = await client.getByUID('page', 'home');
	console.log(document);
	return document.data;
}
