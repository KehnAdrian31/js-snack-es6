// creo array di oggetti
let bici = [
    {nome: 'Bianchi', peso: 7},
    {nome: 'Specialized', peso: 5.7},
    {nome: 'Trek', peso: 5.5}
];

let bicileggera = bici[0];

//ciclo array
for( let i = 0; i < bici-length; i++){
  //controllo quale bici pesa di meno
  if(bici[i].peso < bicileggera.peso){
    biciLeggera = bici[i];
  }
}