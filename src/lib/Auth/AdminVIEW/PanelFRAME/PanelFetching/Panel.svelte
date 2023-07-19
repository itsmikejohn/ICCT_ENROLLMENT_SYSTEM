<script>
// @ts-nocheck

    import { adminState } from "$lib";
    import PanelAccord from "./PanelAccord.svelte";

    /** database calls*/
    import { auth, db, storage } from "$lib";
    import { collection, onSnapshot } from "firebase/firestore";

    onSnapshot(collection($db, "submittedForms"), snapsResp =>
    {   
   
        let fbData = [];
        snapsResp.docs.forEach(doc =>
        {
            let mutatedDate = new Date(Number(JSON.stringify(doc.data().createdAt).slice(11,21)) * 1000);
            let date = mutatedDate.toLocaleTimeString() + ", " + mutatedDate.toLocaleDateString();
            let data = {...doc.data(), id: doc.id, date: date};

            fbData = [data, ...fbData];
        })

        $adminState.submittedForms = fbData;
        
    })

	




</script>

<main>
    <div class="border-b-2 border-t-2 border-orange-500 py-1">
        <p class="px-2 bg-orange-500 text-center text-white">Applicants Form</p>
    </div>

    
    <section class=" overflow-y-scroll max-h-[70vh] px-2">
        {#each $adminState.submittedForms as forms}
            <div class="mt-2">
                <PanelAccord 
                {forms}
                
                />
            </div>

            
        {/each}
    </section>
    
</main>