<script lang="ts">
	import { enhance } from '$app/forms';
	import type { PageServerData } from './$types';
	import { m } from '$lib/paraglide/messages.js';

	let { data }: { data: PageServerData } = $props();
</script>

<div
	class="flex min-h-screen items-center justify-center bg-gradient-to-br from-indigo-50 to-purple-50 px-4"
>
	<div class="w-full max-w-md rounded-xl border border-indigo-100 bg-white p-8 shadow-lg">
		<div class="space-y-6 text-center">
			<div
				class="mx-auto mb-2 flex h-24 w-24 items-center justify-center rounded-full bg-indigo-100"
			>
				<span class="text-2xl font-bold text-indigo-600"
					>{data.user.username.charAt(0).toUpperCase()}</span
				>
			</div>

			<h1 class="mb-2 text-3xl font-bold text-indigo-600">
				{m.hello_world({ name: data.user.username })}
			</h1>

			<p class="mb-6 text-center text-gray-600">
				{m.user_id_statement({ userId: data.user.id })}
			</p>

			<form method="post" action="?/logout" use:enhance class="w-full">
				<button
					class="btn-primary w-full"
				>
					{m.sign_out()}
				</button>
			</form>

			<div class="mt-2 border-t border-gray-100 pt-4">
				<a
					href="/demo/lucia/login"
					class="text-sm text-indigo-500 transition-colors hover:text-indigo-700"
				>
					{m.return_to() + ' ' + m.login_page()}
				</a>
			</div>
		</div>
	</div>
</div>
