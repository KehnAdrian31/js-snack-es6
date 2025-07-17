// creo array di oggetti
let bici = [
    {nome: 'Bianchi', peso: 7},
    {nome: 'Cannondale', peso: 5.7},
    {nome: 'Colnago', peso: 5.5}
];

let biciLeggera = bici[0];

//ciclo array
for( let i = 0; i < bici.length; i++){
  //controllo quale bici pesa di meno
  if(bici[i].peso < biciLeggera.peso){
    biciLeggera = bici[i];
  }
}

// stampo risultato
console.log(`La bici più leggera è la ${biciLeggera.nome} con un peso di ${biciLeggera.peso} kg.`)