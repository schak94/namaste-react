import { createBrowserRouter} from "react-router-dom";
import AppLayout from "../App";
import Body from "../components/body";
import About from "../components/about";
import Contact from "../components/contact";
import ErrorComp from "../components/error";
import ResturntMenu from "../components/resturantMenu";
import CartComponent from "../components/cart";

const appRouter = createBrowserRouter([

    {
        path:"/",
        element:<AppLayout/>,
        children:[
            {
            index:"/",
            element:<Body/>
            },
            {
                path:"/about",
                element:<About/>
            },
            {
                path:"/contact",
                element:<Contact/>
            },
            {
                path:"/resturant/:resId",
                element:<ResturntMenu/>
            },
            {
                path:"/cart",
                element:<CartComponent/>
            }
        ],
        errorElement:<ErrorComp/>
    }

])

export default appRouter;