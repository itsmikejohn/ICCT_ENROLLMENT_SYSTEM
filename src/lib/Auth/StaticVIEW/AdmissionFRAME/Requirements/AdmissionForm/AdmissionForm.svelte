<script>
    import { studentState } from "$lib";
    import DsInput from "$lib/GenCom/DsInput.svelte";
	import CourseAccordion from "./CourseAccordion.svelte";
    
     /** @type {any} */
    export let require
</script>

<section class="flex flex-col gap-8 ">
    <div class="py-2 flex flex-col gap-2 bg-gradient-to-l from-blue-100 to-slate-500 rounded-md p-4 mt-8">


        <p class="bg-gradient-to-r from-white to-orange-300 px-2 font-semibold text-center w-full  my-5">COURSE OFFER</p>


        <CourseAccordion {require}/>
    </div>

    <div class="py-2 flex flex-col gap-2 bg-gradient-to-l from-blue-100 to-slate-500 rounded-md p-4">
        

        <p class="bg-gradient-to-r from-white to-orange-300 px-2 font-semibold text-center w-full my-5">STUDENT INFORMATION</p>


        <DsInput label="Fullname:" placeholder="Ex, Eviota, Mike John Baguinaon"
        bind:this={$studentState.fullname}
        />
        <DsInput label="Present address:" placeholder="San Andres, Cavite, Rizal"
        bind:this={$studentState.presentAddress}
        />
        <DsInput label="Religion:" placeholder="Roman Catholic"
        bind:this={$studentState.religion}
        />
        <DsInput label="Civil status:" placeholder="Single"
        bind:this={$studentState.civilStatus}
        />
        <DsInput label="Mobile number:" placeholder="+631234567890"
        bind:this={$studentState.mobileNumber}
        />
        <DsInput type="date" label="Date of birth:"
        bind:this={$studentState.dateOfbirth}
        />
        <DsInput label="Father's fullname:" placeholder="Ex, Aguinaldo, Emilio y Famy"
        bind:this={$studentState.fathersName}
        />
        <DsInput label="Mother's fullname:" placeholder="Ex, Aguino, Melchora de Ramos"
        bind:this={$studentState.mothersName}
        />
        
    </div>

    <div class="py-2 flex flex-col gap-2 bg-gradient-to-l from-blue-100 to-slate-500 rounded-md p-4">
        

        <p class="bg-gradient-to-r from-white to-orange-300 px-2 font-semibold text-center w-full my-5">EDUCATION INFORMATION</p>


        <DsInput label="Primary school name:" placeholder="Ex, Rizal High School, Michigan Institute and Technology"
        bind:this={$studentState.primarySchoolName}
        />
        <DsInput label="School address:" placeholder="Ex, Pasig, Rizal"
        bind:this={$studentState.primarySchoolAddress}
        />
        <DsInput type="date" label="Date graduated:"
        bind:this={$studentState.primaryGraduated}
        />
        
        <DsInput label="Secondary school name:" placeholder="Ex, Rizal High School, Michigan Institute and Technology"
        bind:this={$studentState.secondarySchoolName}
        />
        <DsInput label="School address:" placeholder="Ex, Pasig, Rizal"
        bind:this={$studentState.secondarySchoolAddress}
        />
        <DsInput type="date" label="Date graduated:"
        bind:this={$studentState.secondaryGraduated}
        />
        
    </div>



    
</section>