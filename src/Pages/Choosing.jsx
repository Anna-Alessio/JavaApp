import MainLayout from "../Layouts/MainLayout"
import Button from "../Components/Atoms/Button"
import BackButton from "../Components/Atoms/BackButton"
import ChoosingHeader from "../Components/Organisms/ChoosingHeader"
export default function Choosing() {

return(

<>

        <MainLayout 


            header={

                
                <ChoosingHeader
                
                    title="PhotoArt"
                    paragraph="Scopri emozioni uniche: sfoglia l'album e lasciati ispirare"
                
                
                >

                    <span className="text-secondario dark:text-white">Fotografa 

                    <span className="text-primario dark:text-quaternario"> Istanti</span>

                    </span>

                </ChoosingHeader>


            }



        >

        

   
    <div className="flex mt-10 justify-around">

        <Button to="/choosing/bnero">B/N</Button>

        <Button to="/choosing/colori">COLORI</Button>

       
            {/* NON MI SPAZIA I BOTTONI NONOSTANTE HO INSERITO LE ISTRUZIONI NEL DIV */}
        
            {/* <button>

            <a href=""></a>

            <p>B/N</p>

            </button>

            <button>

            <a href=""></a>

            <p>COLORI</p>
        
            </button> */}


    </div>





</MainLayout>

</>

)   
}