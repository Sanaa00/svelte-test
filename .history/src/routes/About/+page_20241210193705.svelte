<script>
	function inputHandler(e) {
		console.log(e.events.value);
	}
</script>

<div>
	<p>About us</p>

	<form class="flex flex-col">
		<!-- svelte-ignore a11y_label_has_associated_control -->
		<label>user name</label>
		<input name="username" value="" placeholder="enter your name ..." />

		<label>email</label>
		<input name="email" value="" placeholder="enter your email ..." />

		<label>password</label>
		<input
			name="password"
			value=""
			placeholder="enter your password ..."
			on:change={inputHandler(e)}
		/>

		<!-- svelte-ignore a11y_consider_explicit_label -->
		<button on:click={inputHandler(e)}>submit</button>
	</form>
</div>
