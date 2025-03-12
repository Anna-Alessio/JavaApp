import { useNavigate } from "react-router-dom"


export default function BackButton(params) {


const navigate = useNavigate()

function back() {

    navigate(-1)
    
}

return(

        <>

        <button onClick={back}className="bg-primario dark:bg-quaternario mt-4 w-12 h-12 rounded-full ms-8 flex items-center justify-center">
        <i class="fa-solid fa-arrow-left text-secondario dark:text-white text-3xl"></i>

        </button>

        </>

    )    
}