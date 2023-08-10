<script>
	import Card from './Card.svelte';
	import { time, elapsed } from './stores';

	const timeZones = ['GMT', 'Europe/London', 'Asia/Tokyo', 'Asia/Singapore'];
	const formatter = (tmz = 'GMT') =>
		new Intl.DateTimeFormat('en', {
			hour12: true,
			hour: 'numeric',
			minute: '2-digit',
			second: '2-digit',
			timeZone: tmz
		});
</script>

<!-- <h1>The time is {formatter.format($time)}</h1> -->

{#each timeZones as timeZone}
	<h3>The time is {formatter(timeZone).format($time)} @ {timeZone}</h3>
{/each}

<p>
	This page has been open for
	{$elapsed}
	{$elapsed === 1 ? 'second' : 'seconds'}
</p>

<Card />
