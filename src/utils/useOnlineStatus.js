import { useEffect, useState } from "react";

const useOnlineStatus = () => {
    //Check if online
    //Use the browser functions to check if website is online using browser window online event
    //It has an event listner: MDN Docs - Window Online event
    const [onlineStatus, setOnlineStatus] = useState(true);
    useEffect(() => {

        window.addEventListener("online", (event) => {
            setOnlineStatus(true);
        });

        window.addEventListener("offline", (event) => {
            setOnlineStatus(false);
        });
        //ononline = (event) => {};

    }, []);

    //Boolean value
    return onlineStatus;
}

export default useOnlineStatus;