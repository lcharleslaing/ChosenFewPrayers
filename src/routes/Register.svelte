<script>
  import { supabase } from "../lib/supabaseClient";

  let email = "";
  let password = "";

  async function handleRegister() {
    const { user, error } = await supabase.auth.signUp({
      email,
      password,
    });
    if (error) {
      console.error(error.message);
    } else {
      console.log("Registration successful", user);
    }
  }
</script>

<form on:submit|preventDefault={handleRegister}>
  <label for="email">Email:</label>
  <input type="email" id="email" bind:value={email} required />

  <label for="password">Password:</label>
  <input type="password" id="password" bind:value={password} required />

  <button type="submit">Register</button>
</form>
