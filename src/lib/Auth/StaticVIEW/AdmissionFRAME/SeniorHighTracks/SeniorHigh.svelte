<script>
    import { staticState } from "$lib";
    import { fly } from "svelte/transition";
</script>

<main class="leading-8" in:fly={{x:-300, duration:500}}>
    {#each $staticState.sht as course}
    <section class="py-1 my-4">
        <p class="bg-gradient-to-t from-white to-orange-300 px-2 font-semibold text-center w-full text-black shadow-lg shadow-black">{course.name}</p>
    </section>
        {#each course.offers as offers}
            <p>{offers}</p>
        {/each}
    {/each}
</main>