<script>
	import { base } from '$app/paths';
	import { page } from '$app/stores';
</script>

<nav>
	<a href="{base}/" aria-current={$page.url.pathname === '/'}>Home</a>
	<a href="{base}/about" aria-current={$page.url.pathname === '/about'}>About</a>
	<a href="{base}/showcase" aria-current={$page.url.pathname === '/showcase'}>Showcase</a>
</nav>

<slot />
