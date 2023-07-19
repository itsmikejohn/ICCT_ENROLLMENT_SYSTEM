<svelte:options accessors />

<script>
    import { studentState } from "$lib";
	import { slide } from "svelte/transition";

    export let title = "Sample";
    export let array_data = ["Sample 1", "Sample 2"];

    const dsComp = {
        showMenu: false,
    }

    const showMenu = () => dsComp.showMenu = !dsComp.showMenu;

    const catchSelection = /** @param {string}selectedData */ selectedData => {
        $studentState.course = selectedData;
        showMenu();
    };
        

</script>


<button class="flex items-center px-2 py-1 w-full text-left bg-white font-mono"
on:click={showMenu}
>   
    
    <div class="w-full">
        <p>{title}</p>
    </div>


    <div class="">
        <div class="border-b-2 border-r-2 h-2 w-2 border-black rotate-45"></div>
    </div>
</button>

{#if dsComp.showMenu}
    <nav class="bg-white mt-1" in:slide>
        {#each array_data as selection }
            <button class="w-full text-left font-mono px-2 py-1 transition-all hover:bg-[#bfaf9c]"
            on:click={() => catchSelection(selection)}
            >{selection}</button>
        {/each}
    </nav>
{/if}