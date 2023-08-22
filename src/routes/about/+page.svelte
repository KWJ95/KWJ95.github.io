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

<div class="container mx-auto mt-8">
	<h1
		class="h1 bg-gradient-to-br from-blue-500 to-cyan-300 bg-clip-text text-transparent box-decoration-clone"
		in:typewriter|local
	>
		About me
	</h1>
	<p class="my-6">
		A brief introduction about myself regarding education level, interests and skill sets.
	</p>

	<div class="card w-fit" in:fade|local>
		<header class="card-header">Below are my technical skills</header>
		<hr />
		<p class="list p-4">
			{#each data.skills as { talent, remark }}
				<!-- svelte-ignore a11y-no-static-element-interactions -->
				<span class="chip variant-filled-primary mr-4 tooltip">
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
	<div class="card w-fit" in:fade|local={{ delay: 250 }}>
		<header class="card-header">Here are my education level history</header>
		<hr />
		<ul class="list p-4">
			{#each data.educations as { school, year }}
				<li>{school} ({year})</li>
			{/each}
		</ul>
	</div>
	<hr class="mx-5 my-8" />
	<div class="card w-fit" in:fade|local={{ delay: 300 }}>
		<header class="card-header">Here are the lists of my hobbies and interests</header>
		<hr />
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
	<hr class="mx-5 my-8" />
</div>
