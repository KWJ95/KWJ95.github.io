<script>
	import '@skeletonlabs/skeleton/styles/skeleton.css';
	import { LightSwitch } from '@skeletonlabs/skeleton';
	import '@skeletonlabs/skeleton/themes/theme-skeleton.css';
	import '../app.postcss';
	import { base } from '$app/paths';
	import { page } from '$app/stores';
</script>

<nav
	class="nav absolute flex flex-col shadow-md w-[50%] h-full px-4 right-0 md:static md:h-auto md:w-auto md:flex-row md:shadow-none duration-500"
>
	<button class="close-nav relative top-0 right-0 text-right text-3xl md:hidden">
		<i class="fa-solid fa-xmark" />
	</button>
	<a
		href="{base}/"
		aria-current={$page.url.pathname == '/'}
		class="nav-link text-2xl mb-2 md:mr-4 hover:text-blue-400">Home</a
	>
	<a
		href="{base}/about"
		aria-current={$page.url.pathname == '/about'}
		class="nav-link text-2xl mb-2 md:mr-4 hover:text-blue-400">About</a
	>
	<a
		href="{base}/showcase"
		aria-current={$page.url.pathname == '/showcase'}
		class="nav-link text-2xl mb-2 md:mr-4 hover:text-blue-400">Showcase</a
	>
	<span class="inline-block align-basline">
		<LightSwitch/>
	</span>
</nav>
<body>
	<slot />
</body>
