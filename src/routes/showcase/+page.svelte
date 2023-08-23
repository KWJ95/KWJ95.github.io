<script lang="ts">
	import Card from './Card.svelte';
	import Carousels from './Carousels.svelte';
	import MasonryGallery from './MasonryGallery.svelte';
	import { time, elapsed } from './stores';
	// import { Table, tableMapperValues } from '@skeletonlabs/skeleton';
	// import type { TableSource } from '@skeletonlabs/skeleton';

	const timeZones = ['GMT', 'Europe/London', 'Asia/Tokyo', 'Asia/Singapore'];
	const formatter = (tmz = 'GMT') =>
		new Intl.DateTimeFormat('en', {
			hour12: true,
			hour: 'numeric',
			minute: '2-digit',
			second: '2-digit',
			timeZone: tmz
		});

	// const timeZonesTable = [
	// 	{ country: 'GMT', t: formatter().format($time) },
	// 	{ country: 'Europe/London', t: formatter('Europe/London').format($time) },
	// 	{ country: 'Asia/Tokyo', t: formatter('Asia/Tokyo').format($time) },
	// 	{ country: 'Asia/Singapore', t: formatter('Asia/Singapore').format($time) }
	// ];

	// const tableTimeZone: TableSource = {
	// 	head: ['Current Time', 'Country/Timezone'],
	// 	body: tableMapperValues(timeZonesTable, ['t', 'country'])
	// };
</script>

<svelte:head>
  <title>Showcase</title>
  <meta name="showcase page" content="Page owner's frontend design and photography gallery." />
</svelte:head>

<!-- <h1>The time is {formatter.format($time)}</h1> -->
<div class="container mx-auto mt-8">
	<div class="table-container w-[50%]">
		<table class="table table-hover border-solid my-3">
			<!-- <caption class="caption-top">Pure tailwind table</caption> -->
			<thead class="table-head border rounded bg-slate-300 dark:bg-slate-800">
				<tr>
					<th>
						<!-- class="border dark:border-slate-400 font-medium p-4 pl-8 pt-3 pb-3 text-slate-500 dark:text-slate-200 text-left" -->
						Current Time</th
					>
					<th>
						<!-- class="border dark:border-slate-400 font-medium p-4 pr-8 pt-3 pb-3 text-slate-500 dark:text-slate-200 text-left" -->
						Country/Timezone</th
					>
				</tr>
			</thead>
			<!-- <tbody class="bg-white dark:bg-slate-600"> -->
			<tbody>
				{#each timeZones as timeZone}
					<tr>
						<td>
							<!-- class="border border-slate-200 dark:border-slate-400 p-4 pl-8 text-slate-500 dark:text-slate-200" -->
							{formatter(timeZone).format($time)}</td
						>
						<td>
							<!-- class="border border-slate-200 dark:border-slate-400 p-4 pr-8 text-slate-500 dark:text-slate-200" -->
							{timeZone}</td
						>
					</tr>
				{/each}
			</tbody>
		</table>
	</div>

	<!-- <Table source={tableTimeZone} class="w-[50%] justify-center" /> -->
	<p>
		This page has been open for
		{$elapsed}
		{$elapsed === 1 ? 'second' : 'seconds'}
	</p>
	<hr class="my-5" />
	<h1 class="h1 mb-5">Demo for masonry gallery</h1>
	<MasonryGallery />
	<hr class="my-5" />
	<h1 class="h1 mb-5">Demo for carousel</h1>
	<Carousels />
	<hr class="my-5" />
	<Card />
</div>
