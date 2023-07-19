<script>
    import { studentState } from "$lib";

    /** database calls*/
    import { auth, storage } from "$lib";
    import { getDownloadURL, ref, listAll } from "firebase/storage";
	
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

        console.log($studentState.showImagesReq.length)
        
    })
    

    const dsComp = {
        comparison: 0.1,
    }

    /** @param {string} images @param {number} outerIndex function that makes specific images index looks large*/
    const viewImageHandler = (images, outerIndex) =>
    {
        dsComp.comparison = outerIndex;
    }
</script>

{#each $studentState.showImagesReq as images, outerIndex}
    <button on:click={viewImageHandler} class="w-full transition-all hover:border-2 flex justify-center items-center"
    on:click={() => viewImageHandler(images, outerIndex)}
    >
        <img src={images} alt="loading" class="w-20 border-2 cursor-pointer" />
    </button>

    {#if dsComp.comparison === outerIndex}
        <section class="fixed bottom-0 top-0 left-0 right-0 z-10 " id="colorMe">
            <main class="mx-auto sm:max-w-4xl mt-[5vh] flex items-center">
                <div class="overflow-y-scroll max-h-screen">
                    <img src={images} alt="loading" class="w-full h-full bg-slate-800" />
                </div>

                <button class="bg-red-500 px-2 text-white absolute top-0 transition-all hover:font-semibold"
                on:click={() => dsComp.comparison = 0.1}
                >
                    Close
                </button>
            </main>
        </section>
    {/if}
{/each}


<style>
    #colorMe{
        background-color: rgba(0, 0, 0, 0.671);
    }
</style>