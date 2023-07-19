<script>
    import { studentState } from "$lib";
    
</script>

<section>
    <p class="py-1 font-semibold text-white text-center">FormType: {$studentState.showFormReq.formType} </p>
    <p class="py-1 font-semibold text-white text-center">Date: {$studentState.showFormReq.date} </p>
    <p class="py-1 font-semibold text-white text-center">Status: {#if $studentState.showFormReq.isAccepted} <b class="bg-green-500">Accepted</b> {:else} Processing {/if} </p>
</section>

<p class="py-1 font-semibold text-white">Fullname: </p>
<p class="px-2 py-1 bg-white">{$studentState.showFormReq.fullname}</p>

<p class="py-1 font-semibold text-white">Present Address: </p>
<p class="px-2 py-1 bg-white">{$studentState.showFormReq.presentAddress}</p>

<p class="py-1 font-semibold text-white">Religion: </p>
<p class="px-2 py-1 bg-white">{$studentState.showFormReq.religion}</p>

<p class="py-1 font-semibold text-white">Civil Status: </p>
<p class="px-2 py-1 bg-white">{$studentState.showFormReq.civilStatus}</p>

<p class="py-1 font-semibold text-white">Mobile Number: </p>
<p class="px-2 py-1 bg-white">{$studentState.showFormReq.mobileNumber}</p>

<p class="py-1 font-semibold text-white">Date Of birth: </p>
<p class="px-2 py-1 bg-white">{$studentState.showFormReq.dateOfbirth}</p>

<p class="py-1 font-semibold text-white">Father's Name: </p>
<p class="px-2 py-1 bg-white">{$studentState.showFormReq.fathersName}</p>

<p class="py-1 font-semibold text-white">Mother's Name: </p>
<p class="px-2 py-1 bg-white">{$studentState.showFormReq.mothersName}</p>

<p class="py-1 font-semibold text-white">Primary School Name: </p>
<p class="px-2 py-1 bg-white">{$studentState.showFormReq.primarySchoolName}</p>

<p class="py-1 font-semibold text-white">School Address: </p>
<p class="px-2 py-1 bg-white">{$studentState.showFormReq.primarySchoolAddress}</p>

<p class="py-1 font-semibold text-white">Graduated: </p>
<p class="px-2 py-1 bg-white">{$studentState.showFormReq.primaryGraduated}</p>

<p class="py-1 font-semibold text-white">Secondary School Name: </p>
<p class="px-2 py-1 bg-white">{$studentState.showFormReq.secondarySchoolName}</p>

<p class="py-1 font-semibold text-white">School Address: </p>
<p class="px-2 py-1 bg-white">{$studentState.showFormReq.secondarySchoolAddress}</p>

<p class="py-1 font-semibold text-white">Graduated: </p>
<p class="px-2 py-1 bg-white">{$studentState.showFormReq.secondaryGraduated}</p>
