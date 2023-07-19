<script>
    import { studentState } from "$lib";
    import Posting from "./Posting.svelte";
    import Fetching from "./Fetching.svelte";
    
    /** database calls */
    import { auth, db } from "$lib";
	
	

</script>

<main>
    
    <section class="flex gap-1 ">
        <img src={$auth.currentUser?.photoURL} alt="loading" class="w-14 rounded-full bg-slate-200 p-1"/>
        <button class="w-full px-4 py-1 border-2 rounded-2xl cursor-text text-left bg-white"
        on:click={() => $studentState.showPoster = true}
        >
            Have anything to share? {$auth.currentUser?.displayName}
        </button>
    </section>
    

    {#if $studentState.showPoster}
        <section class="fixed bottom-0 top-0 left-0 right-0 z-10 p-2 sm:p-0" id="colorMe">
            <!--Component for posting inside here-->
            <Posting />
        </section>
    {/if}

    <Fetching />
</main>

<style>
    #colorMe{
        background-color: rgba(0, 0, 0, 0.402);
    }
</style>