<script>
	/** @type {import("@prismicio/client").Content.TiTleSlice} */
	export let slice;
</script>

<!-- <section data-slice-type={slice.slice_type} data-slice-variation={slice.variation}>
	Placeholder component for {slice.slice_type} (variation: {slice.variation}) Slices
</section> -->

<!-- <section>
	
</section> -->
<!-- <h1>{slice.primary.Welcome}</h1> -->
<section class="cards">
	{#each slice.items as item}
		<div
			class="card-item"
			style="background-color: {item.background_color
				? item.background_color
				: '#fff'}; color: {item.text_color ? item.text_color : '#000'}"
		>
			<div class="inner-card">
				<h2>{item.fdnd}</h2>
				<h2>{item.frontender}</h2>
				<img class="profile-picture" src={item.profilepicture.url} alt="profilepicture" />
				<h1 class="naam">{item.name}</h1>
				<p>{item.about}</p>
			</div>
		</div>
	{/each}
</section>

<style>
	.cards {
		padding: 20rem;
		background-color: blueviolet;
		width: 20vw;
		height: 20vw;
	}

	.profile-picture {
		width: 8em;
	}
</style>
