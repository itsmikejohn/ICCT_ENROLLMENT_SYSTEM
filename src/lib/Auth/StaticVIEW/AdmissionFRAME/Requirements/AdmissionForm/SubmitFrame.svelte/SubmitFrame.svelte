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
     * @param {any[]} studentFile @param {string} course @param {string} fullname @param {string} presentAddress @param {string} religion
     * @param {string} civilStatus @param {string} mobileNumber @param {string} dateOfbirth @param {string} fathersName @param {string} mothersName
     * @param {string} primarySchoolName @param {string} primarySchoolAddress @param {string} primaryGraduated @param {string} secondarySchoolName 
     * @param {string} secondarySchoolAddress @param {string} secondaryGraduated
    */
    const firebaseSubmitForm = (
        course, 
        fullname, presentAddress, 
        religion, civilStatus, mobileNumber, 
        dateOfbirth, fathersName, mothersName, 
        primarySchoolName, primarySchoolAddress, primaryGraduated,
        secondarySchoolName, secondarySchoolAddress, secondaryGraduated) =>
    {
        dsComp.loader = true;
        setDoc(doc(collection($db, "submittedForms"), $auth.currentUser?.uid ), {
            createdAt: serverTimestamp(),
            isAccepted: false,
            formType: require.name,
            course: course,
            fullname: fullname,
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
        }, {merge:true})
        .then(voidResp => 
        {
            dsComp.loader = false;
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
        const fullname = $studentState.fullname.bindthis;
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
            fullname.trim().length > 4 &&
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
            firebaseSubmitForm(course, 
            fullname, presentAddress, 
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
        <div class="sm:max-w-[400px] mx-auto p-2 mt-[10vh] bg-slate-400 border-2 border-pagCoreBrown" transition:fly={{y:-300, duration:500}}>
            <p class="text-center ">You can't submit with unfinish fields. Make sure to answer fields correclty no troll!!</p>
            <DsButton title="Ok" on:click={() => dsComp.showError = false}/>
        </div>

        
    </section>
{/if}

<DsButton 
title="Submit"
logic={dsComp.loader}
logic_title="Sending."
on:click={handleSubmit}
/>

