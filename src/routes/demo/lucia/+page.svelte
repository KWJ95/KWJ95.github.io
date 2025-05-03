<script lang="ts">
	import { enhance } from '$app/forms';
	import type { PageServerData } from './$types';
	import { m } from '$lib/paraglide/messages.js';

	let { data }: { data: PageServerData } = $props();
</script>

<div class="min-h-screen bg-gradient-to-br from-indigo-50 to-purple-50 flex items-center justify-center px-4">
	<div class="bg-white p-8 rounded-xl shadow-lg max-w-md w-full border border-indigo-100">
		<div class="text-center space-y-6">
			<div class="h-24 w-24 mx-auto bg-indigo-100 rounded-full flex items-center justify-center mb-2">
				<span class="text-2xl font-bold text-indigo-600">{data.user.username.charAt(0).toUpperCase()}</span>
			</div>
			
			<h1 class="text-3xl font-bold text-indigo-600 mb-2">
				{m.hello_world({ name: data.user.username })}
			</h1>
			
			<p class="text-gray-600 mb-6 text-center">
				{m.user_id_statement({ userId: data.user.id })}
			</p>

			<form method="post" action="?/logout" use:enhance class="w-full">
				<button class="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-3 px-4 rounded-lg
				               transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 
				               focus:ring-offset-2 hover:shadow-md">
					{m.sign_out()}
				</button>
			</form>
			
			<div class="pt-4 mt-2 border-t border-gray-100">
				<a href="/demo/lucia/login" class="text-indigo-500 hover:text-indigo-700 text-sm transition-colors">
					Return to login page
				</a>
			</div>
		</div>
	</div>
</div>
