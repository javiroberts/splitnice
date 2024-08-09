import { writable } from 'svelte/store';
import type { User } from '$lib/types/user';

interface Session {
	user?: User | null;
}

const session = writable<Session>({ user: null });
export default session;