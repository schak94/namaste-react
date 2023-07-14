import { useRouteError } from "react-router-dom";

const ErrorComp = () => {

    const err = useRouteError();
    console.log(err)
    return ( 
        <>
        Error in Loading!
        {err.status}
        </>
     );
}
 
export default ErrorComp;