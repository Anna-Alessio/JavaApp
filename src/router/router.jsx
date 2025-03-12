import { createBrowserRouter } from "react-router-dom";
import App from "../Pages/App";
import Choosing from "../Pages/Choosing"
import BNero from "../Pages/BNero";
import MainLayout from "../Layouts/MainLayout";
import Colori from "../Pages/Colori";

const router = createBrowserRouter ( [

{

    path: "/",
    element: <App></App>

},

{

        path: "/choosing",
        element: <MainLayout/>,
        children: [

            {
                path:"/choosing",
                element:<Choosing/>

            },

            {
                path: "/choosing/bnero",
                element:<BNero/>
            
            },
            {
                path: "/choosing/colori",
                element:<Colori/>
            
            },


        ]



}

])

export default router 