<script>
	import { formData } from '../../Store/store';
	import * as yup from 'yup';
	function handleSubmitt() {
		console.log($formData);
		formData.subscribe((value) => {
			console.log(value);
		})();
	}

	const { form, errors, state, handleChange, handleSubmit } = createForm({
		initialValues: {
			name: '',
			email: ''
		},
		validationSchema: yup.Object().shape({
			title: yup.string().oneof(['Mr', 'Mrs', 'Mx']).required(),
			name: yup.string().required(),
			email: yup.string().email().required()
		}),
		onSubmit: (values) => {
			console.log(JSON.stringify(values));
		}
	});
</script>

<div>
	<p>About us</p>
	<form on:submit={handleSubmit}>
		<label for="title">title</label>
		<select id="title" name="title" on:change={handleChange} bind:value={$form.title}>
			<option>mr</option>
			<option>mr</option>
			<option>mr</option>
			<option>mr</option>
		</select>
		{#if $errors.title}<small>{$errors.title}</small>
		{/if}

		<label for="name">name</label>

		<script>
			import { createForm } from 'svelte-forms-lib';
			import * as yup from 'yup';

			const { form, errors, state, handleChange, handleSubmit } = createForm({
				initialValues: {
					name: '',
					email: ''
				},
				validationSchema: yup.object().shape({
					title: yup.string().oneOf(['Mr.', 'Mrs.', 'Mx.']).required(),
					name: yup.string().required(),
					email: yup.string().email().required()
				}),
				onSubmit: (values) => {
					alert(JSON.stringify(values));
				}
			});
		</script>

		<form on:submit={handleSubmit}>
			<label for="title">title</label>
			<select id="title" name="title" on:change={handleChange} bind:value={$form.title}>
				<option />
				<option>Mr.</option>
				<option>Mrs.</option>
				<option>Mx.</option>
			</select>
			{#if $errors.title}
				<small>{$errors.title}</small>
			{/if}

			<label for="name">name</label>
			<input
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
				id="email"
				name="email"
				on:change={handleChange}
				on:blur={handleChange}
				bind:value={$form.email}
			/>
			{#if $errors.email}
				<small>{$errors.email}</small>
			{/if}

			<button type="submit">submit</button>
		</form>

		{#if $errors.name}
			<small>{$errors.name}</small>
		{/if}
	</form>
	<!-- 
	<form on:submit|preventDefault={handleSubmitt} class="flex flex-col">
		<label>user name</label>
		<input name="username" bind:value={$formData.username} placeholder="enter your name ..." />

		<label>email</label>
		<input name="email" bind:value={$formData.email} placeholder="enter your email ..." />

		<label>password</label>
		<input name="password" bind:value={$formData.password} placeholder="enter your password ..." />
		<button type="submit">submit</button>
	</form> -->
</div>
