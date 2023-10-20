<script>
  import { supabase } from "$lib/supabaseClient";
  import { goto } from "$app/navigation"; // Import the goto function

  let email = "";
  let password = "";

  async function handleLogin() {
    const { user, error } = await supabase.auth.signIn({
      email,
      password,
    });
    if (error) {
      console.error(error.message);
    } else {
      console.log("Login successful", user);
      goto("/"); // Redirect to homepage on successful login
    }
  }
</script>

<!-- Your form remains unchanged -->
<form on:submit|preventDefault={handleLogin}>
  <label for="email">Email:</label>
  <input type="email" id="email" bind:value={email} required />

  <label for="password">Password:</label>
  <input type="password" id="password" bind:value={password} required />

  <button type="submit">Login</button>
</form>
