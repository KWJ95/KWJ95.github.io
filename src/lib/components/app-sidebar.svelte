<script lang="ts">
	import * as Sidebar from '$lib/components/ui/sidebar/index.js';

	const items = [
		{
			title: 'Introduction',
			url: '/',
			icon: null
		},
		{
			title: 'About',
			url: '/about',
			icon: null
		},
		{
			title: 'Showcase',
			url: '/showcase',
			icon: null
		}
	];
</script>

<Sidebar.Root>
	<Sidebar.Header />
	<Sidebar.Content>
		<Sidebar.Group />
		<Sidebar.GroupLabel><span class="font-bold text-indigo-600">KWJ 95</span></Sidebar.GroupLabel>
		<Sidebar.GroupContent>
			<Sidebar.Menu>
				{#each items as item (item.title)}
					<Sidebar.MenuItem>
						<Sidebar.MenuButton>
							{#snippet child({ props })}
								<a href={item.url} {...props}>
									<!-- <item?.icon /> -->
                   {item.title}
								</a>
							{/snippet}
						</Sidebar.MenuButton>
					</Sidebar.MenuItem>
				{/each}
			</Sidebar.Menu>
		</Sidebar.GroupContent>
		<Sidebar.Group />
	</Sidebar.Content>
	<Sidebar.Footer />
</Sidebar.Root>
