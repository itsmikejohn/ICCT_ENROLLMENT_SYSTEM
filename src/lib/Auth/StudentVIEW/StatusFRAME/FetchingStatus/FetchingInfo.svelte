<script>
    import { studentState } from "$lib";
    
</script>



{#if $studentState.showFormReq.isAccepted}
    <p class="text-center font-bold">Your application is accepted!</p>

    <section class="border-[0.1rem] border-black p-2">
        <p class="font-semibold">Admin Message:</p>
        <p class="mt-1">{$studentState.showFormReq.acceptedMsg}</p>
    </section>
{:else}

    <section>
        <p class="py-1 font-semibold text-center">FormType: {$studentState.showFormReq.formType} </p>
        <p class="py-1 font-semibold text-center">Date: {$studentState.showFormReq.date} </p>
        <p class="py-1 font-semibold text-center">Status: Processing </p>
    </section>
    
    <p class="py-1 font-semibold">Fullname: </p>
    <p class="px-2 py-1 bg-white border-black border-[0.1rem]">{$studentState.showFormReq.fullname}</p>

    <p class="py-1 font-semibold">Present Address: </p>
    <p class="px-2 py-1 bg-white border-black border-[0.1rem]">{$studentState.showFormReq.presentAddress}</p>

    <p class="py-1 font-semibold">Religion: </p>
    <p class="px-2 py-1 bg-white border-black border-[0.1rem]">{$studentState.showFormReq.religion}</p>

    <p class="py-1 font-semibold">Civil Status: </p>
    <p class="px-2 py-1 bg-white border-black border-[0.1rem]">{$studentState.showFormReq.civilStatus}</p>

    <p class="py-1 font-semibold">Mobile Number: </p>
    <p class="px-2 py-1 bg-white border-black border-[0.1rem]">{$studentState.showFormReq.mobileNumber}</p>

    <p class="py-1 font-semibold">Date Of birth: </p>
    <p class="px-2 py-1 bg-white border-black border-[0.1rem]">{$studentState.showFormReq.dateOfbirth}</p>

    <p class="py-1 font-semibold">Father's Name: </p>
    <p class="px-2 py-1 bg-white border-black border-[0.1rem]">{$studentState.showFormReq.fathersName}</p>

    <p class="py-1 font-semibold">Mother's Name: </p>
    <p class="px-2 py-1 bg-white border-black border-[0.1rem]">{$studentState.showFormReq.mothersName}</p>

    <p class="py-1 font-semibold">Primary School Name: </p>
    <p class="px-2 py-1 bg-white border-black border-[0.1rem]">{$studentState.showFormReq.primarySchoolName}</p>

    <p class="py-1 font-semibold">School Address: </p>
    <p class="px-2 py-1 bg-white border-black border-[0.1rem]">{$studentState.showFormReq.primarySchoolAddress}</p>

    <p class="py-1 font-semibold">Graduated: </p>
    <p class="px-2 py-1 bg-white border-black border-[0.1rem]">{$studentState.showFormReq.primaryGraduated}</p>

    <p class="py-1 font-semibold">Secondary School Name: </p>
    <p class="px-2 py-1 bg-white border-black border-[0.1rem]">{$studentState.showFormReq.secondarySchoolName}</p>

    <p class="py-1 font-semibold">School Address: </p>
    <p class="px-2 py-1 bg-white border-black border-[0.1rem]">{$studentState.showFormReq.secondarySchoolAddress}</p>

    <p class="py-1 font-semibold">Graduated: </p>
    <p class="px-2 py-1 bg-white border-black border-[0.1rem]">{$studentState.showFormReq.secondaryGraduated}</p>
{/if}

