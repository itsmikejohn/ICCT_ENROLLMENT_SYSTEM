<script>
    import DsButton from "$lib/GenCom/DsButton.svelte";
	import { scale } from "svelte/transition";
    import AdmissionForm from "./AdmissionForm.svelte";
	import FileUploadFrame from "./FileUpload/FileUploadFrame.svelte";
	import SubmitFrame from "./SubmitFrame.svelte/SubmitFrame.svelte";
	import { studentState } from "$lib";


    /** database calls */
    import { auth, db } from "$lib";
    import { onAuthStateChanged } from "firebase/auth";

    /** @type {any} */
    export let require;

    /** @type {number}*/
    export let outerIndex;

    const dsComp = {
        showForm : false,
        comparison: 0.1,
        showLoginWarning: false,
    }

    const viewSubmitForm = () =>
    {
        onAuthStateChanged($auth, userCredResp =>
        {
            userCredResp ? $studentState.comparison = outerIndex : dsComp.showLoginWarning = true;
        })

    }

</script>

<main>
    {#if dsComp.showLoginWarning}
        <section class="fixed left-0 right-0 bottom-0 top-0 z-10  p-2 sm:p-0">
            <div class="sm:max-w-fit  border-[0.1rem] border-[#292929f0] mx-auto mt-[10vh] p-4 flex flex-col gap-4 bg-gradient-to-r from-[#22180d] to-yellow-900 rounded-lg " transition:scale>
                <section class="flex items-center gap-2">
                    <p class="text-3xl font-extrabold p-2 bg-red-500 max-w-fit rounded-full px-5 text-white">!</p>
                    <p class="text-center text-red-500 font-semibold">You have to login to submit form.</p>
                </section>
                <DsButton title="Ok" on:click={() => dsComp.showLoginWarning = false}/>
            </div>
        </section>
    {/if}
    <DsButton color="bg-green-500" title="Submit form" on:click={viewSubmitForm}/>
    <!--Comparison to show specific form to its respected index-->
    {#if $studentState.comparison === outerIndex}

        <section class="fixed bottom-0 top-0 left-0 right-0 z-10 p-2 sm:p-0 " id="colorMe">

            <div class="border-2 mt-[5vh] sm:max-w-xl mx-auto bg-pagCoreWhite p-2 max-h-[80vh] overflow-y-scroll" transition:scale>
                <section class="p-4">
                    <p class="font-mono font-semibold">{require.name} </p>
                    <p class="text-red-500 font-bold">Upload a scan photos of the following: </p>
                    {#each require.requires as requirements}
                        <p>{requirements}</p>
                    {/each}

                </section>
                
                <!--File upload inside here-->
                <FileUploadFrame />


                <!--Forms inside here-->
                <AdmissionForm {require}/>
                

                <section class="flex gap-1 mt-2">
                    <!--Submitting date inside here-->
                    <SubmitFrame {require}/>

                    <DsButton title="Back" on:click={() => ($studentState.comparison = 0.1, $studentState.course = "Select your course")}/>
                </section>
            </div>

        </section>
        
    {/if}

</main>


<style>
    #colorMe{
        background-color: rgba(0, 0, 0, 0.402);
    }
</style>