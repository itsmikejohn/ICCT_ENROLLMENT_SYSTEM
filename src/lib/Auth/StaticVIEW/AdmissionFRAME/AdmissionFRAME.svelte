<script>
    let array_data = ["College", "SeniorHighTracks", "Requirements"]
    let activeItem = "College";

    import College from "./CollegeCourse/College.svelte";
    import SeniorHigh from "./SeniorHighTracks/SeniorHigh.svelte";
    import Requirement from "./Requirements/Requirement.svelte";
	import { scale } from "svelte/transition";

    const dataCatch = /** @param {string} selectedData */ selectedData => activeItem = selectedData;
    
</script>

<main in:scale>
    <main class="flex ">
        {#each array_data as selection }
            <button class="px-2 py-1  bg-gradient-to-l from-blue-600 to-blue-500  w-full transition-all hover:font-semibold hover:text-black hover:bg-[#bfaf9c] shadow-lg shadow-black"
            class:active={activeItem === selection}
            on:click={() => dataCatch(selection)}
            >{selection}</button>
        {/each}
    </main>
    
    <main>
        {#if activeItem === "College"}
            <College />
        {:else if activeItem === "SeniorHighTracks"}
            <SeniorHigh />
        {:else if activeItem === "Requirements"}
            <Requirement />
        {/if}
    </main>
</main>

<style>
    .active{
        background-color: #71440c;
        color: white;
        font-weight: bold;
    }
</style>