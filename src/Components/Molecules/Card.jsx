export default function Card({name , img}) {



    return(

            
            
            <>
            
            <div className="w-1/3 md:w-1/2 flex flex-wrap justify-center dark:bg-terziario">
                
                
                <div className="container w-[100%] md:w-[50%] bg-primario dark:bg-quaternario h-44 m-3 md:h-60 flex flex-col justify-center items-center">

                <h2 className="text-center text-secondario dark:text-white">{name}</h2>
                <img className="w-[100%] md:w-[50%] rounded-md" src={img} />
                <p className="text-center text-secondario dark:text-white">photoart.com</p>

            </div>

            </div>
            
            </>



    )
    
}