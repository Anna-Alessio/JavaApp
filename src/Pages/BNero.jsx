import BackButton from "/src/components/atoms/BackButton"
import Card from "../Components/Molecules/Card";
export default function BNero(params) {


    let cards = [

        { id:1, name: "Girasoli", img: "/src/assets/media/bn1.jpeg" },
        { id:2, name: "Paesaggio", img: "/src/assets/media/bn2.jpeg" },
        { id:3, name: "Bimba", img: "/src/assets/media/bn3.jpeg" },
        { id:4, name: "Donna", img: "/src/assets/media/bn4.jpeg" },
        { id:5, name: "Fiore", img: "/src/assets/media/bn5.jpeg" },
        { id:6, name: "Bicicletta", img: "/src/assets/media/bn6.jpeg" },


    ];


return(

    <>
            {/* FRECCIA, TITOLO PAGINA E ICONA */}

     <header>
        
        <BackButton/>

        <h1 className="text-3xl font-semibold text-secondario dark:text-white mt-5 mb-10">Foto in Bianco e nero 

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
