<script>
// @ts-nocheck

    import { studentState } from "$lib";
    import FetchingImages from "./FetchingImages.svelte";
	import FetchingInfo from "./FetchingInfo.svelte";
    import DeleteForm from "./DeleteForm.svelte";

    /** database calls*/
    import { auth, db, storage } from "$lib";
    import { onSnapshot, collection, doc, getDoc} from "firebase/firestore";

	
    onSnapshot(doc(collection($db, "submittedForms"), $auth.currentUser.uid), snapResp =>
    {
        $studentState.showFormReq = snapResp.data();
        
    })
    

</script>

<main class=" p-2 sm:p-0">
   

    <section class="max-w-fit mb-2">
        <DeleteForm />
    </section>


        
    <div class="border-b-2 border-t-2 border-orange-500 py-1 mt-5">
        <p class="bg-orange-500 text-center text-white font-bold">Student Information</p>
    </div>

    {#if $studentState.showFormReq}
        <section class="mt-2 p-2 bg-slate-800">
            <FetchingInfo />
        </section>
    {:else}
        <p class="text-center mt-2">There is no records in our database.</p>
    {/if}
    

    
</main>

