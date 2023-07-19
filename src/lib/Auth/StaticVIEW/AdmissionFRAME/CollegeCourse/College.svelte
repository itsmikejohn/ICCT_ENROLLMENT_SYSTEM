<script>
    import { staticState } from "$lib";
	import { fly } from "svelte/transition";
</script>

<main class="leading-8" in:fly={{x:-300, duration:500}}>
    {#each $staticState.cc as course, index}

        <section class="border-b-2 border-t-2 border-[#bfaf9c] py-1 mt-2" >
            <p class="bg-[#bfaf9c] text-center font-mono font-semibold">{course.name}</p>
        </section>

        {#each course.offers as offers}
            <p>{offers}</p>
        {/each}
    {/each}
</main>