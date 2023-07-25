<script>
    import { staticState } from "$lib";
	import InteractFrame from "../StudentVIEW/InteractFRAME/InteractFRAME.svelte";
	import PanelFRAME from "./PanelFRAME/PanelFrame.svelte";
	import PatchNote from "./PatchNoteFRAME/PatchNote.svelte";

</script>

<main>
    {#if $staticState.activeItem === "Panel"}
        <PanelFRAME />
    {:else if $staticState.activeItem === "Interact"}
        <InteractFrame />
    {:else if $staticState.activeItem === "Patch Notes"}
        <PatchNote />
    {/if}
</main>