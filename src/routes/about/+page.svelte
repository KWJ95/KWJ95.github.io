<script>
	import { fade } from 'svelte/transition';

	export let data;

	// @ts-ignore
	function typewriter(node, { speed = 1 }) {
		const valid = node.childNodes.length === 1 && node.childNodes[0].nodeType === Node.TEXT_NODE;

		if (!valid) {
			throw new Error(`This transition only works on elements with a single text node child`);
		}

		const text = node.textContent;
		const duration = text.length / (speed * 0.01);

		return {
			duration,
			// @ts-ignore
			tick: (t) => {
				const i = Math.trunc(text.length * t);
				node.textContent = text.slice(0, i);
			}
		};
	}
</script>

<h1 class="h1" in:typewriter|local>About me</h1>
<p class="my-6">Hello there, my name is Koo Wei Jie</p>

<div class="card w-fit" in:fade|local>
	<header class="card-header">Below are my technical skills and talents</header>
    <hr/>
	<ul class="list p-4">
		{#each data.skills as { talent, exp }}
			<li>{talent} for {exp} {exp > '1' ? 'months' : 'month'}</li>
		{/each}
	</ul>
</div>
<hr class="mx-5 my-8"/>
<div class="card w-fit" in:fade|local={{ delay: 250}}>
	<header class="card-header">Here are my education level history</header>
	<hr/>
    <ul class="list p-4">
		{#each data.educations as { school, year }}
			<li>{school} ({year})</li>
		{/each}
	</ul>
</div>
<hr class="mx-5 my-8"/>
<div class="card w-fit" in:fade|local={{ delay: 300}}>
	<header class="card-header">Here are lists of hobbies</header>
	<hr/>
	<dl class="list-dl p-4">
		{#each data.hobbies as { act, desc }}
			<div>
				<span class="flex-auto">
					<dt>{act}</dt>
					<dd class="text-slate-500">{desc}</dd>
				</span>
			</div>
		{/each}
	</dl>
</div>
<hr class="mx-5 my-8"/>