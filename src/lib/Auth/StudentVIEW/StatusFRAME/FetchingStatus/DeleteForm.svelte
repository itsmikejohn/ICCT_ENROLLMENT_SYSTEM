<script>
    import { studentState } from "$lib";

    import { auth, db, storage } from "$lib";
    import { collection, deleteDoc, doc } from "firebase/firestore";

    const dsComp = {
        loader: false,
    }

    const deleteFormHandler = () =>
    {
        deleteDoc(doc(collection($db, "submittedForms"), $auth.currentUser?.uid))
    }

    import DsButton from "$lib/GenCom/DsButton.svelte";
</script>

{#if !$studentState.showFormReq.isAccepted}
    <DsButton color="from-red-500 to-red-700" title="Delete form" 
    on:click={deleteFormHandler}
    logic={dsComp.loader}
    logic_title="Deleting."
    />
{/if}