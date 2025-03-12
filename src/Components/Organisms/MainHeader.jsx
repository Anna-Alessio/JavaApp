export default function MainHeader({title , subtitle}) {


    return(


            <>
            
            
            <header className="text-center dark:bg-terziario">

                {/* LOGO */}
                <img className="mx-auto max-w-sm" src="./src/assets/media/logo1.png" alt="" />
                {/* LOGO */}
                
                
                {/* TITOLO */}
                <h1 className="text-2xl font-normal text-secondario dark:text-white dark:bg-terziario">{title}<i class="fa-solid fa-camera-retro text-primario dark:text-quaternario"></i></h1>
                {/* TITOLO */}


                {/* FRASE A EFFETTO COMBINATA */}
                <h3 className="text-xl mt-2 text-secondario dark:text-white">{subtitle}</h3>
                 {/* FRASE A EFFETTO COMBINATA */}
                 
              </header>



            </>



    )
    
}
