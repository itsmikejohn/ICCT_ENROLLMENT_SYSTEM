<script>
    import { adminKey, studentState } from "$lib";

    /** database calls*/
    import { auth, db } from "$lib";
    import { onSnapshot, query, orderBy, collection, deleteDoc, doc, where, getDocs } from "firebase/firestore";
	import CommentsFrame from "../Comments/CommentsFrame.svelte";
	import LikesFrame from "../Likes/LikesFrame.svelte";
    
    /** get all post from db */
    onSnapshot(query(collection($db, "studentChats"), orderBy("createdAt", "asc")), snapsResp =>
    {   
        /** @type {any} */
        let fbData = [];
        snapsResp.docs.forEach(doc =>
        {
            let mutatedDate = new Date(Number(JSON.stringify(doc.data().createdAt).slice(11,21)) * 1000);
            let date = mutatedDate.toLocaleTimeString() + ", " + mutatedDate.toLocaleDateString();
            let data = {...doc.data(), id: doc.id, date: date};
            fbData = [data, ...fbData];
        })

        $studentState.showStudentPost = fbData;
    })


    /** @param {any} post delete the primary student post with specific id and query it's specific comment and deleting it */
    const deleteHandler = post => 
    {
        deleteDoc(doc(collection($db, "studentChats"), post.id))
        .then(voidResp =>
        {
            getDocs(query(collection($db, "studentComments"), where("targetUID", "==", post.originUID)))
            .then(snapsResp =>
            {
                snapsResp.docs.forEach(documents =>
                {
                    deleteDoc(doc(collection($db, "studentComments"), documents.id))
                })
            })
            .catch(errorResp =>
            {
                console.log(errorResp)
            })
            
        })
        

    }

</script>

{#each $studentState.showStudentPost as post, outerIndex}
    <main class="p-2 border-2 mt-2 rounded-lg bg-[#e7e1da] border-pagCoreBrown break-words">
        <section class="flex items-center gap-2 ">
            <img src={post.photoURL} alt="loading" class="w-14  rounded-full bg-pagCoreWhite p-1" />

            <div class="w-full">
                <p class="font-mono font-semibold">{post.fullname}</p>
                <p class="font-mono">{post.date}</p>
            </div>
            <!--Delete handler-->
            {#if $auth.currentUser?.uid === post.ownerUID || $adminKey}
                <div class="-mt-5">
                    <button class="p-1 bg-red-500 text-white rounded-lg transition-all hover:font-semibold active:scale-95"
                    on:click={() => deleteHandler(post)}
                    >Remove</button>
                </div>
            {/if}
        </section>

        <p class="p-2">{post.userPost}</p>

        <section class="flex gap-1 mt-2">
            <LikesFrame {post} />
            <CommentsFrame {post} {outerIndex} />
        </section>
    </main>
{/each}