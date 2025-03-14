/// <reference types="svelte" />
import type { Writable } from 'svelte/store';
export declare function persistStore<T>(name: string, initialValue?: T | (() => T) | null, broadcastToAll?: boolean): Pick<Writable<T | null>, 'subscribe' | 'set' | 'update'>;
