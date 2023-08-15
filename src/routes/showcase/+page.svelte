<script lang="ts">
	import Card from './Card.svelte';
	import MasonryGallery from './MasonryGallery.svelte';
	import { time, elapsed } from './stores';
	import { Table, tableMapperValues } from '@skeletonlabs/skeleton';
	import type { TableSource } from '@skeletonlabs/skeleton';

	const timeZones = ['GMT', 'Europe/London', 'Asia/Tokyo', 'Asia/Singapore'];
	const formatter = (tmz = 'GMT') =>
		new Intl.DateTimeFormat('en', {
			hour12: true,
			hour: 'numeric',
			minute: '2-digit',
			second: '2-digit',
			timeZone: tmz
		});

	const timeZonesTable = [
		{ country: 'GMT', t: formatter().format($time) },
		{ country: 'Europe/London', t: formatter('Europe/London').format($time) },
		{ country: 'Asia/Tokyo', t: formatter('Asia/Tokyo').format($time) },
		{ country: 'Asia/Singapore', t: formatter('Asia/Singapore').format($time) }
	];

	const tableTimeZone: TableSource = {
		head: ['Current Time', 'Country/Timezone'],
		body: tableMapperValues(timeZonesTable, ['t', 'country'])
	};

	console.table(timeZones);
</script>

<!-- <h1>The time is {formatter.format($time)}</h1> -->
<table class="table-auto">
	<thead>
		<tr>
			<th>Current Time</th>
			<th>Country/Timezone</th>
		</tr>
	</thead>
	<tbody>
		{#each timeZones as timeZone}
			<tr>
				<td>{formatter(timeZone).format($time)}</td>
				<td>{timeZone}</td>
			</tr>
		{/each}
	</tbody>
</table>

<Table source={tableTimeZone} class="w-[50%] justify-center" />
<p>
	This page has been open for
	{$elapsed}
	{$elapsed === 1 ? 'second' : 'seconds'}
</p>

<Card />

<hr class="my-5" />
<h1 class="h1">Demo for masonry gallery</h1>
<br />
<MasonryGallery />
