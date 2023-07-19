<svelte:options accessors />

<script>
    import { studentState, staticState } from "$lib";
    import { slide } from "svelte/transition";
	import DsCustomAccord from "./DsCustomAccord.svelte";

     /** @type {any} */
    export let require;
    
    /** @type {any} */
    let array_datas = [];

    require.name === "Senior High School" ? array_datas = $staticState.sht : array_datas = $staticState.cc;

    /** @type {any} */
    const dsComp = {
        showMenu: false,
        course: "",
    }

    const showMenu = () => dsComp.showMenu = !dsComp.showMenu;
    
</script>


<button class="flex items-center px-2 py-1 w-full text-left bg-white font-mono"
on:click={showMenu}
>   
    <div class="w-full">
        <button>{$studentState.course}</button>
    </div>

    <div class="">
        <div class="border-b-2 border-r-2 h-2 w-2 border-black rotate-45"></div>
    </div>
</button>

{#if dsComp.showMenu}
    <nav class=" mt-1 flex flex-col gap-1 p-2" in:slide>
        {#each array_datas as selection }
            <DsCustomAccord array_data={selection.offers} title={selection.name}/>
        {/each}
    </nav>
{/if}
