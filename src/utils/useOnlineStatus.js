import { useEffect, useState } from "react";

const useOnlineStatus = () => {
    const [onLineStatus, setOnlineStatus] = useState(true);

    useEffect(()=>{
        window.addEventListener("online", ()=>{
            setOnlineStatus(true);
        })
        window.addEventListener("offline", ()=>{
            setOnlineStatus(false);
        })

        return ()=>{
           // window.removeEventListener("online");
        }
    },[])

    return onLineStatus;
}
 
export default useOnlineStatus;