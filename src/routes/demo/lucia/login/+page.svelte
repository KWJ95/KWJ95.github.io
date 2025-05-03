<script lang="ts">
	import { enhance } from '$app/forms';
	import type { ActionData } from './$types';
	import { m } from '$lib/paraglide/messages.js';

	let { form }: { form: ActionData } = $props();
</script>

<div class="flex items-center justify-center min-h-screen bg-gray-100 mb-4">
	<div class="bg-white p-8 rounded shadow-md w-96">
		<h1 class="text-2xl font-semibold mb-4 text-center"> { m.login() + '/'+ m.register()}</h1>
		<form method="post" action="?/login" use:enhance class="space-y-4">
			<div>
				<label for="username" class="block text-gray-700 text-sm font-bold mb-2">
					{m.username()}
				</label>
				<input
					type="text"
					id="username"
					name="username"
					class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
				/>
			</div>
			<div>
				<label for="password" class="block text-gray-700 text-sm font-bold mb-2">
					{m.password()}
				</label>
				<input
					type="password"
					id="password"
					name="password"
					class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
				/>
			</div>
			<div class="flex items-center justify-between">
				<button
					class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
					type="submit"
				>
					{m.login()}
				</button>
				<button
					formaction="?/register"
					class="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
				>
					{m.register()}
				</button>
			</div>
		</form>
		{#if form?.message}
			<p class="mt-3 text-red-500 text-xs italic text-center">{form?.message}</p>
		{/if}
	</div>
</div>
<p class="mt-3" style="color: red">{form?.message ?? ''}</p>
