<script>
	import { USERNAME } from '$env/static/private';

	const formData = {
		name: üsername
	};
	function inputHandler(e) {
		console.log(e.event.value);
	}
</script>

<div>
	<p>About us</p>

	<form on:submit|preventDefault={handleSubmit} class="flex flex-col">
		<!-- svelte-ignore a11y_label_has_associated_control -->
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

		<!-- svelte-ignore a11y_consider_explicit_label -->
		<button>submit</button>
	</form>
</div>
