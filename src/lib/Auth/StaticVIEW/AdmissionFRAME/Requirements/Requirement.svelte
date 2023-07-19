<script>
    import { staticState } from "$lib";
    import { fly } from "svelte/transition";
	import AdmissionFormFrame from "./AdmissionForm/AdmissionFormFrame.svelte";
</script>

<main class="leading-8" in:fly={{x:-300, duration:500}}>
    {#each $staticState.rqr as require, outerIndex}
    <section class="border-b-2 border-t-2 border-[#bfaf9c] py-1 mt-2">
        <p class="bg-[#bfaf9c] text-center font-mono font-semibold">{require.name}</p>
    </section>
        <p class="text-red-500 italic font-semibold">Admission requirements:</p>
        {#each require.requires as requirements}
            <ul class="list-disc px-7">
                <li>{requirements}</li>
            </ul>
        {/each}

        <div class="max-w-fit">
            <!--Prototype form-->
            <AdmissionFormFrame {require} {outerIndex}/>
        </div>
    {/each}
</main>