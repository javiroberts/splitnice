<script lang="ts">
	import session from '$lib/stores/session';
	import type { User } from '$lib/types/user';
	import PocketBase from 'pocketbase';

	import { goto } from '$app/navigation';

	const pb = new PocketBase('http://localhost:8090');

	let username: string;
	let password: string;

	const logIn = async () => {
		try {
			const userData = await pb.collection('users').authWithPassword(username, password);
			$session.user = {
				id: userData.record.id,
				email: userData.record.email,
				name: userData.record.name,
				avatar: userData.record.avatar,
				verified: userData.record.verified,
				token: userData.record.token
			};
			goto('/app');
		} catch (error) {
			console.error('err:', error)
		}
	};
</script>

<div class="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
	<div class="sm:mx-auto sm:w-full sm:max-w-sm">
		<h2 class="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-cyan-800">
			Sign in to your account
		</h2>
	</div>

	<div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
		<form on:submit|preventDefault={logIn} class="space-y-6" action="#" method="POST">
			<div>
				<label for="email" class="block text-sm font-medium leading-6 text-gray-900"
					>Email address</label
				>
				<div class="mt-2">
					<input
						bind:value={username}
						id="email"
						name="email"
						type="email"
						autocomplete="email"
						required
						class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-cyan-600 sm:text-sm sm:leading-6"
					/>
				</div>
			</div>

			<div>
				<div class="flex items-center justify-between">
					<label for="password" class="block text-sm font-medium leading-6 text-gray-900"
						>Password</label
					>
					<div class="text-sm">
						<a href="#" class="font-semibold text-cyan-600 hover:text-cyan-500">Forgot password?</a>
					</div>
				</div>
				<div class="mt-2">
					<input
						bind:value={password}
						id="password"
						name="password"
						type="password"
						autocomplete="current-password"
						required
						class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-cyan-600 sm:text-sm sm:leading-6"
					/>
				</div>
			</div>

			<div>
				<button
					type="submit"
					class="flex w-full justify-center rounded-md bg-cyan-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-cyan-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-600"
					>Sign in</button
				>
			</div>
		</form>

		<p class="mt-10 text-center text-sm text-gray-500">
			Not a member?
			<a href="#" class="font-semibold leading-6 text-cyan-700 hover:text-cyan-500">Sign up</a>
		</p>
	</div>
</div>
