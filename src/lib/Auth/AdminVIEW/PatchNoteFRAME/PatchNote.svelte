<script>
	import { staticState } from "$lib";
	import { scale } from "svelte/transition";


</script>

<main in:scale>
    <section class="mt-10 p-2 border-[0.1rem] border-black flex flex-col gap-5 bg-gradient-to-bl from-white shadow-lg shadow-black">
            <p class="text-lg font-semibold  text-center">
                Patch Notes
            </p>

            <section class="flex gap-2">
                <p class="">Stable version:</p>
                <p>2.0.5</p> 
            </section>
                
            <section class="flex gap-2">
                <p> Email the devs if found some bugs</p>
                <p class="underline text-blue-500">eviotamikejohnb@gmail.com</p>
            </section>
           

            <button class="px-2 py-1 bg-gradient-to-tl from-blue-300 to-pink-700 rounded-md shadow-sm shadow-black active:shadow-none hover:bg-gradient-br hover:from-pink-700 hover:to-blue-300  transition-all active:scale-95 text-white font-semibold"
            on:click={() => $staticState.activeItem = "Panel"}
            >Lets go!</button>
    </section>
</main>