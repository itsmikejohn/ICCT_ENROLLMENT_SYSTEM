<script>
    import DsInput from "$lib/GenCom/DsInput.svelte";
    import DsButton from "$lib/GenCom/DsButton.svelte";

    /**Database calls*/
    import { auth, db } from "$lib";
    import { sendPasswordResetEmail } from "firebase/auth";

    /** @type {any} lazy to declare types*/
    const dsComp = {
        domMsg: "",
        loader: false,
        email: "",
    }

    const recoveryPassHandler = () =>
    {
        const email = dsComp.email.bindthis;
        dsComp.loader = true;
        sendPasswordResetEmail($auth, email)
        .then(voidResp =>
        {
            dsComp.domMsg = "Successs check your email";
            dsComp.loader = false;
        })
        .catch(errorResp =>
        {
            dsComp.domMsg = errorResp.code;
            dsComp.loader = false;
        })
    }

</script>

<p class="text-center text-pagCoreRed font-mono">{dsComp.domMsg}</p>

<DsInput type="email" label="Email:" placeholder="Enter your email"
bind:this={dsComp.email}
/>
        
<DsButton 
title="Send Password Reset"
logic={dsComp.loader}
logic_title="Sending."
on:click={recoveryPassHandler}
/>