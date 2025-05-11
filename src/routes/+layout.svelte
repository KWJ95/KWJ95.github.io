<script lang="ts">
	import '../app.css';
	import { setLocale } from '$lib/paraglide/runtime';
	import { m } from '$lib/paraglide/messages.js';
	import { page } from '$app/state';

	let { children } = $props();

	// Available languages
	const languages = [
		{ code: 'en', name: 'English' },
		{ code: 'es', name: 'Español' },
		{ code: 'de', name: 'Deutsch' },
		{ code: 'ms', name: 'Bahasa Melayu' },
		{ code: 'zh', name: '中文' },
		{ code: 'fr', name: 'Français' }
	];

	let isMenuOpen = $state(false);
	let isLangMenuOpen = $state(false);

	function toggleMenu() {
		isMenuOpen = !isMenuOpen;
		if (isMenuOpen) isLangMenuOpen = false;
	}

	function toggleLangMenu() {
		isLangMenuOpen = !isLangMenuOpen;
	}

	function changeLanguage(langCode: string) {
		setLocale(langCode);
		isLangMenuOpen = false;
	}
</script>

<div class="flex min-h-screen flex-col bg-gray-50">
	<header class="border-b border-indigo-100 bg-white shadow-sm">
		<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
			<div class="flex h-16 justify-between">
				<div class="flex items-center">
					<a href="/" class="flex flex-shrink-0 items-center">
						<span class="text-xl font-bold text-indigo-600">KWJ95</span>
					</a>

					<!-- Desktop Navigation -->
					<nav class="hidden md:ml-6 md:flex md:space-x-4">
						<a href="/" class="link-nav"> Home </a>
						<a href="/demo/lucia" class="link-nav"> Lucia </a>
						<a href="/demo/paraglide" class="link-nav"> Paraglide </a>
					</nav>
				</div>

				<div class="flex items-center">
					<!-- Language Selector (Desktop) -->
					<div class="relative hidden md:ml-4 md:flex md:items-center">
						<button onclick={toggleLangMenu} class="btn-nav">
							<span>{m.getLanguage?.() || 'Language'}</span>
							<svg
								class="ml-1 h-5 w-5"
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 20 20"
								fill="currentColor"
							>
								<path
									fill-rule="evenodd"
									d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
									clip-rule="evenodd"
								/>
							</svg>
						</button>

						{#if isLangMenuOpen}
							<div
								class="ring-opacity-5 absolute top-10 right-0 z-50 mt-2 w-48 rounded-md bg-white py-1 shadow-lg ring-1 ring-black"
							>
								{#each languages as language}
									<button
										onclick={() => changeLanguage(language.code)}
										class="block w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-indigo-50 hover:text-indigo-600"
									>
										{language.name}
									</button>
								{/each}
							</div>
						{/if}
					</div>

					<!-- Mobile menu button -->
					<div class="flex items-center md:hidden">
						<button
							onclick={toggleMenu}
							class="inline-flex items-center justify-center rounded-md p-2 text-gray-700 hover:bg-indigo-50 hover:text-indigo-600 focus:ring-2 focus:ring-indigo-500 focus:outline-none focus:ring-inset"
						>
							<svg
								class="h-6 w-6"
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
								aria-hidden="true"
							>
								{#if isMenuOpen}
									<path
										stroke-linecap="round"
										stroke-linejoin="round"
										stroke-width="2"
										d="M6 18L18 6M6 6l12 12"
									/>
								{:else}
									<path
										stroke-linecap="round"
										stroke-linejoin="round"
										stroke-width="2"
										d="M4 6h16M4 12h16M4 18h16"
									/>
								{/if}
							</svg>
						</button>
					</div>
				</div>
			</div>
		</div>

		<!-- Mobile menu -->
		{#if isMenuOpen}
			<div class="md:hidden">
				<div class="space-y-1 border-t border-gray-200 px-2 pt-2 pb-3 sm:px-3">
					<a
						href="/"
						class="block rounded-md px-3 py-2 text-base font-medium text-gray-700 hover:bg-indigo-50 hover:text-indigo-600"
					>
						Home
					</a>
					<a
						href="/demo/lucia"
						class="block rounded-md px-3 py-2 text-base font-medium text-gray-700 hover:bg-indigo-50 hover:text-indigo-600"
					>
						Lucia
					</a>
					<a
						href="/demo/paraglide"
						class="block rounded-md px-3 py-2 text-base font-medium text-gray-700 hover:bg-indigo-50 hover:text-indigo-600"
					>
						Paraglide
					</a>

					<!-- Language options for mobile -->
					<div class="mt-3 border-t border-gray-200 pt-4">
						<p class="px-3 text-xs font-semibold tracking-wider text-gray-500 uppercase">
							{m.getLanguage?.() || 'Language'}
						</p>
						<div class="mt-2 space-y-1">
							{#each languages as language}
								<button
									onclick={() => changeLanguage(language.code)}
									class="block w-full rounded-md px-3 py-2 text-left text-base font-medium text-gray-700 hover:bg-indigo-50 hover:text-indigo-600"
								>
									{language.name}
								</button>
							{/each}
						</div>
					</div>
				</div>
			</div>
		{/if}
	</header>

	<main class="flex-grow">
		{@render children()}
	</main>

	<footer class="border-t border-indigo-100 bg-white py-4">
		<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
			<p class="text-center text-sm text-gray-500">
				© {new Date().getFullYear()} KWJ95. All rights reserved.
			</p>
		</div>
	</footer>
</div>
