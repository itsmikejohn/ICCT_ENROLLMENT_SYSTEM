<script>
// @ts-nocheck

    import { studentState } from "$lib";
    import FetchingImages from "./FetchingImages.svelte";
	import FetchingInfo from "./FetchingInfo.svelte";
    import DeleteForm from "./DeleteForm.svelte";

    /** database calls*/
    import { auth, db, storage } from "$lib";
    import { onSnapshot, collection, doc} from "firebase/firestore";
    import { getDownloadURL, ref, listAll } from "firebase/storage";
	
    onSnapshot(doc(collection($db, "submittedForms"), $auth.currentUser?.uid), snapResp => 
    {

        let mutatedDate = new Date(Number(JSON.stringify(snapResp.data().createdAt).slice(11,21)) * 1000)
        let date = mutatedDate.toLocaleTimeString() + ", " + mutatedDate.toLocaleDateString();
        
        let data = {...snapResp.data(), id: snapResp.id, date}

        $studentState.showFormReq = [data];
        
        console.log($studentState.showFormReq)

        listAll(ref($storage, $auth.currentUser?.uid))
        .then(imageResp =>
        {

            imageResp.items.forEach(itemRef =>
            {   
                /** Get user specific file storage link to fetch in front end */
                getDownloadURL(ref($storage, itemRef.fullPath))
                .then(resp =>
                {
                    if(!$studentState.showImagesReq.includes(resp))
                    {
                        $studentState.showImagesReq.push(resp)

                    }
                
                })
                
                
            })

            
        })
    })

    
    

</script>

<main class=" p-2 sm:p-0">
   
    {#if $studentState.showImagesReq.length > 0 && Object.keys($studentState.showFormReq).length > 0}
        <section class="max-w-fit mb-2">
            <DeleteForm />
        </section>
    {/if}

    {#if $studentState.showImagesReq.length > 0}
        <!--Images-->
        <div class="border-b-2 border-t-2 border-orange-500 py-1">
            <p class="bg-orange-500 text-center text-white font-bold">Scanned Photos of requirements</p>
        </div>
        <section class="flex overflow-x-scroll p-2 gap-2 bg-slate-800 mt-5">
            <FetchingImages />
        </section>
    {:else}
        <p class="text-center text-lg">There is no records of submission in our database.</p>
    {/if}

    {#if $studentState.showFormReq}
        <!--Informations-->
        <div class="border-b-2 border-t-2 border-orange-500 py-1 mt-5">
            <p class="bg-orange-500 text-center text-white font-bold">Student Information</p>
        </div>

        <section class="mt-2 p-2 bg-slate-800">
            <FetchingInfo />
        </section>
    {/if}
    

    
</main>

