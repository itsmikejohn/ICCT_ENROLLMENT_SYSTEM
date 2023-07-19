<script>
    import { staticState } from "$lib";
	import AdmissionFrame from "./AdmissionFRAME/AdmissionFRAME.svelte";
    import LoginFrame from "./LoginFRAME/LoginFRAME.svelte";
</script>

<main>
    {#if $staticState.activeItem === "Login"}
        <LoginFrame />
    {:else if $staticState.activeItem === "Admission"}
        <AdmissionFrame />
    {/if}
</main>