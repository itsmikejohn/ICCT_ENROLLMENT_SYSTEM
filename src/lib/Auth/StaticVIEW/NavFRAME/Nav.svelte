<script>
    import { staticState, studentState } from "$lib";
    import { fly } from "svelte/transition";

	import DsButton from "$lib/GenCom/DsButton.svelte";

    /** database calls */
    import { auth } from "$lib";
	import { signOut } from "firebase/auth";
    

    export let array_data = ["Developer", "Mike", ]

    let dsComp = {
        showMenu: false,
    }

    const showMenu = () => dsComp.showMenu = !dsComp.showMenu;

    const catchSelection = /** @param {string} selectedData*/ selectedData => ( $staticState.activeItem = selectedData, showMenu() );
    
    const logoutHandler = () =>
    {
        signOut($auth);
        $studentState.showImagesReq = [];
    }
</script>
<!--@component This nav component takes array_data as array to be loop.-->

<main class=" bg-gradient-to-l from-blue-500 to-blue-600  fixed top-0 left-0 right-0 w-full p-2 z-10 flex">
    <section class="w-full">
        <button class="flex flex-col gap-1 p-2 transition-all "
        on:click={showMenu}
        >
            <div class="w-8 border-b-4 border-white"></div>
            <div class="w-6 border-b-4 border-white"></div>
            <div class="w-8 border-b-4 border-white"></div>
        </button>
    </section>

    <section>
        {#if $auth.currentUser}
            <DsButton color="bg-red-500" title="Logout" on:click={logoutHandler} />
        {/if}
    </section>
</main>

{#if dsComp.showMenu}
    <nav class=" bg-gradient-to-l from-blue-600 to-blue-500 fixed left-0 top-0 bottom-0 z-10 w-[70%] sm:w-[40%] md:w-[35%] lg:w-[20%] " in:fly={{x:-300, duration:500}}>
        <div class="float-right p-4">
            <button class="flex flex-col gap-1 px-2 py-4 transition-all "
            on:click={showMenu}
            >
                <div class="w-8 border-b-4 border-white rotate-45 absolute"></div>
            
                <div class="w-8 border-b-4 border-white rotate-[-45deg]"></div>
            </button>
        </div>

        {#if $auth.currentUser}
            <section class="mt-20 flex items-center gap-2 flex-wrap border-2 mx-2 mb-2 p-2">
                <img src={$auth.currentUser?.photoURL} alt="lazy" class="w-16" />

                <main class="text-white">
                    <p>{$auth.currentUser?.displayName}</p>
                    <p>{$auth.currentUser?.email}</p>
                </main>
            </section>
        {/if}
        
        {#each array_data as selection }
            <button class="w-full text-left p-2  font-semibold transition-all hover:font-bold hover:bg-[#dabc9480] hover:text-black text-xl"
            on:click={() => catchSelection(selection)}
            class:active={$staticState.activeItem === selection}
            >{selection}</button>
        {/each}
        
    </nav>
{/if}

<style>
    .active{
        background: linear-gradient(#dabc94, white);
        color: black;
    }
</style>