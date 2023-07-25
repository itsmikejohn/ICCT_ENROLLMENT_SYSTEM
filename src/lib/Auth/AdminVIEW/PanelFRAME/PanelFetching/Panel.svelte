<script>
// @ts-nocheck

    import { adminState } from "$lib";
    import PanelAccord from "./PanelAccord.svelte";

    /** database calls*/
    import { auth, db, storage } from "$lib";
    import { collection, deleteDoc, onSnapshot, doc, query, orderBy } from "firebase/firestore";

	import DsButton from "$lib/GenCom/DsButton.svelte";
	import AcceptLogis from "./AcceptLogis.svelte";
	import DetailsLogics from "./DetailsLogics.svelte";
	import SearchLogics from "./SearchLogics.svelte";
	import { scale } from "svelte/transition";

    
    onSnapshot(query(collection($db, "submittedForms"), orderBy("createdAt", "asc")), snapsResp =>
    {   
   
        let fbData = [];
        let result = [];
        snapsResp.docs.forEach(doc =>
        {
            let mutatedDate = new Date(Number(JSON.stringify(doc.data().createdAt).slice(11,21)) * 1000);
            let date = mutatedDate.toLocaleTimeString() + ", " + mutatedDate.toLocaleDateString();
            let data = {...doc.data(), id: doc.id, date: date};

            fbData = [data, ...fbData];

            result = fbData.filter(item => item.isAccepted === false);
        })

        $adminState.submittedForms = result;
        
    })

	
    const acceptHandler = (formObject, outerIndex) =>
    {
        $adminState.panelComparison = outerIndex;
        $adminState.showAccept = true;
    }

    const detailsHandler = (formObject, outerIndex) =>
    {
        $adminState.panelComparison = outerIndex;
        $adminState.showDetails = true;
    }



</script>

<main class="min-h-[50vh] border-[0.1rem] border-black bg-gradient-to-bl from-[#ffc400] to-[#5b16475e] p-2 shadow-lg shadow-black"
in:scale
>
    <p class="text-center p-2 border-[0.1rem] bg-gradient-to-r from-black to-blue-400 text-white font-bold">Submitted Forms</p>

    <SearchLogics />

    <section class="max-h-[50vh] overflow-y-scroll">
        {#each $adminState.submittedForms as form, outerIndex}
            <section class="flex gap-1 items-center text-xs border-[0.1rem] border-black mt-2 p-2 bg-gradient-to-bl from-pink-500 to-slate-300">
                <img loading="lazy" src={form.photoURL} alt="loading" class="w-10" />
                <section class="w-full">
                    <p class="font-bold">{form.fullname}</p>
                    <p>{form.email}</p>
                </section>
        
                <section class="flex gap-1">
                    <DsButton color="to-green-400 from-green-500" title="Accept" on:click={() => acceptHandler(form, outerIndex)}/>


                    <DsButton color="to-green-400 from-green-500" title="Details" on:click={() => detailsHandler(form, outerIndex)}/>


                    <DsButton color="from-red-400 to-red-500" title="Delete" on:click={() => deleteDoc(doc(collection($db, "submittedForms"), form.id))}/>
                </section>
            </section>
            {#if $adminState.panelComparison === outerIndex}
                {#if $adminState.showAccept}
                    <AcceptLogis {form} />
                {:else if $adminState.showDetails}
                    <DetailsLogics {form} />
                {/if}
            {/if}


        {/each}

        

       

        
    </section>
    
    
    
</main>


<style>
    /* width */
    ::-webkit-scrollbar {
        width: 10px;
    }

    
        
    /* Handle */
    ::-webkit-scrollbar-thumb {
        background: rgba(0, 13, 255, 0.512); 

    }

    
</style>