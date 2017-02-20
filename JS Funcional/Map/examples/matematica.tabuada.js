const calcularTabuada = ( num ) => 
  Array.from({ length: 10 }, (e,i) => (i+1) * num )

const numeros = [ 3, 4, 5, 6, 7, 8, 9 ]

const tabuada = numeros.map( calcularTabuada )
console.log('tabuada: \n', tabuada)