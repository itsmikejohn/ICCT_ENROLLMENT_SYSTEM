<script>
	import { scale } from "svelte/transition";
    import Fetching from "./FetchingStatus/Fetching.svelte";
</script>

<main in:scale>
    <Fetching />
</main>