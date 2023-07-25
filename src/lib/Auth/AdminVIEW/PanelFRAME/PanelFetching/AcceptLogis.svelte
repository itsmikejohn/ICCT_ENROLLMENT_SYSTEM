<script>
    import { auth, db } from "$lib";
    import { updateDoc, doc, collection } from "firebase/firestore";

	import { adminState } from "$lib";
	import DsButton from "$lib/GenCom/DsButton.svelte";

    /** @type {any} */
    export let form;

    const dsComp = {
        loader: false,
        domMsg: "",
        textValue: "",
    }

    const cancelHandler = () =>
    {
        $adminState.showAccept = false;
        $adminState.panelComparison = 0.1;
    }

    const acceptHandler = () =>
    {
        dsComp.loader = true;
        const textValue = dsComp.textValue;
        updateDoc(doc(collection($db, "submittedForms"), form.id), {
            isAccepted: true,
            acceptedMsg: textValue,
        })
        .then( voidResp =>
        {
            dsComp.loader = false;
            cancelHandler();
        })

    }

</script>

<section class="fixed bottom-0 top-0 left-0 right-0 z-10 p-2 sm:p-0 bg-[#1d2021F8]">
    <section class="min-h-[20vh] border-[0.1rem] border-black mx-auto sm:max-w-xl mt-[10vh] bg-gradient-to-r from-white to-blue-500 p-2 flex flex-col gap-2"
    >
        <p class="text-center px-2 py-1 border-[0.1rem] border-black  bg-gradient-to-l from-yellow-500 to-black text-white font-semibold"
        >Annotate This Student ## {form.fullname}</p>

        <section>
            <textarea placeholder="Ex, Congratulation your application is accepted. Your gclass code is #696969GG." class="w-full focus:outline-none border-[0.1rem] border-black h-20 p-2" bind:value={dsComp.textValue}/>
        </section>

        <section class="flex gap-1">
            <DsButton color="from-green-500 to-green-700" title="Submit and Accept" logic={dsComp.loader} logic_title="Submitting." security={dsComp.loader}
            on:click={acceptHandler}
            />
            
            <DsButton color="from-red-500 to-red-700" title="Cancel" on:click={cancelHandler}/>
        </section>
    </section>
</section>