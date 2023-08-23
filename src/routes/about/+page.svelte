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

<div class="container mx-auto mt-8">
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
			<h4 class="h4">Technical skills</h4>
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
			<h4 class="h4">Education</h4>
		</header>
		<hr class="bg-inherit"/>
		<dl class="list-dl p-4">
			{#each data.educations as { school, year, programme, icon }}
				<div>
					<img class="object-scale-down w-0 invisible md:w-12 md:visible" src="{icon}" alt="{school}"/>
					<span class="flex-auto">
						<dt class="font-bold">{school}</dt>
						<dd class="font-normal italic">{programme}</dd>
						<dd class="text-slate-500 dark:text-slate-200">{year}</dd>
					</span>
				</div>
				<!-- <li>{school} ({year})</li> -->
			{/each}
		</dl>
	</div>
	<hr class="mx-5 my-8" />
	<div class="card variant-glass-primary shadow-lg w-fit" in:fade|local={{ delay: 300 }}>
		<header class="card-header">
			<h4 class="h4">Hobbies and Interests</h4>
		</header>
		<hr class="bg-inherit"/>
		<dl class="list-dl p-4">
			{#each data.hobbies as { act, desc, icon }}
				<div>
					<span class="flex-auto">
						<dt>{act} {@html icon}</dt>
						<dd class="text-slate-500 dark:text-slate-200">{desc}</dd>
					</span>
				</div>
			{/each}
		</dl>
	</div>
	<hr class="mx-5 my-8" />
</div>
