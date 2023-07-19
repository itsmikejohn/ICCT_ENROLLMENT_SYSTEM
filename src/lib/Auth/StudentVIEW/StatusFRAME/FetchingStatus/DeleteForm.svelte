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

<DsButton color="bg-red-500" title="Delete form" 
on:click={deleteFormHandler}
logic={dsComp.loader}
logic_title="Deleting."

/>