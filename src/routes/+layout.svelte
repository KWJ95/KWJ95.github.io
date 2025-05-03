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

<div class="min-h-screen flex flex-col bg-gray-50">
	<header class="bg-white shadow-sm border-b border-indigo-100">
		<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
			<div class="flex justify-between h-16">
				<div class="flex items-center">
					<a href="/" class="flex-shrink-0 flex items-center">
						<span class="text-indigo-600 font-bold text-xl">KWJ95</span>
					</a>
					
					<!-- Desktop Navigation -->
					<nav class="hidden md:ml-6 md:flex md:space-x-4">
						<a href="/" class="px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-indigo-600 hover:bg-indigo-50">
							Home
						</a>
						<a href="/demo/lucia" class="px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-indigo-600 hover:bg-indigo-50">
							Lucia
						</a>
						<a href="/demo/paraglide" class="px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-indigo-600 hover:bg-indigo-50">
							Paraglide
						</a>
					</nav>
				</div>
				
				<div class="flex items-center">
					<!-- Language Selector (Desktop) -->
					<div class="hidden md:ml-4 md:flex md:items-center relative">
						<button 
							onclick={toggleLangMenu} 
							class="flex items-center text-sm font-medium text-gray-700 hover:text-indigo-600 px-3 py-2 rounded-md hover:bg-indigo-50"
						>
							<span>{m.getLanguage?.() || 'Language'}</span>
							<svg class="ml-1 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
								<path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
							</svg>
						</button>
						
						{#if isLangMenuOpen}
							<div class="absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 z-50 top-10">
								{#each languages as language}
									<button 
										onclick={() => changeLanguage(language.code)}
										class="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-indigo-50 hover:text-indigo-600"
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
							class="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-indigo-600 hover:bg-indigo-50 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
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
									<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
								{:else}
									<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
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
				<div class="px-2 pt-2 pb-3 space-y-1 sm:px-3 border-t border-gray-200">
					<a href="/" class="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-indigo-600 hover:bg-indigo-50">
						Home
					</a>
					<a href="/demo/lucia" class="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-indigo-600 hover:bg-indigo-50">
						Lucia
					</a>
					<a href="/demo/paraglide" class="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-indigo-600 hover:bg-indigo-50">
						Paraglide
					</a>
					
					<!-- Language options for mobile -->
					<div class="mt-3 border-t border-gray-200 pt-4">
						<p class="px-3 text-xs font-semibold text-gray-500 uppercase tracking-wider">
							{m.getLanguage?.() || 'Language'}
						</p>
						<div class="mt-2 space-y-1">
							{#each languages as language}
								<button 
									onclick={() => changeLanguage(language.code)}
									class="block w-full text-left px-3 py-2 text-base font-medium text-gray-700 hover:text-indigo-600 hover:bg-indigo-50 rounded-md"
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
	
	<footer class="bg-white border-t border-indigo-100 py-4">
		<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
			<p class="text-center text-gray-500 text-sm">
				© {new Date().getFullYear()} KWJ95. All rights reserved.
			</p>
		</div>
	</footer>
</div>
