<script>
    import { adminKey, studentState } from "$lib";
    import { scale } from "svelte/transition";

    /** database calls */
    import { auth, db } from "$lib";
	import CommentSender from "./CommentSender.svelte";
	import { collection, onSnapshot, query, orderBy, deleteDoc, doc, updateDoc, increment } from "firebase/firestore";

    /** @type {any} */
    export let post;

    /** @type {number} */
    export let outerIndex;

    
    onSnapshot(query(collection($db, "studentComments"), orderBy("createdAt", "desc")), snapsResp =>
    {   
        /** @type {any} */
        let fbData = [];
        snapsResp.docs.forEach(doc =>
        {
            let mutatedDate = new Date(Number(JSON.stringify(doc.data().createdAt).slice(11,21)) * 1000);
            let date = mutatedDate.toLocaleTimeString() + ", " + mutatedDate.toDateString();

            let data = {...doc.data(), id: doc.id, date: date};
            fbData = [data, ...fbData];
        })
        $studentState.showStudentComments = fbData;

    })

    const dsComp = {
        commentComparison: 0.1,
    }

    const viewCommentHandler = () =>
    {
        dsComp.commentComparison = outerIndex;
    }

    /** @param {any}comments delete existing comment in specific student chats id by incrementing */
    const deleteHandler = comments => 
    {
        deleteDoc(doc(collection($db, "studentComments"), comments.id))
        .then(voidResp =>
        {
            updateDoc(doc(collection($db, "studentChats"), post.id), {
                commentCount: increment(-1),
            })
        })
    }
    
</script>


<button class="w-full border-2 border-pagCoreBrown transition-all hover:font-semibold active:scale-95"
on:click={viewCommentHandler}
>
    
    {#if post.commentCount === 1} 
        {post.commentCount} Comment
    {:else if post.commentCount < 1 }
        Comment
    {:else}
        {post.commentCount} Comments
    {/if}

</button>

{#if dsComp.commentComparison === outerIndex}
    <section class="fixed bottom-0 top-0 left-0 right-0 z-10 p-2 sm:p-0 " id="colorMe">
        
        <div class="border-2 mt-[5vh] sm:max-w-xl mx-auto bg-[#e7e1da] p-2 max-h-[80vh] overflow-y-scroll" transition:scale>

            <button class="absolute bg-red-500 -ml-2 -mt-10 px-2 text-white transition-all hover:font-semibold active:scale-95"
            on:click={() => dsComp.commentComparison = 0.1}
            >Close</button>

            <div class="border-b-2 border-t-2 border-pagCoreBrown py-1">
                <p class="bg-pagCoreBrown text-white text-center font-semibold">{post.fullname}'s Post</p>
            </div>

            <section class="flex items-center gap-2 p-2">
                <img src={post.photoURL} alt="loading" class="w-14 rounded-full border-2  bg-slate-200" />
                <section>
                    <p class="font-bold font-mono">{post.fullname}</p>
                    <p class="font-mono">{post.date}</p>
                </section>
            </section>

            <p class="p-2">{post.userPost}</p>

            <!--COMMENT RENDER-->
            {#each $studentState.showStudentComments as comments}
                {#if post.originUID === comments.targetUID}
                    <section class="bg-slate-100 mt-2">
                        <section class="flex items-center gap-2 p-2">
                            <div class="w-full">
                                <img src={comments.photoURL} alt="loading" class="w-14 rounded-full border-2  bg-slate-200" />
                                <section>
                                    <p class="font-bold font-mono">{comments.fullname}</p>
                                    <p class="font-mono">{comments.date}</p>
                                </section>
                            </div>
                            {#if $auth.currentUser?.uid === comments.ownerUID || $auth.currentUser?.uid === $adminKey}
                                <div class="-mt-16">
                                    <button class="p-1 bg-red-500 text-white rounded-lg transition-all hover:font-semibold active:scale-95"
                                    on:click={() => deleteHandler(comments)}
                                    >Remove</button>
                                </div>
                            {/if}
                        </section>
                
                        <p class="p-2">{comments.userComment}</p>
                    </section>
                {/if}
            {/each}

            <section class="mt-2">
                <CommentSender {post} on:click={() => dsComp.commentComparison = 0.1}/>
            </section>

            
        </div>
    </section>
{/if}

<style>
    #colorMe{
        background-color: rgba(0, 0, 0, 0.402);
    }
</style>