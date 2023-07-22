<script>
    export let title = "btn";
    export let logic = false;
    export let logic_title = "loading";
    export let color = "bg-pagCoreBlue";
    export let security = false;

</script>

<!--@component
This button made accepts title - button title, logic - loader boolean, logic_title - loader title, color - button color.

-->

<button class="w-full px-2 py-1 {color} text-white transition-all hover:opacity-60 active:scale-95" disabled={security}
on:click
>
    {#if logic}
        <div class="flex items-center justify-center gap-1 ">
            <p>{logic_title}</p>
            <div class="w-4 h-4 border-2 border-b-pagCoreBlue rounded-full animate-spin"></div>

        </div>
    {:else}
        {title}
    {/if}
</button>