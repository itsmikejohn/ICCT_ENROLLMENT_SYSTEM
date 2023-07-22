<script>
	import { staticState } from "$lib";
	import { scale } from "svelte/transition";


</script>

<main in:scale>
        

        <section class="mt-10 p-2 border-[0.1rem] border-black flex flex-col gap-5 bg-gradient-to-bl from-white shadow-lg shadow-black">
                <p class="text-lg font-semibold  text-center">
                    Welcome to ICCT Colleges Enrollment System Design and Implementation for Incoming Students for the Year 2023.
                </p>

                <p class="text-base  text-center ">
                    Where simplicity meets efficiency! Let our friendly chat system guide you through the process seamlessly, making enrollment a breeze. Say goodbye to complexities and hello to hassle-free enrollment. Let's get started!"
                </p>

                <button class="px-2 py-1 bg-gradient-to-tl from-blue-300 to-pink-700 rounded-md shadow-sm shadow-black active:shadow-none hover:bg-gradient-br hover:from-pink-700 hover:to-blue-300  transition-all active:scale-95 text-white font-semibold"
                on:click={() => $staticState.activeItem = "Login"}
                >Lets go!</button>
        </section>
</main>