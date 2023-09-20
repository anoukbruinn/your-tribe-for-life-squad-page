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
</body>

<style>
	body {
		font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
		background-color: black;
	}

	.welcome {
		color: white;
		font-size: 150px;
		margin-left: 2em;
		margin-right: -7em;
	}

	.cards {
		padding: 13rem;
		width: 300vw;
		height: 20vw;
		font-size: 60px;
		display: grid;
		grid-template-columns: repeat(4, 1fr);
		grid-template-rows: repeat(4, 1fr);
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
			margin-left: 2em;
			margin-right: -7em;
		}

		.cards {
			width: 55vw;
			height: 65vw;
			font-size: 13px;
			display: grid;
			grid-template-columns: repeat(4, 1fr);
			grid-template-rows: repeat(4, 1fr);
			grid-column-gap: 0px;
			grid-row-gap: 0px;
		}

		.profile-picture {
			margin-left: 10em;
			width: 12em;
		}

		.naam {
			margin-top: -1em;
			margin-left: 10px;
			font-size: 40px;
		}

		.card-item {
			margin-bottom: 3em;
			margin-right: 3em;
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
	}
</style>
