<script>
    import { studentState } from "$lib";
	import DsButton from "$lib/GenCom/DsButton.svelte";


    const dsComp = {
        showSizeError: false,
    }


    const detectSize = () => 
    {
        for(let i = 0; i < $studentState.files.length; i++) 
        {
            if($studentState.files[i].size < 2097152)
            {
                dsComp.showSizeError = false;
                continue;
            }else
            {
                dsComp.showSizeError = true;
                break;
            }
        
        }
    }

    const resetFile = () =>
    {
        const file = document.querySelector("#fileInput")
        
        // @ts-ignore
        file.value = "";
        $studentState.files = [];
        dsComp.showSizeError = false;
    }
</script>

<section class="">
    <div class="py-2 flex flex-col gap-2 bg-gradient-to-l from-blue-100 to-slate-500 rounded-md p-4">
        

        <p class="bg-gradient-to-r from-white to-orange-300 px-2 font-semibold text-center w-full  my-5">UPLOAD REQUIREMENTS</p>


        <input 
        id="fileInput"
        type="file" multiple accept="image/*" 
        bind:files={$studentState.files} 
        on:change={detectSize}
        />

    </div>

    {#if dsComp.showSizeError}
        <section class="fixed bottom-0 top-0 left-0 right-0  z-10 p-4 sm:p-0">
            <div class="mx-auto sm:max-w-xs p-4 bg-slate-300 mt-[15vh] border-2 border-pagCoreBrown">
                <p class="text-center">Each file size must be less than 2mb. </p>
                <DsButton title="Ok" on:click={resetFile}/>
            </div>
        </section>
    {/if}
</section>