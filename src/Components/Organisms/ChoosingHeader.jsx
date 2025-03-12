import BackButton from "../Atoms/BackButton";


export default function ChoosingHeader({children , paragraph , title}) {

return(


    <>
    
     <header className="text-center dark:bg-terziario">
    
            <BackButton/>
    
            <h3 className="text-2xl mb-3 text-white ">{children}
    
    
            </h3>
    
            <img className="mx-auto max-w-sm border-primario dark:border-quaternario p-3 rounded-3xl" src="./src/assets/media/grafica.jpg" alt="" />
    
            <p className="px-6 text-2xl text-secondario dark:text-white text-center">{paragraph} </p>  
    
    
            <h1 className="text-3xl font-semibold text-secondario dark:text-white mt-3">{title} <i class="fa-solid fa-camera-retro text-primario dark:text-quaternario"></i></h1>
    
        </header>
        
        
    
    
    
    </>



    )    
}