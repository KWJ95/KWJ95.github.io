<script lang="ts">
	import { fade } from 'svelte/transition';
	import { modalStore, type ModalSettings } from '@skeletonlabs/skeleton';
	const images = [
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

	const galleryImages = [
		['DSCF0018', 'DSCF0022', 'DSCF0309'],
		['DSCF0094', 'DSCF0103', 'DSCF0108'],
		['DSCF0348', 'DSCF0024', 'DSCF0067'],
		['DSCF0483', 'DSCF0485', 'DSCF0503'],
		['DSCF0290', 'DSCF0033', 'DSCF0321']
	]

	const colNum = galleryImages.length < 13 ? galleryImages.length : 12;

	function getRandomNumber() {
		return Math.floor(Math.random() * (1000 - 200) + 200);
	}

	function modalImage(imgSrc: string): void {
		const fullURL = "https://images.unsplash.com/photo-" + imgSrc + "&fit=max";
		const resizeURL = "https://images.unsplash.com/photo-" + imgSrc + "&w=1097&auto=format&fit=max";
		const src = "/pictures/" + imgSrc + ".JPG";
		const resizeSrc = "/pictures/webp/" + imgSrc + ".webp";
		const modal: ModalSettings = {
			type: 'confirm',
			image: resizeSrc,	//todo: change to resizeSrc when conversion to webp is done
			modalClasses: 'w-modal',
			buttonTextConfirm: 'Open full size image',
			response: (r:boolean) => {r ? window.open(src, '_blank')?.focus() :console.log('modal close')}
		};
		modalStore.trigger(modal);
	}
</script>

<!-- <section class="grid grid-cols-2 md:grid-cols-5 gap-2"> -->
<section class="grid grid-cols-2 md:grid-cols-{colNum} gap-2">
	{#each galleryImages as imageRows}
		<div class="grid gap-4">
			{#each imageRows as i}
				<div>
					<!-- svelte-ignore a11y-click-events-have-key-events -->
					<!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
					<!-- src="/pictures/webp/{i}.webp" -->
					<img
						class="h-auto max-w-full rounded-lg shadow-md"
						src="/pictures/small/{i}.jpg"
						alt=""
						in:fade|global={{ delay: getRandomNumber(), duration: getRandomNumber() }}
						loading="lazy"
						on:click={() => modalImage(i)}
					/>
				</div>
			{/each}
		</div>
	{/each}
</section>

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
</section> -->