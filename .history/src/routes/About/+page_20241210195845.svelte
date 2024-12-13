<script>
	// import { USERNAME } from '$env/static/private';
	import { formData } from '../../Store/store';
	// export const formData = writable({
	// 	username: '',
	// 	email: '',
	// 	password: ''
	// });
	function handleSubmit() {
		console.log(formData);
		formData.subscribe((value) => {
			console.log(value);
		})();
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
		<input name="password" bind:value={formData.password} placeholder="enter your password ..." />
		<button>submit</button>
	</form>
</div>
