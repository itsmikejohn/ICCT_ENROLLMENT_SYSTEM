<script>
    import { staticState } from "$lib";
    import AdminFRAME from "./AdminVIEW/AdminFRAME.svelte";
    import StudentFRAME from "./StudentVIEW/StudentFRAME.svelte";
    import StaticFRAME from "./StaticVIEW/StaticFRAME.svelte";

    

</script>

<main class="mt-20 sm:max-w-xl mx-auto p-2 sm:p-0 min-h-screen">
    {#if $staticState.hadAdmin}
        <AdminFRAME />
    {:else if $staticState.hadStudent}
        <StudentFRAME />
    {:else}
        <StaticFRAME />
    {/if}
</main>