<svelte:options accessors />

<script>
    export let label = ""
    export let bindthis = "";
    export let type = "text";
    export let placeholder = "sample"
</script>
<!--@component This component takes label as title, bindthis as bind:value, type as input type, placeholder as input placeholder -->
{#if type === "text"}
    <section>
        <p class="py-1 font-semibold">{label}</p>
        <input type="text"  {placeholder} class="w-full px-2 py-1 focus:outline-none font-mono  border-[0.1rem] border-[#292929f0] " 
        bind:value={bindthis}
        />
    </section>
{:else if type === "email"}
    <section>
        <p class="py-1 font-semibold">{label}</p>
        <input type="email"  {placeholder} class="w-full px-2 py-1 focus:outline-none font-mono  border-[0.1rem] border-[#292929f0]" 
        bind:value={bindthis}
        />
    </section>
{:else if type === "password"}
    <section>
        <p class="py-1 font-semibold">{label}</p>
        <input type="password"  {placeholder} class="w-full px-2 py-1 focus:outline-none font-mono border-[0.1rem] border-[#292929f0]" 
        bind:value={bindthis}
        />
    </section>
{:else if type === "number"}
    <section>
        <p class="py-1 font-semibold">{label}</p>
        <input type="number"  {placeholder} class="w-full px-2 py-1 focus:outline-none font-mono" 
        bind:value={bindthis}
        />
    </section>
{:else if type === "date"}
    <section>
        <p class="py-1 font-semibold">{label}</p>
        <input type="date" class="w-full px-2 py-1 focus:outline-none font-mono" 
        bind:value={bindthis}
        />
    </section>
{/if}
