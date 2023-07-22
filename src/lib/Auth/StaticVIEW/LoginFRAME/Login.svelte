<script>
    import { staticState } from "$lib";

    import ICCTicon from "$lib/Images/SVG/ICCTicon.webp";
	import { fly, scale } from "svelte/transition";
	import LoginLogics from "./LoginLogics/LoginLogics.svelte";


</script>

<main class="" in:scale>

    <section class="sm:w-[400px] mx-auto mb-2 flex flex-col gap-2 justify-center items-center" in:fly={{y:-300, duration:1000}}>
        <img src={ICCTicon} alt="loadin" class="w-40" />

       
            <p class="bg-gradient-to-r from-white to-orange-300 px-2 font-semibold text-center w-full">Login to ICCT Enrollment System</p>

        
    </section>

    <section class="p-2 sm:p-5  border-[0.1rem] border-[#292929f0] sm:w-[400px] mx-auto flex flex-col gap-2  bg-gradient-to-r from-blue-500 to-white rounded-md shadow-lg shadow-black" in:fly={{y:300, duration:1000}}>
        
        <!--Login logics all happened here inside-->
        <LoginLogics />
    </section>

    <section class="p-2  border-[0.1rem] border-[#292929f0] mt-10 sm:w-[400px] mx-auto flex gap-2 bg-gradient-to-l from-blue-500 to-white shadow-lg shadow-black" in:fly={{x:300, duration:500}}>
        <p>Don't have account?</p>
        <button class="underline text-pagCoreBlue transition-all hover:font-semibold active:scale-95"
        on:click={() => $staticState.showRegister = true}
        >Create here</button>
    </section>

    <section class="p-2 border-[0.1rem] border-[#292929f0] mt-5 sm:w-[400px] mx-auto flex gap-2  bg-gradient-to-l from-blue-500 to-white shadow-lg shadow-black" in:fly={{x:-300, duration:500}}>
        <p>Forgot password?</p>
        <button class="underline text-pagCoreBlue transition-all hover:font-semibold active:scale-95"
        on:click={() => $staticState.showResetPass = true}
        >Reset here</button>
    </section>
</main>