// **Consegna:**
//    Scrivi un programma che stampi in console i numeri da 1 a 100,
//    ma che per i multipli di 3 stampi “Fizz” al posto del numero e per i multipli di 5 stampi “Buzz”.
//    Per i numeri che sono sia multipli di 3 che di 5 stampi “FizzBuzz”.

//    **Prima di partire a scrivere codice poniamoci qualche domanda:**

//    Come faccio a sapere se un numero è divisibile per un altro?
//    Abbiamo visto qualcosa di particolare che possiamo usare?

//    **Consigli del giorno:**
//    1. Scriviamo sempre prima dei commenti in italiano per capire cosa vogliamo fare
//    2. Proviamo ad immaginare le operazioni che vogliamo far svolgere al nostro programma così come lo faremmo "a mano"

//    **BONUS 1:**
//    Crea un container nel DOM , aggiungendo un elemento html con il numero o la stringa corretta da mostrare.

//    **BONUS 2:**
//    Applica stili differenti agli elementi aggiunti al DOM nel *BONUS 1*, a seconda che il valore inserito sia un numero, un fizz, un buzz o un fizzbuzz.
//    Se sei a corto di idee per lo stile, potresti prendere spunto dallo screenshot fornito in consegna.


// milestone 1

// Input

// LOGICA
// for (let i = 1; i<=100; i++) {
//     let fizz = i % 3; 
//     let buzz = i % 5;
//     let fizzbuzz = i % (3 * 5); //penso abbia senso dichiarare in minimo comune multiplo tra loro e specificare il resto
//     // console.log (fizz, buzz, fizzbuzz, typeof fizz, typeof buzz, typeof fizzbuzz)
   
//     if ((i=>3) && (fizz === 0) && (buzz !== 0)){
//         console.log(i, "è FIZZ in quanto divisibile per 3");

//     }else if ((i=>5) && (buzz === 0) && (fizz !== 0)){
//         console.log(i, "è BUZZ in quanto divisibile per 5");

//     }else if ((fizz === 0) && (buzz === 0)){
//         console.log(i, "è FIZZBUZZ in quanto divisibile sia per 3 che per 5");

//     }else{
//         console.log (i);
        
//     }
    

    
// }


// Output

// #####################################################################################

// MILESTONE 2

// input

const wrap = document.querySelector(".d-flex");
console.log(wrap, typeof wrap);
let i;

// LOGICA

for (let i = 1; i<=100; i++) {
    let fizz = i % 3; 
    let buzz = i % 5;
    let fizzbuzz = i % (3 * 5); //penso abbia senso dichiarare in minimo comune multiplo tra loro e specificare il resto
    // console.log (fizz, buzz, fizzbuzz, typeof fizz, typeof buzz, typeof fizzbuzz)
   
    if ((i=>3) && (fizz === 0) && (buzz !== 0)){
        console.log(i, "è FIZZ in quanto divisibile per 3");

    }else if ((i=>5) && (buzz === 0) && (fizz !== 0)){
        console.log(i, "è BUZZ in quanto divisibile per 5");

    }else if ((fizz === 0) && (buzz === 0)){
        console.log(i, "è FIZZBUZZ in quanto divisibile sia per 3 che per 5");

    }else{
        console.log (i);
        
    }
    
    // OUTPUT
    
    wrap.innerHTML += `<div class="box">${i}</div>`
    
}
