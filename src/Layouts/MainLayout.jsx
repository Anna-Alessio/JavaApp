import { Outlet } from "react-router-dom"

export default function MainLayout({header, children}) {

return(



    <>
    
        <div className="h-screen bg-white dark:bg-terziario flex flex-col items-center">

            {header}
            {children}
            <Outlet/>


        </div>
    </>


    )    
}