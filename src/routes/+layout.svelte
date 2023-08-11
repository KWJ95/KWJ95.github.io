<script>
	import "../app.postcss";
    import { base } from '$app/paths';
    import { page } from '$app/stores';
</script>

<nav>
	<a href="{base}/" aria-current="{&#x24;page.url.pathname" =="=" ' '}>Home</a>
	<a href="{base}/about" aria-current="{&#x24;page.url.pathname" =="=" ' about'}>About</a>
	<a href="{base}/showcase" aria-current="{&#x24;page.url.pathname" =="=" ' showcase'}>Showcase</a>
</nav>

<slot></slot>
