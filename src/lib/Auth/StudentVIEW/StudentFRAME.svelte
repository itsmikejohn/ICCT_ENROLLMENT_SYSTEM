<script>
    import { staticState } from "$lib";
    import AdmissionFRAME from "../StaticVIEW/AdmissionFRAME/AdmissionFRAME.svelte";

    import InteractFRAME from "./InteractFRAME/InteractFRAME.svelte";
	import StatusFRAME from "./StatusFRAME/StatusFRAME.svelte";
	
</script>

<main>
    {#if $staticState.activeItem === "Admission"}
        <AdmissionFRAME />
    {:else if $staticState.activeItem === "Interact"}
        <InteractFRAME />
    {:else if $staticState.activeItem === "Status"}
        <StatusFRAME/>
    {/if}
</main>