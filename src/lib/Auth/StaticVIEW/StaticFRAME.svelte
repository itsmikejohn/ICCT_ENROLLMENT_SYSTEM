<script>
    import { staticState } from "$lib";
	import AdmissionFRAME from "./AdmissionFRAME/AdmissionFRAME.svelte";
	import GuidesFRAME from "./GuidesFRAME/GuidesFRAME.svelte";
	import HomeFRAME from "./HomeFRAME/HomeFRAME.svelte";
    import LoginFRAME from "./LoginFRAME/LoginFRAME.svelte";
</script>

<main>
    {#if $staticState.activeItem === "Login"}
        <LoginFRAME />
    {:else if $staticState.activeItem === "Admission"}
        <AdmissionFRAME />
    {:else if $staticState.activeItem === "Home"}
        <HomeFRAME />
    {:else if $staticState.activeItem === "Guides"}
        <GuidesFRAME />
    {/if}
</main>