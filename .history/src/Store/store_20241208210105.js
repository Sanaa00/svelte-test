import { writable } from 'svelte/store';

export const dataStore = writable([]);

export const fetchDate = async () => {
	try {
		const response = await fetch('https://fakestoreapi.com/products');

		if (!response.ok) throw new Error('failed to fetch');

		const data = await response.json();

		dataStore.set(data);
		console.log(data);
	} catch (err) {
		console.error('Error fetching data:', err);
	}
};
export const fetchSingleDate = async () => {
	try {
		const response = await fetch(`https://fakestoreapi.com/products/${id}`);

		if (!response.ok) throw new Error('failed to fetch');

		const data = await response.json();

		dataStore.set(data);
		console.log(data);
	} catch (err) {
		console.error('Error fetching data:', err);
	}
};
