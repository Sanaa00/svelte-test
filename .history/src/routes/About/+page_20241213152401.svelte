<script>
	import { createForm } from 'svelte-forms-lib';
	// import { formData } from '../../Store/store';
	import * as yup from 'yup';

	const { form, errors, state, handleChange, handleSubmit } = createForm({
		initialValues: {
			name: '',
			email: ''
		},
		validationSchema: yup.object().shape({
			title: yup.string().oneOf(['Mr', 'Mrs', 'Mx']).required(),
			name: yup.string().required(),
			email: yup.string().email().required()
		}),
		onSubmit: (values) => {
			console.log(JSON.stringify(values));
			console.log(values);
		}
	});
</script>

<div class="min-h-screen px-60">
	<p class=" mt-10 flex text-lg font-bold text-cyan-800">About us</p>
	<form on:submit={handleSubmit} class="flex flex-col">
		<label for="title" class="mt-4">title</label>

		<select class="w-80" id="title" name="title" on:change={handleChange} bind:value={$form.title}>
			<option>mr</option>
			<option>Mrs</option>
			<option>Mx</option>
			<!-- <option>mr</option> -->
		</select>
		{#if $errors.title}<small>{$errors.title}</small>
		{/if}

		<label for="name" class="mt-4">name</label>
		<input
			class="w-80"
			id="name"
			name="name"
			on:change={handleChange}
			on:blur={handleChange}
			bind:value={$form.name}
		/>
		{#if $errors.name}
			<small>{$errors.name}</small>
		{/if}

		<label for="email" class="mt-4">email</label>
		<input
			class="w-80"
			name="email"
			id="email"
			on:change={handleChange}
			on:blur={handleChange}
			bind:value={$form.email}
		/>
		{#if $errors.email}
			<small>{$errors.email}</small>
		{/if}

		<button type="submit" class="mt-10 w-80 rounded-sm bg-cyan-800 py-2 text-white">Submit</button>
	</form>
</div>
