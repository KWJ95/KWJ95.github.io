<script lang="ts">
	import { fade } from 'svelte/transition';

	export let data;

	function typewriter(node: any, { speed = 1 }: undefined) {
		const valid = node.childNodes.length === 1 && node.childNodes[0].nodeType === Node.TEXT_NODE;

		if (!valid) {
			throw new Error(`This transition only works on elements with a single text node child`);
		}

		const text = node.textContent;
		const duration = text.length / (speed * 0.01);

		return {
			duration,
			tick: (t: number) => {
				const i = Math.trunc(text.length * t);
				node.textContent = text.slice(0, i);
			}
		};
	}
</script>

<svelte:head>
  <title>About me</title>
  <meta name="about me page" content="Page owner general description for talents, skills, education level and interests." />
</svelte:head>

<div class="container mt-8 overflow-x-auto mx-auto">
	<h1
		class="h1 bg-gradient-to-br from-pink-500 to-yellow-400 dark:from-blue-500 dark:to-cyan-300 bg-clip-text text-transparent box-decoration-clone"
		in:typewriter|local
	>
		About me
	</h1>
	<p class="my-6">
		A brief introduction about myself regarding education level, interests and skill sets.
	</p>

	<div class="card variant-soft-error shadow-lg w-fit" in:fade|local>
		<header class="card-header">
			<h4 class="text-xl">Technical skills</h4>
		</header>
		<hr class="bg-inherit"/>
		<p class="list p-4">
			{#each data.skills as { talent, remark, variant }}
				<!-- svelte-ignore a11y-no-static-element-interactions -->
				<span class="chip {variant} mr-4 tooltip">
					{talent}
					<span class="tooltiptext">{remark}</span>
				</span>
			{/each}
		</p>
		<!-- <ul class="list p-4">
		{#each data.skills as { talent, exp }}
			<li>{talent} for {exp} {exp > '1' ? 'months' : 'month'}</li>
		{/each}
	</ul> -->
	</div>
	<hr class="mx-5 my-8" />
	<div class="card variant-glass-surface shadow-lg w-fit" in:fade|local={{ delay: 250 }}>
		<header class="card-header">
			<h4 class="text-xl">Education</h4>
		</header>
		<hr class="bg-inherit"/>
		<div class="flex flex-col p-4 gap-5">
			{#each data.educations as { school, year, programme, icon }}
				<div class="flex md:gap-4">
					<img class="object-scale-down w-0 invisible md:w-12 md:visible" src="{icon}" alt="{school}"/>
					<span class="flex-auto text-wrap">
						<dt class="font-bold">{school}</dt>
						<dd class="font-normal italic">{programme}</dd>
						<dd class="text-slate-500 dark:text-slate-200">{year}</dd>
					</span>
				</div>
				<!-- <li>{school} ({year})</li> -->
			{/each}
		</div>
	</div>
	<hr class="mx-5 my-8" />
	<div class="card variant-glass-primary shadow-lg w-fit" in:fade|local={{ delay: 300 }}>
		<header class="card-header">
			<h4 class="text-xl">Hobbies and Interests</h4>
		</header>
		<hr class="bg-inherit"/>
		<div class="grid p-4 gap-5">
			{#each data.hobbies as { act, desc, icon }}
				<div class="flex md:gap-4">
					<span class="flex-auto text-wrap">
						<dt>{act} {@html icon}</dt>
						<p class="text-slate-500 dark:text-slate-200">{desc}</p>
					</span>
				</div>
			{/each}
		</div>
	</div>
	<hr class="mx-5 my-8" />
</div>
