import { writable } from 'svelte/store';

export const dataStore = writable([]);
export const singleDataStore = writable(null);

export const fetchDate = async () => {
	try {
		const response = await fetch('https://fakestoreapi.com/products');
		if (!response.ok) throw new Error('Failed to fetch');
		const data = await response.json();
		dataStore.set(data);
	} catch (err) {
		console.error('Error fetching data:', err);
	}
};

export const fetchSingleDate = async (id) => {
	try {
		const response = await fetch(`https://fakestoreapi.com/products/${id}`);
		if (!response.ok) throw new Error('Failed to fetch');
		const data = await response.json();
		singleDataStore.set(data);
	} catch (err) {
		console.error('Error fetching single item:', err);
	}
};
