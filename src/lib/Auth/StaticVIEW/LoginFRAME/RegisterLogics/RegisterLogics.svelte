<script>
    import { staticState } from "$lib";

    import DsInput from "$lib/GenCom/DsInput.svelte";
    import DsButton from "$lib/GenCom/DsButton.svelte";
	import DsAccord from "$lib/GenCom/DsAccord.svelte";


    /** Database calls */
    import { auth, db } from "$lib";
    import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
    import {  setDoc, doc, collection, serverTimestamp, increment } from "firebase/firestore";

    /** @type {any} it is obvs types just lazy so i put any*/
    const dsComp = {
        domMsg: "",
        loader: false,
        email: "",
        gender: "",
        password: "",
        confirmPassword: "",
        fullname: "",

    }

    /** @param {string} photoURL @param {string} gender @param {string} email @param {string} password @param {string} fullname 
     * firebase function to be called if needed
    */
    const firebaseReg = (photoURL, gender, email, password, fullname,) => 
    {
        dsComp.loader = true;
        createUserWithEmailAndPassword($auth, email, password)
        .then(userCredResp =>
        {
            updateProfile(userCredResp.user, {
                displayName: fullname,
                photoURL: photoURL,
            }).then(voidResp =>
            {
                setDoc(doc(collection($db, "registeredStudents"), userCredResp.user.uid), {
                    createdAt: serverTimestamp(),
                    ownerUID: userCredResp.user.uid,
                    fullname: fullname,
                    email: email,
                    photoURL: photoURL,
                    gender: gender,
                }, {merge:true})
                .then(voidResp =>
                {
                    setDoc(doc(collection($db, "dashboardCount"), "totalRegistered"), {total: increment(1)}, {merge:true})
                    dsComp.loader = false;
                    
                    
                })
            })
        })
        .catch(errorResp =>
        {
            dsComp.domMsg = errorResp.code;
            dsComp.loader = false;
        })
    }

    const registerHandler = () =>
    {
        let photoURL = "";
        const gender = dsComp.gender.title;
        const email = dsComp.email.bindthis;
        const password = dsComp.password.bindthis;
        const confirmPassword = dsComp.confirmPassword.bindthis;
        const fullname = dsComp.fullname.bindthis;

        if(confirmPassword === password)
        {
            if((gender === "Male" || gender === "Female") && fullname.trim().length > 4)
            {
                gender === "Male" ? photoURL = $staticState.gender.boy[Math.round(Math.random()*8)] 
                : photoURL = $staticState.gender.girl[Math.round(Math.random()*8)];

                firebaseReg(photoURL, gender, email, password, fullname);
            }else
            {
                dsComp.domMsg = "Invalid gender or fullname"
                
            }
        }else
        {
            dsComp.domMsg = "Password not same"
        }
    }


</script>

<p class="text-center text-pagCoreRed font-mono">{dsComp.domMsg}</p>

<DsAccord title="Gender" array_data={["Male", "Female"]} 
bind:this={dsComp.gender}
/>

<DsInput type="text" label="Fullname:" placeholder="Enter your fullname"
bind:this={dsComp.fullname}
/>

<DsInput type="email" label="Email:" placeholder="Enter your email"
bind:this={dsComp.email}
/>

<DsInput type="password" label="Password:" placeholder="Enter your password"
bind:this={dsComp.password}
/>

<DsInput type="password" label="Confirm password:" placeholder="Confirm your password"
bind:this={dsComp.confirmPassword}
/>

<DsButton title="Register" 
on:click={registerHandler}
logic={dsComp.loader}
logic_title="Registering."
/>