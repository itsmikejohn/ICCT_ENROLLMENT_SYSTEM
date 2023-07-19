<script>
    import { staticState } from "$lib";

    import DsInput from "$lib/GenCom/DsInput.svelte";
    import DsButton from "$lib/GenCom/DsButton.svelte";

    /** database calls */
    import { auth, db } from "$lib";
    import { signInWithEmailAndPassword } from "firebase/auth";
    import { collection, doc, increment, updateDoc } from "firebase/firestore";

    /** @type {any} */
    const dsComp = {
        domMsg: "",
        loader: false,
        email: "",
        password: "",
    }
    
    const loginHandler = () =>
    {
        const email = dsComp.email.bindthis;
        const password = dsComp.password.bindthis;

        dsComp.loader = true;
        signInWithEmailAndPassword($auth, email, password)
        .then(userCredResp =>
        {
            updateDoc(doc(collection($db, "registeredStudents"), userCredResp.user.uid), {
                ownerUID: userCredResp.user.uid,
                fullname: userCredResp.user.displayName,
                email: userCredResp.user.email,
                photoURL: userCredResp.user.photoURL,
                loginCount: increment(1),
            })

            dsComp.loader = false;
        })
        .catch(errorResp =>
        {
            dsComp.loader = false;
            dsComp.domMsg = "Invalid email or password"
        })
    }


</script>

<p class="text-center text-pagCoreRed font-mono">{dsComp.domMsg}</p>

<DsInput type="email" label="Email:" placeholder="Enter your email"
bind:this={dsComp.email}
/>

<DsInput type="password" label="Password:" placeholder="Enter your password"
bind:this={dsComp.password}
/>

<DsButton title="Login"
logic={dsComp.loader}
logic_title="Logging."
on:click={loginHandler}
/>