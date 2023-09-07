<script lang="ts">
	let elemCarousel: HTMLDivElement;
	const unsplashIds = [
		'vjUokUWbFOs',
		'1aJuPtQJX_I',
		'Jp6O3FFRdEI',
		'I3C_eojFVQY',
		's0fXOuyTH1M',
		'z_X0PxmBuIQ'
	];

	const galleryIds = [
		'DSCF0121.JPG',
		'DSCF0126.JPG',
		'DSCF0127.JPG',
		'DSCF0128.JPG',
		'DSCF0130.JPG',
		'DSCF0132.JPG',
		'DSCF0134.JPG',
	];

	const colNum = galleryIds.length < 12 ? galleryIds.length : 12;

	function carouselLeft(): void {
		const x =
			elemCarousel.scrollLeft === 0
				? elemCarousel.clientWidth * elemCarousel.childElementCount // loop
				: elemCarousel.scrollLeft - elemCarousel.clientWidth; // step left
		elemCarousel.scroll(x, 0);
	}

	function carouselRight(): void {
		const x =
			elemCarousel.scrollLeft === elemCarousel.scrollWidth - elemCarousel.clientWidth
				? 0 // loop
				: elemCarousel.scrollLeft + elemCarousel.clientWidth; // step right
		elemCarousel.scroll(x, 0);
	}

	function carouselThumbnail(index: number) {
		elemCarousel.scroll(elemCarousel.clientWidth * index, 0);
	}
</script>

<div class="card p-4 grid grid-cols-[auto_1fr_auto] gap-4 items-center shadow-lg">
	<!-- Button: Left -->
	<button type="button" class="btn-icon variant-filled shadow-md" on:click={carouselLeft} aria-label="left button">
		<i class="fa-solid fa-arrow-left" aria-hidden="true"/>
	</button>
	<!-- Full Images -->
	<div bind:this={elemCarousel} class="snap-x snap-mandatory scroll-smooth flex overflow-x-auto">
		{#each galleryIds as gId}
			<img
				class="snap-center w-[1024px] rounded-container-token"
				src="/pictures/{gId}"
				alt={gId}
				loading="lazy"
				height="768"
				width="1024"
			/>
		{/each}
	</div>
	<!-- Button: Right -->
	<button type="button" class="btn-icon variant-filled shadow-md" on:click={carouselRight} aria-label="right button">
		<i class="fa-solid fa-arrow-right" aria-hidden="true"/>
	</button>
</div>

<!-- <div class="card my-3 p-4 grid grid-cols-7 gap-4 shadow-lg"> -->
<div class="card my-3 p-4 grid grid-cols-{colNum} gap-4 shadow-lg">
	{#each galleryIds as gId, i}
		<button type="button" on:click={() => carouselThumbnail(i)}>
			<img
				class="rounded-container-token"
				src="/pictures/{gId}"
				alt={gId}
				loading="lazy"
				height="256"
				width="256"
			/>
		</button>
	{/each}
</div>

<!-- <div class="card p-4 grid grid-cols-[auto_1fr_auto] gap-4 items-center shadow-lg">
	<--!-- Button: Left ->
	<button type="button" class="btn-icon variant-filled shadow-md" on:click={carouselLeft} aria-label="left button">
		<i class="fa-solid fa-arrow-left" aria-hidden="true"/>
	</button>
	<--!-- Full Images ->
	<div bind:this={elemCarousel} class="snap-x snap-mandatory scroll-smooth flex overflow-x-auto">
		{#each unsplashIds as unsplashId}
			<img
				class="snap-center w-[1024px] rounded-container-token"
				src="https://source.unsplash.com/{unsplashId}/1024x768"
				alt={unsplashId}
				loading="lazy"
			/>
		{/each}
	</div>
	<--!-- Button: Right ->
	<button type="button" class="btn-icon variant-filled shadow-md" on:click={carouselRight} aria-label="right button">
		<i class="fa-solid fa-arrow-right" aria-hidden="true"/>
	</button>
</div> -->

<!-- <div class="card my-3 p-4 grid grid-cols-6 gap-4 shadow-lg">
	{#each unsplashIds as unsplashId, i}
		<button type="button" on:click={() => carouselThumbnail(i)}>
			<img
				class="rounded-container-token"
				src="https://source.unsplash.com/{unsplashId}/256x256"
				alt={unsplashId}
				loading="lazy"
			/>
		</button>
	{/each}
</div> -->
