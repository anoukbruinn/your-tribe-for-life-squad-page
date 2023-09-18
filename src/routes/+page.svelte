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
