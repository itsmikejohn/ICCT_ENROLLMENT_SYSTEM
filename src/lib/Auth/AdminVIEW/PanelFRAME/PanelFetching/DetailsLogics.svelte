<script>
	import { adminState } from "$lib";
	import DsButton from "$lib/GenCom/DsButton.svelte";

    /** @type {any} */
    export let form;

    const backHandler = () =>
    {
        $adminState.showDetails = false;
        $adminState.panelComparison = 0.1;
    }


</script>

<section class="fixed bottom-0 top-0 left-0 right-0 z-10 p-2 sm:p-0 bg-[#1d2021F8]">
    <section class="min-h-[20vh] border-[0.1rem] border-black mx-auto sm:max-w-xl mt-[10vh] bg-gradient-to-r from-white to-blue-500 p-2 flex flex-col gap-2"
    >
        <p class="text-center px-2 py-1 border-[0.1rem] border-black  bg-gradient-to-l from-yellow-500 to-black text-white font-semibold"
        >Form Details of ## {form.fullname}</p>

        <section class="border-[0.1rem] border-black flex flex-col gap-2 p-2 max-h-[50vh] overflow-y-scroll">

            <div class="">
                <p class="font-bold">UID:</p>
                <p>{form.studentUID}</p>
            </div>

            <div class="">
                <p class="font-bold">Email:</p>
                <p>{form.email}</p>
            </div>

            <div class="">
                <p class="font-bold">Fullname:</p>
                <p>{form.fullname}</p>
            </div>

            <div class="">
                <p class="font-bold">Present Address:</p>
                <p>{form.presentAddress}</p>
            </div>

            <div class="">
                <p class="font-bold">Religion:</p>
                <p>{form.religion}</p>
            </div>

            <div class="">
                <p class="font-bold">Civil Status:</p>
                <p>{form.civilStatus}</p>
            </div>

            <div class="">
                <p class="font-bold">Mobile Number:</p>
                <p>{form.mobileNumber}</p>
            </div>

            <div class="">
                <p class="font-bold">Date Of Birth:</p>
                <p>{form.dateOfbirth}</p>
            </div>

            <div class="">
                <p class="font-bold">Father's Fullname:</p>
                <p>{form.fathersName}</p>
            </div>

            <div class="">
                <p class="font-bold">Mother's Fullname:</p>
                <p>{form.mothersName}</p>
            </div>

            <div class="">
                <p class="font-bold">Primary School Name:</p>
                <p>{form.primarySchoolName}</p>
            </div>

            <div class="">
                <p class="font-bold">Primary School Address:</p>
                <p>{form.primarySchoolAddress}</p>
            </div>

            <div class="">
                <p class="font-bold">Year Graduated:</p>
                <p>{form.primaryGraduated}</p>
            </div>

            <div class="">
                <p class="font-bold">Secondary School Name:</p>
                <p>{form.secondarySchoolName}</p>
            </div>

            <div class="">
                <p class="font-bold">Secondary School Address:</p>
                <p>{form.primarySchoolAddress}</p>
            </div>

            <div class="">
                <p class="font-bold">Year Graduated:</p>
                <p>{form.secondaryGraduated}</p>
            </div>

            
        </section>

        <section class="flex gap-1">
            <DsButton title="Back" on:click={backHandler}/>
        </section>
    </section>
</section>

<style>
    /* width */
    ::-webkit-scrollbar {
        width: 10px;
    }

    
        
    /* Handle */
    ::-webkit-scrollbar-thumb {
        background: rgba(0, 13, 255, 0.512); 

    }
</style>