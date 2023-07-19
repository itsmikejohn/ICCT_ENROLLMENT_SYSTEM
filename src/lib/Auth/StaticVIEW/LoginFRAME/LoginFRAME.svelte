<script>
    import { staticState } from "$lib";
	import { scale } from "svelte/transition";

    import Login from "./Login.svelte";
    import Register from "./Register.svelte";
    import ResetPass from "./ResetPass.svelte";

</script>

<main in:scale>
    {#if $staticState.showRegister}
        <Register />
    {:else if $staticState.showResetPass}
        <ResetPass />
    {:else}
        <Login />
    {/if}
</main>