<script>
    import { staticState } from "$lib";
	import InteractFrame from "../StudentVIEW/InteractFRAME/InteractFRAME.svelte";
	import DashboardFRAME from "./DashboardFRAME/DashboardFRAME.svelte";
	import PanelFRAME from "./PanelFRAME/PanelFrame.svelte";

</script>

<main>
    {#if $staticState.activeItem === "DashBoard"}
        <DashboardFRAME />
    {:else if $staticState.activeItem === "Panel"}
        <PanelFRAME />
    {:else if $staticState.activeItem === "Interact"}
        <InteractFrame />
    {/if}
</main>