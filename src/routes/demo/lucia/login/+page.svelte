<script lang="ts">
	import { enhance } from '$app/forms';
	import type { ActionData } from './$types';
	import { m } from '$lib/paraglide/messages.js';

	let { form }: { form: ActionData } = $props();
</script>

<div class="flex items-center justify-center min-h-screen bg-gradient-to-br from-indigo-50 to-purple-50 px-4">
	<div class="bg-white p-8 rounded-xl shadow-lg max-w-md w-full border border-indigo-100">
		<h1 class="text-2xl font-bold mb-6 text-center text-indigo-600">
			{m.login()}<span class="text-gray-400 mx-2">/</span>{m.register()}
		</h1>
		
		<form method="post" action="?/login" use:enhance class="space-y-5">
			<div>
				<label for="username" class="block text-gray-700 text-sm font-medium mb-2">
					{m.username()}
				</label>
				<input
					type="text"
					id="username"
					name="username"
					class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 
					       focus:border-indigo-500 text-gray-700 transition-all duration-200"
					placeholder="Enter your username"
				/>
			</div>
			
			<div>
				<label for="password" class="block text-gray-700 text-sm font-medium mb-2">
					{m.password()}
				</label>
				<input
					type="password"
					id="password"
					name="password"
					class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 
					       focus:border-indigo-500 text-gray-700 transition-all duration-200"
					placeholder="Enter your password"
				/>
			</div>
			
			<div class="flex items-center justify-between space-x-4 pt-2">
				<button
					class="flex-1 bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-3 px-4 rounded-lg
					       transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 
					       focus:ring-offset-2 hover:shadow-md"
					type="submit"
				>
					{m.login()}
				</button>
				<button
					formaction="?/register"
					class="flex-1 bg-white border border-indigo-600 text-indigo-600 hover:bg-indigo-50 
					       font-medium py-3 px-4 rounded-lg transition-all duration-200 focus:outline-none 
					       focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
				>
					{m.register()}
				</button>
			</div>
		</form>
		
		{#if form?.message}
			<div class="mt-4 p-3 bg-red-50 border border-red-200 rounded-lg">
				<p class="text-red-600 text-sm text-center">{form.message}</p>
			</div>
		{/if}
		
		<div class="mt-6 pt-4 border-t border-gray-100 text-center">
			<a href="/" class="text-indigo-500 hover:text-indigo-700 text-sm transition-colors">
				Back to main page
			</a>
		</div>
	</div>
</div>