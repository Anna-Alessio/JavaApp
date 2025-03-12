import Card from "../Components/Molecules/Card";
import BackButton from "/src/Components/Atoms/BackButton";

export default function Colori(params) {


    let cards = [

        { id:1, name: "Paesaggio", img: "/src/assets/media/cl1.jpeg" },
        { id:2, name: "Paesaggio", img: "/src/assets/media/cl2.jpeg" },
        { id:3, name: "Paesaggio", img: "/src/assets/media/cl3.jpeg" },
        { id:4, name: "Paesaggio", img: "/src/assets/media/cl4.jpeg" },
        { id:5, name: "Paesaggio", img: "/src/assets/media/cl5.jpeg" },
        { id:6, name: "Paesaggio", img: "/src/assets/media/cl6.jpeg" },


    ];

    return(


            <>
             {/* FRECCIA, TITOLO PAGINA E ICONA */}
            
                 <header>
                    
                    <BackButton></BackButton>
            
                    <h1 className="text-3xl font-semibold text-secondario dark:text-white mt-5 mb-10">Foto in versione Colori
            
                     <i class="fa-solid fa-camera-retro text-primario dark:text-quaternario ms-2"></i>
            
                    </h1>
            
                 </header>
            
                        {/* FRECCIA, TITOLO PAGINA E ICONA */}

                    
        {/* CARD QUANDO INSERISCO LE PERCENTUALI L'IMMAGINE SI RIMPICCIOLISCE quindi ho messo 100%*/}

        <div className="h-[100vh] flex flex-wrap justify-center">


        {
                
         cards.map( ( card )=>{
                
        return(
                
        <Card
        key={card.id}
        name={card.name}
        img={card.img}
                                             
        >
                
                
                
        </Card>
                
        )
                
    })
                
}


 </div>
        


            </>
    )   
}