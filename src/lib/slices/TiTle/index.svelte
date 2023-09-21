<script>
	/** @type {import("@prismicio/client").Content.TiTleSlice} */
	export let slice;
</script>

<!-- <section data-slice-type={slice.slice_type} data-slice-variation={slice.variation}>
	Placeholder component for {slice.slice_type} (variation: {slice.variation}) Slices
</section> -->

<body>
	<h1 class="welcome">{slice.primary.Welcome}</h1>

	<section class="cards">
		<div class="cards0">
			{#each slice.items.slice(0, 6) as item}
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
		</div>

		<div class="cards1">
			{#each slice.items.slice(7, 13) as item}
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
		</div>

		<div class="cards2">
			{#each slice.items.slice(14, 20) as item}
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
		</div>
	</section>
</body>

<style>
	body {
		font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
		background-color: black;
	}

	.welcome {
		color: white;
		font-size: 150px;
		
	}

	.cards {
		
		width: 500px;
		height: 20vw;
		font-size: 60px;

		display: grid;
		grid-template-columns: repeat(3);
		grid-template-rows: repeat(3);
		grid-column-gap: 0px;
		grid-row-gap: 0px;
	}

	.profile-picture {
		margin-left: 10em;
		width: 8em;
	}

	.naam {
		margin-top: -1em;
		margin-left: 10px;
		font-size: 180px;
	}

	/*MEDIA QUERIES*/

	/*desktop*/

	@media only screen and (min-width: 560px) {
	.welcome {
		font-size: 110px;
		width: 400px;
		}
	}

	.cards {
		padding: 13rem;
		width: 30vw;
		height: 20vw;
		font-size: 60px;
		display: grid;

		grid-template-columns: repeat(4, 1fr);

		grid-template-rows: repeat(6, 1fr);

		grid-column-gap: 0px;

		grid-row-gap: 0px;
		margin-left: -2.8em;
	}
	.cards0 {
		margin-top: -3em;
		margin-right: 3em;
	}

	.cards1 {
		margin-top: -10em;
		margin-right: 3em;
	}

	.cards2 {
		margin-top: -7em;
	}


	.profile-picture {
		margin-left: 2.5em;
		width: 250px;
		margin-top: 0.5em;
	}

	h1.naam {
		margin-top: -3.5em;
		margin-left: 10px;
		font-size: 50px;
	}

	h2 {
		font-size: 12px;
	}

	.card-item {
		margin-bottom: 3em;
		
	}

	.inner-card {
		width: 400px;
		height: 600px;
	}

	p {
		font-size: 24px;
	}


</style>
