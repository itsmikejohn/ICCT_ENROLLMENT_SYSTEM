<script>
    import { staticState } from "$lib";

    import ICCTicon from "$lib/Images/SVG/ICCTicon.webp";
	import { fly, scale } from "svelte/transition";
	import RegisterLogics from "./RegisterLogics/RegisterLogics.svelte";


</script>

<main class="" in:scale>

    <section class="sm:w-[400px] mx-auto mb-2 flex flex-col gap-2 justify-center items-center" >
        <img src={ICCTicon} alt="loadin" class="w-40" />

  
            <p class="bg-gradient-to-l from-white to-orange-300 w-full px-2 font-semibold text-center">Register to ICCT Enrollment System</p>
        
    </section>

    <section class="p-5 border-[0.1rem] border-[#292929f0] rounded-md sm:w-[400px] mx-auto flex flex-col gap-2 bg-gradient-to-r from-blue-500 to-white shadow-lg shadow-black" in:fly={{y:100, duration:600}}>
        <!--Register functions inside here-->
        <RegisterLogics />
    </section>

    <section class="p-2 border-[0.1rem] border-[#292929f0] sm:w-[400px] mx-auto flex gap-2 bg-gradient-to-l from-blue-500 to-white mt-10 shadow-lg shadow-black rounded-md" in:fly={{x:100, duration:500}}>
        <p>Have account?</p>
        <button class="underline text-pagCoreBlue transition-all hover:font-semibold active:scale-95"
        on:click={() => $staticState.showRegister = false}
        >Login here</button>
    </section>

</main>