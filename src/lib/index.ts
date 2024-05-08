// place files you want to import through the `$lib` alias in this folder.
export const lists = [
	{
		school: 'HELP University',
		year: '2019-2022',
		programme: 'Bachelor of Information Technology',
		remark: 'Degree Certificate',
		icon: '/icons/helpUNI.jpg'
	},
	{
		school: 'Tunku Abdul Rahman Univerisity of Management and Technology',
		year: '2017-2018',
		programme: 'Bachelor of Electrical and Electronics Engineering',
		remark: 'Unfinished',
		icon: '/icons/TARUMT.jpg'
	},
	{
		school: 'Hochschule Landshut',
		year: '2015-2017',
		programme: 'Bachelor of Electrical, Electronics and Communications Engineering',
		remark: 'Unfinished',
		icon: '/icons/landshut.jpg'
	}
];

/* const images = [
	[
		'1617296538902-887900d9b592?ixid=M3w0Njc5ODF8MHwxfGFsbHx8fHx8fHx8fDE2ODc5NzExMDB8&ixlib=rb-4.0.3',
		'1597077962467-be16edcc6a43?ixid=M3w0Njc5ODF8MHwxfGFsbHx8fHx8fHx8fDE2ODc5NzY2MzZ8&ixlib=rb-4.0.3',
		'1591775161903-497839a443c1?ixid=M3w0Njc5ODF8MHwxfGFsbHx8fHx8fHx8fDE2ODc5NzY3MzR8&ixlib=rb-4.0.3'
	],
	[
		'1617296539691-67feaadf389e?ixid=M3w0Njc5ODF8MHwxfGFsbHx8fHx8fHx8fDE2ODc5NzY3NjF8&ixlib=rb-4.0.3',
		'1542835435-4fa357baa00b?ixid=M3w0Njc5ODF8MHwxfGFsbHx8fHx8fHx8fDE2ODc5NzY3NzN8&ixlib=rb-4.0.3',
		'1553184570-557b84a3a308?ixid=M3w0Njc5ODF8MHwxfGFsbHx8fHx8fHx8fDE2ODc5NzY2NTF8&ixlib=rb-4.0.3'
	],
	[
		'1603855873822-0931a843ee3a?ixid=M3w0Njc5ODF8MHwxfGFsbHx8fHx8fHx8fDE2ODc5NzY3ODJ8&ixlib=rb-4.0.3',
		'1509130446053-899ae7358ce6?ixid=M3w0Njc5ODF8MHwxfGFsbHx8fHx8fHx8fDE2ODc5NzY2NjF8&ixlib=rb-4.0.3',
		'1508931133503-b1944a4ecdd5?ixid=M3w0Njc5ODF8MHwxfGFsbHx8fHx8fHx8fDE2ODc5NzY3OTV8&ixlib=rb-4.0.3'
	],
	[
		'1633053663400-655b31fb88ac?ixid=M3w0Njc5ODF8MHwxfGFsbHx8fHx8fHx8fDE2ODc5NzY4MDV8&ixlib=rb-4.0.3',
		'1578170222009-c7893aa20afd?ixid=M3w0Njc5ODF8MHwxfGFsbHx8fHx8fHx8fDE2ODc5NzY4MTZ8&ixlib=rb-4.0.3',
		'1610220941077-1ec123e7c043?ixid=M3w0Njc5ODF8MHwxfGFsbHx8fHx8fHx8fDE2ODc5NzY4NjV8&ixlib=rb-4.0.3'
	]
];

const fullURL = 'https://images.unsplash.com/photo-' + imgSrc + '&fit=max';
const resizeURL = 'https://images.unsplash.com/photo-' + imgSrc + '&w=1097&auto=format&fit=max';

<!-- <section class="grid grid-cols-2 md:grid-cols-4 gap-2">
	{#each images as imageRows}
		<div class="grid gap-4">
			{#each imageRows as i}
				<div>
					<--!-- svelte-ignore a11y-click-events-have-key-events ->
					<--!-- svelte-ignore a11y-no-noninteractive-element-interactions ->
					<img
						class="h-auto max-w-full rounded-lg shadow-md"
						src="https://images.unsplash.com/photo-{i}&w=300&h=300&auto=format&fit=max"
						alt=""
						in:fade|global={{ delay: getRandomNumber(), duration: getRandomNumber() }}
						loading="lazy"
						on:click={() => modalImage(i)}
					/>
				</div>
			{/each}
		</div>
	{/each}
</section> --> */