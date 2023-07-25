<script>
    import { studentState } from "$lib";
    import { fly } from "svelte/transition";
	import DsButton from "$lib/GenCom/DsButton.svelte";
    import { tick } from "svelte";

    /** database calls */
    import { auth, db, storage } from "$lib";
    import { collection, doc, serverTimestamp, setDoc, } from "firebase/firestore";


    /** @type {any} */
    export let require;

    const dsComp = {
        loader: false,
        showError: false,

    }
    
    /** firebase submit form function 
     * @param {string} course @param {string} presentAddress @param {string} religion
     * @param {string} civilStatus @param {string} mobileNumber @param {string} dateOfbirth @param {string} fathersName @param {string} mothersName
     * @param {string} primarySchoolName @param {string} primarySchoolAddress @param {string} primaryGraduated @param {string} secondarySchoolName 
     * @param {string} secondarySchoolAddress @param {string} secondaryGraduated
    */
    const firebaseSubmitForm = (
        course, presentAddress, 
        religion, civilStatus, mobileNumber, 
        dateOfbirth, fathersName, mothersName, 
        primarySchoolName, primarySchoolAddress, primaryGraduated,
        secondarySchoolName, secondarySchoolAddress, secondaryGraduated) =>
    {
        dsComp.loader = true;
        setDoc(doc(collection($db, "submittedForms"), $auth.currentUser?.uid ), {
            createdAt: serverTimestamp(),
            email: $auth.currentUser?.email,
            studentUID: $auth.currentUser?.uid,
            photoURL: $auth.currentUser?.photoURL,
            formType: require.name,
            course: course,
            fullname: $auth.currentUser?.displayName,
            presentAddress: presentAddress,
            religion: religion,
            civilStatus: civilStatus,
            mobileNumber: mobileNumber,
            dateOfbirth: dateOfbirth,
            fathersName: fathersName,
            mothersName: mothersName,
            primarySchoolName: primarySchoolName,
            primarySchoolAddress: primarySchoolAddress,
            primaryGraduated: primaryGraduated,
            secondarySchoolName: secondarySchoolName,
            secondarySchoolAddress: secondarySchoolAddress,
            secondaryGraduated: secondaryGraduated,
            isAccepted: false,
            acceptedMsg: "",
        }, {merge:true})
        .then(voidResp => 
        {
            dsComp.loader = false;
            $studentState.comparison = 0.1;
        })
        .catch(errorResp =>
        {
            console.log(errorResp)
            dsComp.showError  = true;
            dsComp.loader = false;
            
        })
        
        
    }

    const handleSubmit = () =>
    {
        const course = $studentState.course;
        const presentAddress = $studentState.presentAddress.bindthis;
        const religion = $studentState.religion.bindthis;
        const civilStatus = $studentState.civilStatus.bindthis;
        const mobileNumber = $studentState.mobileNumber.bindthis;
        const dateOfbirth = $studentState.dateOfbirth.bindthis;
        const fathersName = $studentState.fathersName.bindthis;
        const mothersName = $studentState.mothersName.bindthis;
        const primarySchoolName = $studentState.primarySchoolName.bindthis;
        const primarySchoolAddress = $studentState.primarySchoolAddress.bindthis;
        const primaryGraduated = $studentState.primaryGraduated.bindthis;
        const secondarySchoolName = $studentState.secondarySchoolName.bindthis;
        const secondarySchoolAddress = $studentState.secondarySchoolAddress.bindthis;
        const secondaryGraduated = $studentState.secondaryGraduated.bindthis;

       if(
            course.trim().length > 16 && 
            presentAddress.trim().length > 4 && 
            religion.trim().length > 3 && 
            civilStatus.trim().length > 3 &&
            mobileNumber.trim().length > 6 && 
            dateOfbirth.trim().length > 3 && 
            fathersName.trim().length > 4 &&
            mothersName.trim().length > 4 && 
            primarySchoolName.trim().length > 4 &&
            primarySchoolAddress.trim().length > 4 &&
            primaryGraduated.trim().length > 3 &&
            secondarySchoolName.trim().length > 4 &&
            secondarySchoolAddress.trim().length > 4 &&
            secondaryGraduated.trim().length > 3
       )
       {
            firebaseSubmitForm(course, presentAddress, 
            religion, civilStatus, mobileNumber, 
            dateOfbirth, fathersName, mothersName, 
            primarySchoolName, primarySchoolAddress, primaryGraduated,
            secondarySchoolName, secondarySchoolAddress, secondaryGraduated );
       }else
       {
            dsComp.showError = true;
       }

    }


</script>

{#if dsComp.showError}
    <section class="fixed bottom-0 top-0 left-0 right-0  z-10 p-2 sm:p-0">
        <div class="sm:max-w-fit  border-[0.1rem] border-[#292929f0] mx-auto mt-[10vh] p-4 flex flex-col gap-4 bg-gradient-to-r from-[#22180d] to-yellow-900 rounded-lg " transition:fly={{y:-300, duration:500}}>
            <p class="text-center text-red-500 font-bold">You can't submit with unfinish fields. Make sure to answer fields correclty no troll!!</p>
            <DsButton title="Ok" on:click={() => dsComp.showError = false}/>
        </div>

        
    </section>
{/if}

<DsButton 
title="Submit"
security={dsComp.loader}
logic={dsComp.loader}
logic_title="Sending."
on:click={handleSubmit}
/>

