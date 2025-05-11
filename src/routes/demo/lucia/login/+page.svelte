<script lang="ts">
	import { enhance } from '$app/forms';
	import type { ActionData } from './$types';
	import { m } from '$lib/paraglide/messages.js';

	let { form }: { form: ActionData } = $props();
</script>

<div
	class="flex min-h-screen items-center justify-center bg-gradient-to-br from-indigo-50 to-purple-50 px-4"
>
	<div class="w-full max-w-md rounded-xl border border-indigo-100 bg-white p-8 shadow-lg">
		<h1 class="mb-6 text-center text-2xl font-bold text-indigo-600">
			{m.login()}<span class="mx-2 text-gray-400">/</span>{m.register()}
		</h1>

		<form method="post" action="?/login" use:enhance class="space-y-5">
			<div>
				<label for="username" class="mb-2 block text-sm font-medium text-gray-700">
					{m.username()}
				</label>
				<input
					type="text"
					id="username"
					name="username"
					class="w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-700 transition-all
					       duration-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500"
					placeholder="Enter your username"
				/>
			</div>

			<div>
				<label for="password" class="mb-2 block text-sm font-medium text-gray-700">
					{m.password()}
				</label>
				<input
					type="password"
					id="password"
					name="password"
					class="w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-700 transition-all
					       duration-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500"
					placeholder="Enter your password"
				/>
			</div>

			<div class="flex items-center justify-between space-x-4 pt-2">
				<button
					class="flex-1 btn-primary"
					type="submit"
				>
					{m.login()}
				</button>
				<button
					formaction="?/register"
					class="btn-secondary flex-1"
				>
					{m.register()}
				</button>
			</div>
		</form>

		{#if form?.message}
			<div class="mt-4 rounded-lg border border-red-200 bg-red-50 p-3">
				<p class="text-center text-sm text-red-600">{form.message}</p>
			</div>
		{/if}

		<div class="mt-6 border-t border-gray-100 pt-4 text-center">
			<a href="/" class="text-sm text-indigo-500 transition-colors hover:text-indigo-700">
				{m.back_to() + ' ' + m.main_page()}
			</a>
		</div>
	</div>
</div>
