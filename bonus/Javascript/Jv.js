
/*

Dato un array di oggetti letterali con: - url dell’immagine - titolo - descrizione
Creare un carosello come nella foto allegata.

    bonus: aggiunta immagini Thumbnail 

*/


//Svolgimento

const items = document.getElementsByClassName ('carousel-item');

const ind = document.getElementsByClassName ('ind');

let activeItem = 0;

const next = document.querySelector(".carousel-control-next");

const prev = document.querySelector(".carousel-control-prev");


//creo l'array di oggetti che saranno inseriti nel mio carosello
const ItemCarousel = [

    {
        "titolo": "Marvel\'s Spiderman Miles Morale",
        "descrizione": "Experience the rise of Miles Morales as the new hero masters incredible, <br> explosive new powers to become his own Spider-Man.",
        "url":"img/01.webp",
        "numero" : "uno"
    },

    {
        "titolo": "Ratchet & Clank: Rift Apart",
        "descrizione": "Go dimension-hopping with Ratchet and Clank <br> as they take on an evil emperor from another reality.",
        "url":"img/02.webp",
        "numero" : "due"
    },

    {
        "titolo": "Fortnite",
        "descrizione": "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - <br> off that combines looting, crafting, shootouts and chaos.",
        "url":"img/03.webp",
        "numero" : "tre"
    },

    {
        "titolo": "Stray",
        "descrizione": "Lost, injured and alone, a stray cat must untangle an ancient mystery <br> to escape a long-forgotten city",
        "url":"img/04.webp",
        "numero" : "quattro"
    },

    {
        "titolo": "Marvel's Avengers",
        "descrizione": "Marvel\'s Avengers is an epic, third-person, action-adventure game that combines <br> an original, cinematic story with single-player and co-operative gameplay.",
        "url":"img/05.webp",
        "numero" : "cinque"
    }

];


function Population(){

    //imposto la variabile i a zero
    let i = 0;

    //imposto un filtro sul mio array di oggetti
    ItemCarousel.filter ((index) => {
    
       
        //creo una variabile per l'inserimetno dei dati in pagina
        let data = 0;

            //se l'indice è il numero uno setto attiva l'immagine
            if (index.numero === "uno"){

                //acquisisco l'url dell'immagine destra di tipo"Thumbnail" dell'oggetto successivo a questo
                const imgD = ItemCarousel.slice(-1)[0].url;

                //acquisisco l'url dell'immagine sinistra di tipo"Thumbnail" dell'oggetto precedente a questo
                const imgS = ItemCarousel.slice(1)[0].url;
                
                data = `<div class="carousel-item active">

                <img src="${index.url}" alt="immagine carosel">

                <div class="textBox">
                    <h5>${index.titolo}</h5>
                    <p>${index.descrizione}</p>
                </div>

                <a target="_blank" href="${imgS}" class="ThumbnailD">
                <img src="${imgS}" alt="immagine carosel">
                </a>

                <a target="_blank" href="${imgD}" class="ThumbnailS">
                <img src="${imgD}" alt="immagine carosel">
                </a>

                </div>`;

            }
            //altrimenti
            else{

                let imgD ;

                let imgS ;
             
                //se arrivo all'ultima immagine ricomincio
                if(i==3)
                {
                    //acquisisco l'url dell'immagine destra di tipo"Thumbnail" dell'oggetto successivo a questo
                    imgD = ItemCarousel.slice(0)[0].url;
                   
                    //acquisisco l'url dell'immagine sinistra di tipo"Thumbnail" dell'oggetto precedente a questo
                    imgS = ItemCarousel.slice(i)[0].url;
                }

                //altrimenti
                else{

                    imgD = ItemCarousel.slice(i+2)[0].url;

                    imgS = ItemCarousel.slice(i)[0].url;
                }
               
              
                data = `<div class="carousel-item">

                <img src="${index.url}" alt="immagine carosel">

                <div class="textBox">
                    <h5>${index.titolo}</h5>
                    <p>${index.descrizione}</p>
                </div>

                <a target="_blank" href="${imgD}" class="ThumbnailD">
                <img src="${imgD}" alt="immagine carosel">
                </a>

                <a target="_blank" href="${imgS}" class="ThumbnailS">
                <img src="${imgS}" alt="immagine carosel">
                </a>

                </div>`;

                i++

            }
            
            document.getElementById ('containerC').innerHTML += data;

        });
      
}


//chiamo funzione popolamento
Population();

// Se clicco la freccia di destra, scorrerrà in avanti
next.addEventListener('click',

            function () {

                if(activeItem <= items.length - 1){
                   
                    //Togliamo la classe active dall'elemento corrente
                    items[activeItem].classList.remove ('active');
                    ind[activeItem].classList.remove ('active');

                    //incremento l'indice
                    activeItem++;
                    
                    //siamo arrivati all'ultimo elemento
                    if (activeItem == items.length ){

                        activeItem = 0;
                    }


                    //aggiungo la classe active al nuovo elemento
                    items[activeItem].classList.add('active');
                    ind[activeItem].classList.add ('active');

                }


            }
);

// Se clicco la freccia di sinistra, scorrerrà in dietro
prev.addEventListener('click',

            function () {

                if(activeItem <= items.length - 1){

                    //Togliamo la classe active dall'elemento corrente
                    items[activeItem].classList.remove ('active');
                    ind[activeItem].classList.remove ('active');

                    if (activeItem === 0) {
                    
                        activeItem = items.length;

                    }

                    if (activeItem === items.length -2){

                        //torniamo indietro al penultimo elemento
                         next.classList.remove ('hidden');
                        
                     }


                    //decremento l'indice
                    activeItem--;

                    //aggiungo la classe active al nuovo elemento
                    items[activeItem].classList.add('active');
                    ind[activeItem].classList.add ('active');

                
                }

            }

);