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

<div>
	<p class=" mt-10 flex text-lg font-bold text-cyan-800">About us</p>
	<form on:submit={handleSubmit} class="flex flex-col">
		<label for="title">title</label>
		<select id="title" name="title" on:change={handleChange} bind:value={$form.title}>
			<option>mr</option>
			<option>Mrs</option>
			<option>Mx</option>
			<!-- <option>mr</option> -->
		</select>
		{#if $errors.title}<small>{$errors.title}</small>
		{/if}

		<label for="name">name</label>
		<input
			class="w-90"
			id="name"
			name="name"
			on:change={handleChange}
			on:blur={handleChange}
			bind:value={$form.name}
		/>
		{#if $errors.name}
			<small>{$errors.name}</small>
		{/if}

		<label for="email">email</label>
		<input
			name="email"
			id="email"
			on:change={handleChange}
			on:blur={handleChange}
			bind:value={$form.email}
		/>
		{#if $errors.email}
			<small>{$errors.email}</small>
		{/if}

		<button type="submit">Submit</button>
	</form>
</div>
