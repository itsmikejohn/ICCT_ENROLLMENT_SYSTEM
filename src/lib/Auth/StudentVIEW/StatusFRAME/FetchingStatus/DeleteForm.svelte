<script>
    import { studentState } from "$lib";

    import { auth, db, storage } from "$lib";
    import { collection, deleteDoc, doc } from "firebase/firestore";
    import { ref, deleteObject, listAll} from "firebase/storage";

    const dsComp = {
        loader: false,
    }

    const deleteFormHandler = () =>
    {
        dsComp.loader = true;
        deleteDoc(doc(collection($db, "submittedForms"), $auth.currentUser?.uid))
        .then(voidResp =>
        {
            listAll(ref($storage, $auth.currentUser?.uid))
            .then(listResp =>
            {
                listResp.items.forEach(item =>
                {
                    dsComp.loader = false;
                    deleteObject(ref($storage, item.fullPath));
                    $studentState.showImagesReq = [];
                })
            })
            
        })
        dsComp.loader = false;
    }

    import DsButton from "$lib/GenCom/DsButton.svelte";
</script>

<DsButton color="bg-red-500" title="Delete form" 
on:click={deleteFormHandler}
logic={dsComp.loader}
logic_title="Deleting."

/>