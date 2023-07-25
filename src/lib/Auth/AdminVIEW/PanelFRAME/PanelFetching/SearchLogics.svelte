<script>
// @ts-nocheck
    import { adminState } from "$lib";

    import { auth, db } from "$lib";
    import { onSnapshot, doc, collection,query, orderBy, where  } from "firebase/firestore";



    const dsComp = {
        searchValue: "",
    }

    const searchHandler = () =>
    {
        const searchValue = dsComp.searchValue;
        onSnapshot(query(collection($db, "submittedForms"), orderBy("createdAt", "asc"), where("email", "==", searchValue)), snapsResp =>
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

    }

    const keyDetect = () =>
    {   
        if(dsComp.searchValue.trim().length === 0)
        {
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

        }
    }

</script>

<section class="flex items-center mt-2">
    <input type="text" placeholder="🔎 Search by email" class="px-2 py-1 w-full border-[0.1rem] border-black focus:outline-none" 
    bind:value={dsComp.searchValue}
    on:keyup={keyDetect}
    />
    
    
    <button class="border-[0.1rem] border-black px-2 py-1 flex items-center bg-gradient-to-r from-green-500 to-green-300  font-semibold hover:font-bold active:scale-95"
    on:click={searchHandler}
    >
        <p>Search</p>
        
    </button>
</section>