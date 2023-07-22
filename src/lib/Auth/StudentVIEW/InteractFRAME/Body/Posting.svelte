<script>
    import { studentState } from "$lib";
    import DsButton from "$lib/GenCom/DsButton.svelte";
    import { scale } from "svelte/transition";

    /** database calls */
    import { auth, db } from "$lib";
    import { addDoc, collection, serverTimestamp } from "firebase/firestore";

    const dsComp = {
        loader: false,
        showBtn: false,
        postValue: "",
    }
	
    const detectKey = () => dsComp.postValue.trim().length > 1 ? dsComp.showBtn = true : dsComp.showBtn = false;
    
    const postingHandler = () =>
    {
        const userChat = dsComp.postValue;
        dsComp.postValue = "";
        detectKey();
        dsComp.loader = true;
        addDoc(collection($db, "studentChats"), {
            createdAt: serverTimestamp(),
            ownerUID: $auth.currentUser?.uid,
            photoURL: $auth.currentUser?.photoURL,
            fullname: $auth.currentUser?.displayName,
            email: $auth.currentUser?.email,
            userPost: userChat,
            commentCount: 0,
            likeCount: 0,
        })
        .then(docRefResp =>
        {
            dsComp.loader = false;
            $studentState.showPoster = false;
        })
    }

	

</script>

<main class=" sm:max-w-lg mx-auto mt-[10vh] p-2 border-[0.1rem] border-black rounded-lg bg-gradient-to-r from-white to-blue-100" transition:scale>
    <section class="flex items-center gap-2 p-2">
        <img src={$auth.currentUser?.photoURL} alt="loading" class="w-14 rounded-full border-2  bg-slate-200" />
        <section>
            <p class="font-bold font-mono">{$auth.currentUser?.displayName}</p>
            <p class="font-mono">{$auth.currentUser?.email}</p>
        </section>
    </section>

    <textarea class="w-full focus:outline-none p-2 border-[0.1rem] border-black" 
    placeholder={"Say something, " + $auth.currentUser?.displayName}
    on:keyup={detectKey} 
    bind:value={dsComp.postValue}/>

    <section class="flex gap-1 mt-2">
        {#if dsComp.showBtn}
            <DsButton title="Post" 
            logic={dsComp.loader}
            logic_title="Posting."
            on:click={postingHandler}
            />
        {/if}
        <DsButton color="bg-red-500" title="Cancel" on:click={() => $studentState.showPoster = false}/>
    </section>
    
</main>