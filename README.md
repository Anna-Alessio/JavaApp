Step per avviare un progetto di sito/app web con react e vite.
(In questa spiegazione salto i passaggi di istallazione di node dando per scontato che sia già istallata.)
- Aprire Powershell
- Andare sul sito di React (https://it.legacy.reactjs.org/) cliccare su "inizia qui" e copiare il codice:

npm create vite@latest

- Eseguire le istruzioni inserendo il nome del progetto e il nome del package, inserendo come impostazioni Framework "React" e Linguaggio "Javascript".

- scrivere cd nomedellacartella del progetto

- Eseguire il comando: 

npm install

- Attendere il completamento dell'istallazione e avviare il progetto su visual studio code attraverso il comando:

code .

- Accedere al terminale in versione abbraviata premendo ctrl+j ed eseguire il comando:
npm run dev

per visualizzare l'anteprima della pagina web.

- Una volta verificata la corretta visualizzazione del "LocalHost" si procede con la pulizia dei file svg e delle pagine "app.css" e "index.css" e di rinominare il documento e togliere l'icona della pagina web su index.html e il contenuto delle soap tag e degli elementi di react da App.jsx

- Effettuata la pulizia dei files si procede all'istallazione di Tailwind

- Andare sul sito: https://tailwindcss.com/docs/guides/vite (se non si segue il percorso di questo indirizzo andare su documentazione - vite) e copiare i seguenti codici:

Sul terminale aprire una nuova pagina per istallare i pacchetti Tailwind incollando il seguente codice:
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p

- Copiare il seguente (al posto della scritta content) codice nel file che si crea chiamato: tailwind.config.js e salvare.

codice:

content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],

- Andare su index.css e copiare e salvare:

@tailwind base;
@tailwind components;
@tailwind utilities;

- Andare su App.jsx e incollare il seguente codice:

<h1 className="text-3xl font-bold underline">
      Hello world!
    </h1>

- Eseguire il npm run dev nel terminale e verificare se la scritta coincide con i comandi di tailwind.

- Una volta svolti i seguenti passaggi di base per tutte le configurazioni (di siti e app) avviare l'anteprima se si visualizza la scritta con le caratteristiche indicate da tailwind l'istallazione è pulita e si può procedere.

Procedimento per ISTALLAZIONE DEL ROUTER

- Cercare su google la frase: react router dom 

Tra i risultati di ricerca i siti di documentazione da utilizzare sono 2:

- Su: https://www.npmjs.com/package/react-router-dom
dobbiamo incollare il codice per istallare il dom di React nel Terminale in nuova pagina: 

npm i react-router-dom

- Ceare la cartella "router" in "src"
- Nella cartella "router" creare un file router.jsx 

- Andare su https://reactrouter.com/ e più esattamente su https://reactrouter.com/6.28.2/routers/create-browser-router

E importare la scritta: createBrowserRouter

Così:
import { createBrowserRouter } from "react-router-dom" (si importa automaticamente)

- sempre nella stessa pagina creare una constante così:

const router = createBrowserRouter ([

{

    path: "/",
    element: <App></App>

}

])

ASSICURARSI CHE APP SIA STATO IMPORTATO NELLA STESSA PAGINA IN ALTO ALTRIMENTI IMPORTARLO MANUALMENTE SENNO' NON SI VISUALIZZA NIENTE.

Poi esportare il router e sempre nella stessa pagina sotto le parentesi chiuse scrivere così:

export default router 

- Chiudere la pagina router

- Andare nella pagine main.jsx per installare RouterProvider quindi scrivere:

import { RouterProvider } from 'react-router-dom' (si importa in automatico)

- Al posto di <App/> cancellare e inserire in <StrictMode>
la scritta <RouterProvider + nome del file dove si prendono gli alementi + la constante/>

QUINDI: <RouterProvider router={router}/>

Salviamo.

- Importare l'elemento router sempre in alto nella stessa pagina così:
import router from "./router/router.jsx"

- Eliminare import di App.jsx

- Creare le cartelle di Atomic Design e Iniziare il progetto.

Cartelle:
src/Components/Atoms
src/Components/Molecules
src/Components/Organisms
src/Layouts
src/Pages

- Spostare App.jsx in Pages

- Rinominare (se si vuole) ricordando di modificare il nome anche in function (ma io non lo farò perché non mi si illumina.) e poi eventualmente si cambia il nome andare a cambiarlo anche nel router.

- Quando sposto la pagina in pages per evitare che non si veda nulla nel localhost, assicurarmi di essere andata in router e modificare il percorso nell'import della pagina, sennò non la trova per leggerla. (ps. cancellare import di App.css).

- App.css la userò per inserire gli elementi tipo i font, le tavole colori, i testi ecc.

- Come importare google font: copiare il codice del font in index html, poi andare in Tailwind config e copiare le proprietà in questo modo:

 fontFamily : {

      "sans" : ["nome font","serif"]
    },

ipostazione colori: 

DOMANDA, MA SOLO IN RGB SI POSSONO INSERIRE I CODICI? E SE NO, COME SI INSERISCONO GLI ALTRI TIPI DI CODICE COLORE?

extend: {
      colors: {

        primario:"rgb(230, 218, 93)",
        secondario:"rgb(71, 71, 71)",
  
  
        // Colori dark mode
        terziario:"rgb(0, 14, 41)",
        quaternario:"rgb(4, 104, 101)"

      }
 }


Per importare elementi da flowbite come in questo caso farò con la gallery devo prima importarmi le CDN di flowbite come da istruzioni di: https://flowbite.com/docs/getting-started/quickstart/

In questo caso mi ha aiutata Nicola dell'assistenza e mi ha fatto solo inserire le cdn nel codice index.html e sembra funzionare.




