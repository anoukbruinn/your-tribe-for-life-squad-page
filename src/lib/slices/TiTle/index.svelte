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
		/* margin-left: 2em;
		margin-right: -7em; */
	}

	.cards {
		padding: 13rem;
		width: 500px;
		height: 20vw;
		font-size: 60px;

		display: grid;
		grid-template-columns: repeat(3);
		grid-template-rows: repeat(3);
		grid-column-gap: 0px;
		grid-row-gap: 0px;
	}

	/* .cards0 {
		grid-area: 2 / 2 / 3 / 3;
	}

	.cards6 {
		grid-area: 3 / 1 / 4 / 2;
	}

	.cards11 {
		grid-area: 4 / 3 / 5 / 4;
	}

	.cards16 {
		grid-area: 3 / 4 / 4 / 5;
	} */

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
			margin-left: 2em;
			margin-right: -7em;
		}

		/* .cards {
			width: 55vw;
			height: 65vw;
			font-size: 13px;
			/* display: grid;
			grid-template-columns: repeat(4, 1fr);
			grid-template-rows: repeat(4, 1fr);
			grid-column-gap: 0px;
			grid-row-gap: 0px; */
	}

	.cards {
		padding: 13rem;
		width: 30vw;
		height: 20vw;
		font-size: 60px;

		/* display: grid;
		grid-template-columns: repeat(4, 1fr);
		grid-template-rows: repeat(4, 1fr);
		grid-column-gap: 0px;
		grid-row-gap: 0px; */

		/* .cards0 { grid-area: 2 / 2 / 3 / 3; }

		.cards6 { grid-area: 3 / 1 / 4 / 2; }

		.cards11 { grid-area: 4 / 3 / 5 / 4; }

		.cards16 { grid-area: 3 / 4 / 4 / 5;} */

		display: grid;

		grid-template-columns: repeat(4, 1fr);

		grid-template-rows: repeat(6, 1fr);

		grid-column-gap: 0px;

		grid-row-gap: 0px;
	}
	.cards0 {
		margin-top: 90px;
	}

	.cards1 {
		margin-top: -10px;
	}

	.cards2 {
		margin-top: 250px;
	}
	/* .cards0 {
		grid-area: 2 / 1 / 7 / 2;
	}

	.cards6 {
		grid-area: 1 / 2 / 7 / 3;
	}

	.cards11 {
		grid-area: 2 / 3 / 7 / 2;
	}

	.cards16 {
		grid-area: 1 / 4 / 7 / 3;
	} */

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
		margin-right: 3em;
	}

	.inner-card {
		width: 400px;
		height: 600px;
	}

	p {
		font-size: 24px;
	}

	/* @media all and (min-width: 700px) {
			.cards {
				--rows: 3;
			}
		}
		@media all and (min-width: 1000px) {
			.cards {
				--rows: 4;
			}
		}
		@media all and (min-width: 1200px) {
			.cards {
				--rows: 4;
			}
		} */
</style>
