<script>
    import { staticState } from "$lib";

	import DsButton from "$lib/GenCom/DsButton.svelte";
    import DsInput from "$lib/GenCom/DsInput.svelte";
    import ICCTicon from "$lib/Images/SVG/ICCTicon.webp";
	import { fly, scale } from "svelte/transition";
	import ResetLogics from "./ResetLogics/ResetLogics.svelte";


</script>

<main class="" in:scale>

    <section class="sm:w-[400px] mx-auto mb-2 flex flex-col gap-2 justify-center items-center" in:fly={{y:-300, duration:1000}}>
        <img src={ICCTicon} alt="loadin" class="w-40" />

        <div class="border-b-2 border-t-2 border-orange-500 py-1 w-full">
            <p class="bg-orange-500 px-2 font-semibold text-center">Password Recovery to ICCT Enrollment System</p>
        </div>
    </section>

    <section class="p-2 border-2 border-pagCoreBrown sm:w-[400px] mx-auto flex flex-col gap-2 bg-[#bfaf9c]" in:fly={{y:300, duration:1000}}>
        <!--Reset password logics happended inside here-->
        <ResetLogics />
    </section>

    <section class="p-2 border-2 border-pagCoreBrown sm:w-[400px] mx-auto flex gap-2 mt-2 bg-[#bfaf9c]" in:fly={{x:300, duration:500}}>
        <p>Already recovered?</p>
        <button class="underline text-pagCoreBlue transition-all hover:font-semibold active:scale-95"
        on:click={() => $staticState.showResetPass = false}
        >Login here</button>
    </section>

    
</main>