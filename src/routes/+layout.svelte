<script>
	import '../app.postcss';
	import '@skeletonlabs/skeleton/styles/skeleton.css';
	import '@skeletonlabs/skeleton/themes/theme-skeleton.css';
	import { base } from '$app/paths';
	import { LightSwitch, TabGroup, TabAnchor, Tab } from '@skeletonlabs/skeleton';
	import { page } from '$app/stores';
</script>

<TabGroup
	justify="justify-center"
	flex="flex-1 lg:flex-none"
>
	<TabAnchor href="{base}/" selected={$page.url.pathname == '/'}>Home</TabAnchor>
	<TabAnchor href="{base}/about" selected={$page.url.pathname == '/about/'}>About</TabAnchor>
	<TabAnchor href="{base}/showcase" selected={$page.url.pathname == '/showcase/'}>Showcase</TabAnchor
	>
	<Tab group="" name="lightswitch" value="null" active="not-active">
		<LightSwitch />
	</Tab>
</TabGroup>
<body>
	<slot />
</body>
