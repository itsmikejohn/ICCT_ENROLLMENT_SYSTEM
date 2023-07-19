<svelte:options accessors />

<script>
// @ts-nocheck

    import DsButton from "$lib/GenCom/DsButton.svelte";
	import { slide } from "svelte/transition";
    /** @type {string} */
    export let forms;



    const dsComp = {
        showMenu: false,
    }

    const showMenu = () => dsComp.showMenu = !dsComp.showMenu;

    const approveHandler = () =>
    {

    }

</script>

<button class="flex items-center px-2 py-1 w-full text-left bg-white font-mono"
on:click={showMenu}
>   
    <div class="w-full">
        <p>{forms.fullname}</p>
    </div>

    <div class="">
        <div class="border-b-2 border-r-2 h-2 w-2 border-black rotate-45"></div>
    </div>
</button>

{#if dsComp.showMenu}
    <nav class=" mt-1 bg-white p-4" in:slide>
        <p class="py-1 font-semibold ">Status: </p>
        <p class="px-2 py-1 ">{#if forms.isAccepted} <b class="bg-green-500">Accepted</b> {:else} Processing {/if}</p>

        <p class="py-1 font-semibold ">Date submitted: </p>
        <p class="px-2 py-1 ">{forms.date}</p>

        <p class="py-1 font-semibold ">Form Type: </p>
        <p class="px-2 py-1 ">{forms.formType}</p>

        <p class="py-1 font-semibold ">Course: </p>
        <p class="px-2 py-1 ">{forms.course}</p>

        <p class="py-1 font-semibold ">Fullname: </p>
        <p class="px-2 py-1 ">{forms.fullname}</p>

        <p class="py-1 font-semibold ">Present Address: </p>
        <p class="px-2 py-1 ">{forms.presentAddress}</p>

        <p class="py-1 font-semibold ">Religion: </p>
        <p class="px-2 py-1 ">{forms.religion}</p>

        <p class="py-1 font-semibold ">Civil Status: </p>
        <p class="px-2 py-1 ">{forms.civilStatus}</p>

        <p class="py-1 font-semibold ">Mobile Number: </p>
        <p class="px-2 py-1 ">{forms.mobileNumber}</p>

        <p class="py-1 font-semibold ">Date Of birth: </p>
        <p class="px-2 py-1 ">{forms.dateOfbirth}</p>

        <p class="py-1 font-semibold ">Father's Name: </p>
        <p class="px-2 py-1 ">{forms.fathersName}</p>

        <p class="py-1 font-semibold ">Mother's Name: </p>
        <p class="px-2 py-1 ">{forms.mothersName}</p>

        <p class="py-1 font-semibold ">Primary School Name: </p>
        <p class="px-2 py-1 ">{forms.primarySchoolName}</p>

        <p class="py-1 font-semibold ">School Address: </p>
        <p class="px-2 py-1 ">{forms.primarySchoolAddress}</p>

        <p class="py-1 font-semibold ">Graduated: </p>
        <p class="px-2 py-1 ">{forms.primaryGraduated}</p>

        <p class="py-1 font-semibold ">Secondary School Name: </p>
        <p class="px-2 py-1 ">{forms.secondarySchoolName}</p>

        <p class="py-1 font-semibold ">School Address: </p>
        <p class="px-2 py-1 ">{forms.secondarySchoolAddress}</p>

        <p class="py-1 font-semibold ">Graduated: </p>
        <p class="px-2 py-1 ">{forms.secondaryGraduated}</p>

        <section class="flex gap-1 m-2">
            <DsButton title="Approve" />
            <DsButton color="bg-red-500" title="Cancel"/>
        </section>
    </nav>
{/if}