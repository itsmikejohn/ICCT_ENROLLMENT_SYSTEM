<script>
// @ts-nocheck

    import { auth, db } from "$lib";
	import { collection, doc, increment, updateDoc } from "firebase/firestore";


    
    export let post;
    
    /** updating student chats specific id by adding auth uid to avoid multiple like increment */
    const likesHandler = () =>
    {
        
        updateDoc(doc(collection($db, "studentChats"), post.id), {
            [$auth.currentUser?.uid] : $auth.currentUser?.uid,
            likeCount: increment(1),
        })
    }

    /** updating student chats specific id by adding auth uid to avoid multiple negvative increment */
    const dislikeHandler = () =>
    {
        updateDoc(doc(collection($db, "studentChats"), post.id), {
            [$auth.currentUser?.uid] : "",
            likeCount: increment(-1),
        })
    }
</script>

{#if post[$auth.currentUser.uid] === $auth.currentUser.uid}
    <button class="w-full border-[0.1rem]  transition-all hover:border-[0.13rem] border-black bg-gradient-to-br from-green-400 to-green-200 hover:font-semibold active:scale-95 "
    on:click={dislikeHandler}
    >
       {post.likeCount} Liked
    </button>
    
{:else}
    <button class="w-full border-[0.1rem]  transition-all hover:border-[0.13rem] border-black bg-gradient-to-br from-white to-green-200 hover:font-semibold active:scale-95"
    on:click={likesHandler}
    >
    {#if post.likeCount === 1} 
    {post.likeCount} Like
    {:else if post.likeCount < 1 }
        Like
    {:else}
        {post.likeCount} Likes
    {/if}

    </button>
{/if}