<script>
// @ts-nocheck

    import { studentState } from "$lib";
    import FetchingImages from "./FetchingImages.svelte";
	import FetchingInfo from "./FetchingInfo.svelte";
    import DeleteForm from "./DeleteForm.svelte";

    /** database calls*/
    import { auth, db, storage } from "$lib";
    import { onSnapshot, collection, doc} from "firebase/firestore";

	
    onSnapshot(doc(collection($db, "submittedForms"), $auth.currentUser?.uid), snapResp => 
    {

        let mutatedDate = new Date(Number(JSON.stringify(snapResp.data().createdAt).slice(11,21)) * 1000)
        let date = mutatedDate.toLocaleTimeString() + ", " + mutatedDate.toLocaleDateString();
        
        let data = {...snapResp.data(), id: snapResp.id, date}

        $studentState.showFormReq = [data];

    })

    
    

</script>

<main class=" p-2 sm:p-0">
   

    <section class="max-w-fit mb-2">
        <DeleteForm />
    </section>


    
    
    <!--Informations-->
    <div class="border-b-2 border-t-2 border-orange-500 py-1 mt-5">
        <p class="bg-orange-500 text-center text-white font-bold">Student Information</p>
    </div>

    <section class="mt-2 p-2 bg-slate-800">
        <FetchingInfo />
    </section>
    
    

    
</main>

