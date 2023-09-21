<h1>Welcome to SvelteKit</h1>
<!-- <p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p> -->
<script>
	import { SliceZone } from '@prismicio/svelte';
	import { components } from '$lib/slices';

	export let data;

	console.log(data);
</script>

<!-- <pre>
       {JSON.stringify(data, null, 2)}
</pre> -->

<SliceZone slices={data.slices} {components} />

<!-- <h1>{data.welcome}</h1> -->
