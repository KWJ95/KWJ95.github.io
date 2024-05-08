<script lang="ts">
	import { fade } from 'svelte/transition';
	import { modalStore, type ModalSettings } from '@skeletonlabs/skeleton';
	import type { EnhanceStructureType } from '$lib/interface';

	const enhancedPictures:Array<EnhanceStructureType> = Object.values(import.meta.glob('/src/images/*.{jpg,webp}', {
		eager: true,
		query: {
			enhanced: true
		}
	}));

	const pictureList:Array<EnhanceStructureType[]> = enhancedPictures.reduce((acc, _, i, arr) => {
		if (i % 3 === 0) {
			acc.push(arr.slice(i, i + 3));
		}
		return acc;
	}, []);

	function getRandomNumber() {
		return Math.floor(Math.random() * (1000 - 200) + 200);
	}

	/* function modalImage(imgSrc: string): void {
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
	} */
</script>

<section class="grid grid-cols-2 md:grid-cols-4 gap-2">
	{#each pictureList as rows}
		<div class="grid gap-4">
			{#each rows as i}
				<div>
					<!-- <button on:click={() => modalImage(i)}> -->
						<enhanced:img
							class="h-auto max-w-full rounded-lg shadow-md"
							src={i.default}
							sizes="min(720px, 100vw)"
							alt=""
							in:fade|global={{ delay: getRandomNumber(), duration: getRandomNumber() }}
							loading="lazy"
						/>
					<!-- </button> -->
				</div>
			{/each}
		</div>
	{/each}
</section>
