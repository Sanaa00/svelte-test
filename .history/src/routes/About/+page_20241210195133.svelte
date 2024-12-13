<script>
	// import { USERNAME } from '$env/static/private';

	const formData = {
		username: '',
		email: '',
		password: ''
	};
	function inputHandler(e) {
		console.log($formData);
	}
</script>

<div>
	<p>About us</p>

	<form on:submit|preventDefault={handleSubmit} class="flex flex-col">
		<label>user name</label>
		<input name="username" bind:value={formData.username} placeholder="enter your name ..." />

		<label>email</label>
		<input name="email" bind:value={formData.email} placeholder="enter your email ..." />

		<label>password</label>
		<input
			name="password"
			bind:value={formData.password}
			placeholder="enter your password ..."
			on:change={inputHandler()}
		/>
		<button>submit</button>
	</form>
</div>
