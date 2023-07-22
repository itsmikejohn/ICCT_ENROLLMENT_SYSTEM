<svelte:options accessors />

<script>
	import { slide } from "svelte/transition";

    export let logic = false;
    export let logic_title = "overide me";
    export let title = "Sample";
    export let array_data = ["Sample 1", "Sample 2"];

    const dsComp = {
        showMenu: false,
    }

    const showMenu = () => dsComp.showMenu = !dsComp.showMenu;

    const catchSelection = /** @param {string}selectedData */ selectedData => (title = selectedData, showMenu());
        

</script>
<!--@component 
    This component takes logic as boolean if you want fixed title, takes logic_title as part of logic becoming true, takes title as dynamic tyle, takes array data as selection value-->

<button class="flex items-center px-2 py-1 w-full text-left bg-white font-mono border-[0.1rem] border-[#292929f0]"
on:click={showMenu}
>   
    {#if logic}
        <div class="w-full">
            <p>{logic_title}</p>
        </div>
    {:else}
        <div class="w-full">
            <p>{title}</p>
        </div>
    {/if}

    <div class="">
        <div class="border-b-2 border-r-2 h-2 w-2 border-black rotate-45"></div>
    </div>
</button>

{#if dsComp.showMenu}
    <nav class="bg-white mt-1" in:slide>
        {#each array_data as selection }
            <button class="w-full text-left font-mono px-2 py-1 transition-all hover:bg-pagCoreWhite"
            on:click={() => catchSelection(selection)}
            >{selection}</button>
        {/each}
    </nav>
{/if}