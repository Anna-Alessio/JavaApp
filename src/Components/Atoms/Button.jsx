import { Link } from "react-router-dom"
export default function Button({ to , children  }) {




    return(



<>


    <button className="font-semibold text-secondario dark:text-white w-40 mt-20 bg-primario dark:bg-quaternario py-3 rounded-3xl shadow-lg">
                       
        <Link to={to}>

            <p className="text-secondario dark:text-white text-1xl font-bold">

        {children}
        
        
         </p>

        </Link>                   
    </button>
                      


</>




    )
    
}