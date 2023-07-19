<script>
// @ts-nocheck

    import { studentState } from "$lib";
	import FetchingInfo from "./FetchingInfo.svelte";
    import DeleteForm from "./DeleteForm.svelte";

    /** database calls*/
    import { auth, db, storage } from "$lib";
    import { onSnapshot, collection, doc} from "firebase/firestore";

	
    onSnapshot(doc(collection($db, "submittedForms"), $auth.currentUser.uid), snapResp =>
    {   
        let data = {}
        if(snapResp.data()){
            let mutatedDate = new Date(Number(JSON.stringify(snapResp.data().createdAt).slice(11,21)) * 1000);
            let date = mutatedDate.toLocaleTimeString() + ", " + mutatedDate.toLocaleDateString(); 
            
            data = {...snapResp.data(), date: date}
            
        }
        $studentState.showFormReq = data;
        
    })
    

</script>

<main class=" p-2 sm:p-0">
   

    <section class="max-w-fit mb-2">
        <DeleteForm />
    </section>


        
    <div class="border-b-2 border-t-2 border-orange-500 py-1 mt-5">
        <p class="bg-orange-500 text-center text-white font-bold">Student Information</p>
    </div>

    {#if Object.keys($studentState.showFormReq).length > 0}
        <section class="mt-2 p-2 bg-slate-800">
            <FetchingInfo />
        </section>
    {:else}
        <p class="text-center mt-2">There is no records in our database.</p>
    {/if}
    

    
</main>

