<script>
    import "../app.css";

    import { studentState } from "$lib";
    import { auth, storage } from "$lib";
    import { getDownloadURL, ref, listAll } from "firebase/storage";
	
    listAll(ref($storage, $auth.currentUser?.uid))
    .then(imageResp =>
    {

        imageResp.items.forEach(itemRef =>
        {   
            /** Get user specific file storage link to fetch in front end */
            getDownloadURL(ref($storage, itemRef.fullPath))
            .then(resp =>
            {
                if(!$studentState.showImagesReq.includes(resp))
                {
                    $studentState.showImagesReq.push(resp)

                }
            
            })
            
            console.log($studentState.showImagesReq.length)
        })

        
    })
</script>

<slot />