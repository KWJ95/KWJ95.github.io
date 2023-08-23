<script>
	import { Avatar } from '@skeletonlabs/skeleton';

	export let data;

	const startingDate = new Date('2022-06-01');
	const currentDate = new Date();
	const timeDiff = currentDate - startingDate;
	const yearElapsed = timeDiff / (1000 * 60 * 60 * 24 * 365.25);
	const expYear = yearElapsed.toFixed(1);
</script>
<head>
    <meta 
        name="landing page"
        content="Introduction to page owner and affiliate links."/>
</head>

<div class="container mx-auto mt-8">
	<div class="flex flex-col-reverse md:flex-row justify-center">
		<h1 class="h1 flex items-center">
			Hi, my name is&nbsp;
			<span
				class="bg-gradient-to-br from-blue-500 to-cyan-300 bg-clip-text text-transparent box-decoration-clone"
				>Jack Koo</span
			>
		</h1>
		<span class="divider-vertical invisible md:h-32 md:visible" />
		<div class="grow md:grow-0 grid justify-center">
			<Avatar src="#" initials="KWJ" width="w-32" rounded="rounded-full" />
		</div>
	</div>
	<br />
	<!-- <h1 class="h1">Hello {data.visited ? 'friend' : 'stranger'}!</h1> -->
	<h1 class="h1">I'm a software engineer specialized in web development.</h1>
	<br />
	<h4 class="h4">
		{expYear} years of working experience in software industry, building APIs and implementing new features
		for front and back end. Learning modern tech stacks to keep up with the industry standards and designing
		this porfolio to showcase my other talents and skills.
	</h4>

	<a
		href="/docs/my_resume(CV).docx"
		download="Koo_Wei_Jie_CV"
		type="button"
		class="btn btn-lg variant-filled my-5"
	>
		Get my CV
	</a>

	<div class="logo-cloud grid-cols-1 lg:!grid-cols-3 gap-0.5 my-3">
		{#each data.externalLinks as links}
			<a class="logo-item variant-soft" href={links.src} target="_blank" rel="noreferrer">
				<i class="{links.icon} text-2xl" />
				<span>{links.text}</span>
			</a>
		{/each}
	</div>

	<p>
		Build using sveltekit with static site generation in addition with other libraries. Visit <a
			class="anchor"
			href="https://kit.svelte.dev">kit.svelte.dev</a
		> to read the documentation
	</p>
</div>
