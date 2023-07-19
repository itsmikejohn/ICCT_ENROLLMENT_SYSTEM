<script>
	import DsButton from "$lib/GenCom/DsButton.svelte";
    import { auth,db } from "$lib";
	import { addDoc, collection, doc, updateDoc, serverTimestamp, setDoc, increment } from "firebase/firestore";

    /** @type {any} */
    export let post;

    const dsComp = {
        loader: false,
        showBtn: false,
        postValue: "",
    }
	
    const detectKey = () => dsComp.postValue.trim().length > 1 ? dsComp.showBtn = true : dsComp.showBtn = false;

    const commentSender = () =>
    {
        const userComment = dsComp.postValue;
        dsComp.postValue = "";
        detectKey();

        /** Sending comment to specific student chat id and updating it by adding its id itself to compare in frontend and incrementing comment count */
        updateDoc(doc(collection($db, "studentChats"), post.id), {
            originUID: post.id,
            commentCount: increment(1),
        })
        .then(voidResp =>
        {
            addDoc(collection($db, "studentComments"), {
                createdAt: serverTimestamp(),
                targetUID: post.id,
                ownerUID: $auth.currentUser?.uid,
                photoURL: $auth.currentUser?.photoURL,
                fullname: $auth.currentUser?.displayName,
                email: $auth.currentUser?.email,
                userComment: userComment,
            })
            
            
        })
    }

   

</script>

<section class="border-t-2 border-black">
    <input type="text" placeholder="Say something." class="w-full p-2 focus:outline-none bg-[#191830] text-white" 
    on:keyup={detectKey}
    bind:value={dsComp.postValue}
    />

    <section class="flex gap-1 mt-2">
        {#if dsComp.showBtn}
            <DsButton title="Send" 
            logic={dsComp.loader}
            logic_title="Sending."
            on:click={commentSender}
            />
        {/if}
        <DsButton color="bg-pagCoreRed" title="Cancel" on:click/>
    </section>
</section>