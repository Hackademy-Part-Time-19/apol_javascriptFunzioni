
let listaProdotti = [
    {
        id: 1,
        nome: "Iphone",
        prezzo: 1000,
    },
    {
        id: 2,
        nome: "Mac",
        prezzo: 3000,
    },

    {
        id: 3,
        nome: "Scrivania",
        prezzo: 200,
    },
    {
        id: 4,
        nome: "Lampadari",
        prezzo: 600,
    },
]

//Lista Alfanumerica
let listaOrdinataNome= listaProdotti.sort(function(prodotto1,prodotto2) {
    if (prodotto1.nome < prodotto2.nome)
    return -1;
  if (prodotto1.nome > prodotto2.nome)
    return 1;
  return 0;

})
console.log(listaOrdinataNome);


//Lista Prezzo
console.log("prezzo");

let listaOrdinataPrezzo= listaProdotti.sort(function(prodotto1,prodotto2) {
   return (prodotto1.prezzo - prodotto2.prezzo)

})
console.log(listaOrdinataPrezzo);



//Funzione filter
let listafiltrata= listaProdotti.filter((prodotto)=> prodotto.prezzo >250)
console.log(listafiltrata);




//Funzione normale filter

function filtra(listaProdotti) {

    let listafiltrata=[];
    for (let i = 0; i < listaProdotti.length; i++) {
     if (listaProdotti[i].prezzo >250) {
        listafiltrata.push(listaProdotti [i]);
     }
        
    }
    return listafiltrata;
}
let listafiltrata=filtra(listaProdotti);
console.log(listafiltrata);
