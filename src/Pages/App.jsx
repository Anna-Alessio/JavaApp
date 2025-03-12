import Button from "../Components/Atoms/Button"
import DMButton from "../Components/Atoms/DMButton"
import MainHeader from "../Components/Organisms/MainHeader"
import MainLayout from "../Layouts/MainLayout"

export default function App() {
  

  return (
    <>
        
        <MainLayout>

            {/* HEADER */}
                  <MainHeader
                  
                  title="PhotoArt "
                  subtitle={
                    <>
                     <span>
                      </span> <span className="text-primario dark:text-quaternario"> Scatta. </span>
                      Esplora. Crea Emozioni.

                      <span/>

                    </>
                  }
                  />
                    {/* DARK MODE BUTTON */}
                  <DMButton></DMButton>
                    {/* DARK MODE BUTTON */}

                  {/* DIV BOTTONE */}
                  <div className="mt-10">

                     <Button to="/choosing">
                      
                      Album

                     </Button>

                    </div>
                    
                 {/* DIV BOTTONE */}

        </MainLayout>

    
    </>
  )
}

