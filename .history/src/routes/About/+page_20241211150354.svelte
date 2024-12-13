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
		<inpu
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
