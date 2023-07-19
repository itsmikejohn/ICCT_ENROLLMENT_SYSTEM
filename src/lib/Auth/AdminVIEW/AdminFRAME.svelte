<script>
    import { staticState } from "$lib";
	import DashboardFRAME from "./DashboardFRAME/DashboardFRAME.svelte";
	import PanelFRAME from "./PanelFRAME/PanelFrame.svelte";

</script>

<main>
    {#if $staticState.activeItem === "DashBoard"}
        <DashboardFRAME />
    {:else if $staticState.activeItem === "Panel"}
        <PanelFRAME />
    {/if}
</main>