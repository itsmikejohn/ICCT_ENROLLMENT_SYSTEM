<script>
    import { studentState } from "$lib";
    
</script>

{#each $studentState.showFormReq as info}

<section>
    <p class="py-1 font-semibold text-white text-center">FormType: {info.formType} </p>
    <p class="py-1 font-semibold text-white text-center">Date: {info.date} </p>
    <p class="py-1 font-semibold text-white text-center">Status: {#if info.isAccepted} Accepted {:else} Processing {/if} </p>
</section>

<p class="py-1 font-semibold text-white">Fullname: </p>
<p class="px-2 py-1 bg-white">{info.fullname}</p>

<p class="py-1 font-semibold text-white">Present Address: </p>
<p class="px-2 py-1 bg-white">{info.presentAddress}</p>

<p class="py-1 font-semibold text-white">Religion: </p>
<p class="px-2 py-1 bg-white">{info.religion}</p>

<p class="py-1 font-semibold text-white">Civil Status: </p>
<p class="px-2 py-1 bg-white">{info.civilStatus}</p>

<p class="py-1 font-semibold text-white">Mobile Number: </p>
<p class="px-2 py-1 bg-white">{info.mobileNumber}</p>

<p class="py-1 font-semibold text-white">Date Of birth: </p>
<p class="px-2 py-1 bg-white">{info.dateOfbirth}</p>

<p class="py-1 font-semibold text-white">Fathers Name: </p>
<p class="px-2 py-1 bg-white">{info.fathersName}</p>

<p class="py-1 font-semibold text-white">Primary School Name: </p>
<p class="px-2 py-1 bg-white">{info.primarySchoolName}</p>

<p class="py-1 font-semibold text-white">School Address: </p>
<p class="px-2 py-1 bg-white">{info.primarySchoolAddress}</p>

<p class="py-1 font-semibold text-white">Graduated: </p>
<p class="px-2 py-1 bg-white">{info.primaryGraduated}</p>

<p class="py-1 font-semibold text-white">Secondary School Name: </p>
<p class="px-2 py-1 bg-white">{info.secondarySchoolName}</p>

<p class="py-1 font-semibold text-white">School Address: </p>
<p class="px-2 py-1 bg-white">{info.secondarySchoolAddress}</p>

<p class="py-1 font-semibold text-white">Graduated: </p>
<p class="px-2 py-1 bg-white">{info.secondaryGraduated}</p>
{/each}
