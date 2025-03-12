import { useState } from "react"

export default function DMButton(params) {

    const [ darkMode , setDarkMode ] = useState(false)

    function Mode(params) {

        setDarkMode(!darkMode)
        document.querySelector("html").classList.toggle("dark")
        
    }

    return(

            <>
            
            
            
                <button onClick={Mode} className="bg-primario dark:bg-quaternario text-secondario dark:text-white w-12 h-12 rounded-full mt-20">
                    <i class="fa-solid fa-circle-half-stroke"></i>
                </button>
            
            </>





    )
    
}