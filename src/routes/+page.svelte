<script>
    import { adminKey, staticState } from "$lib";
    import AuthSwitch from "$lib/Auth/AuthSwitch.svelte";

    /** Database calls */
    import { auth, db } from "$lib";
    import { onAuthStateChanged } from "firebase/auth";
	import Nav from "$lib/Auth/StaticVIEW/NavFRAME/Nav.svelte";
	import Footer from "$lib/GenCom/Footer.svelte";
	import { onMount } from "svelte";

    console.log("created by www.youtube.com/@mikeSharesCode")
    onMount(() =>
    {
        onAuthStateChanged($auth, userCredResp =>
        {
            if(userCredResp)
            {
                if(userCredResp.uid === $adminKey)
                {
                    $staticState.activeItem = "Patch Notes";
                    $staticState.defaultNav = $staticState.adminNav;
                    $staticState.hadAdmin = true;
                    $staticState.hadStudent = false;

                }else
                {
                    $staticState.activeItem = "Admission";
                    $staticState.defaultNav = $staticState.studentNav;
                    $staticState.hadAdmin = false;
                    $staticState.hadStudent = true;
                }

            }else
            {
                $staticState.activeItem = "Home";
                $staticState.defaultNav = $staticState.staticNav;
                $staticState.hadAdmin = false;
                $staticState.hadStudent = false;
            }
        })
    })
</script>

<main>
    <Nav array_data={$staticState.defaultNav}/>
    <AuthSwitch />
    <Footer />
</main>