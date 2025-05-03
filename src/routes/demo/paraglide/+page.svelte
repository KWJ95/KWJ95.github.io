<script lang="ts">
	import { setLocale } from '$lib/paraglide/runtime';
	import { page } from '$app/state';
	import { goto } from '$app/navigation';
	import { m } from '$lib/paraglide/messages.js';
</script>

<div class="min-h-screen flex flex-col items-center justify-center bg-gray-100">
	<div class="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
		<h1 class="text-3xl font-bold text-center text-gray-800 mb-6">
			{m.hello_world({ name: 'SvelteKit User' })}
		</h1>
		
		<div class="flex flex-wrap justify-center gap-2 mb-6">
			<button 
				class="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors" 
				on:click={() => setLocale('en')}>English</button>
			<button 
				class="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors" 
				on:click={() => setLocale('es')}>Español</button>
			<button 
				class="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors" 
				on:click={() => setLocale('de')}>Deutsch</button>
			<button 
				class="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors" 
				on:click={() => setLocale('ms')}>Bahasa Melayu</button>
			<button 
				class="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors" 
				on:click={() => setLocale('zh')}>中文</button>
			<button 
				class="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors" 
				on:click={() => setLocale('fr')}>Français</button>
		</div>
		
		<p class="text-gray-600 text-center">
			If you use VSCode, install the 
			<a
				href="https://marketplace.visualstudio.com/items?itemName=inlang.vs-code-extension"
				target="_blank" 
				class="text-blue-500 hover:text-blue-700 underline">Sherlock i18n extension</a>
			for a better i18n experience.
		</p>
	</div>
</div>
