<script lang="ts">
	import { fade } from 'svelte/transition';
	import { modalStore, type ModalSettings } from '@skeletonlabs/skeleton';

	const galleryImages = [
		['DSCF0018', 'DSCF0022', 'DSCF0309'],
		['DSCF0094', 'DSCF0103', 'DSCF0108'],
		['DSCF0348', 'DSCF0024', 'DSCF0067'],
		['DSCF0483', 'DSCF0485', 'DSCF0503'],
		['DSCF0290', 'DSCF0033', 'DSCF0321']
	];

	const colNum = galleryImages.length < 13 ? galleryImages.length : 12;

	function getRandomNumber() {
		return Math.floor(Math.random() * (1000 - 200) + 200);
	}

	function modalImage(imgSrc: string): void {
		const src = '/pictures/' + imgSrc + '.JPG';
		const resizeSrc = '/pictures/webp/' + imgSrc + '.webp';
		const modal: ModalSettings = {
			type: 'confirm',
			image: resizeSrc, //todo: change to resizeSrc when conversion to webp is done
			modalClasses: 'w-modal',
			buttonTextConfirm: 'Open full size image',
			response: (r: boolean) => {
				r ? window.open(src, '_blank')?.focus() : console.log('modal close');
			}
		};
		modalStore.trigger(modal);
	}
</script>

<section class="grid grid-cols-2 md:grid-cols-{colNum} gap-2">
	{#each galleryImages as imageRows}
		<div class="grid gap-4">
			{#each imageRows as i}
				<div>
					<button on:click={() => modalImage(i)}>
						<img
							class="h-auto max-w-full rounded-lg shadow-md"
							src="/pictures/small/{i}.jpg"
							alt=""
							in:fade|global={{ delay: getRandomNumber(), duration: getRandomNumber() }}
							loading="lazy"
						/>
					</button>
				</div>
			{/each}
		</div>
	{/each}
</section>
