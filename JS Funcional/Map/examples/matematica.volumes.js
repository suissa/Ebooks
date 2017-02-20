const calcularVolume = ( forma ) => Object.assign( {}, forma, { volume: forma.largura * forma.comprimento * forma.altura })

const forma1 = { largura: 2, comprimento: 2, altura: 2 }
const forma2 = { largura: 12, comprimento: 5, altura: 6 }
const forma3 = { largura: 33, comprimento: 7, altura: 5 }
const forma4 = { largura: 50, comprimento: 10, altura: 20 }

const formas = [ forma1, forma2, forma3, forma4 ]

const volumes = formas.map( calcularVolume )
console.log('volumes', volumes)
/*
[ { largura: 2, comprimento: 2, altura: 2, volume: 8 },
  { largura: 12, comprimento: 5, altura: 6, volume: 360 },
  { largura: 33, comprimento: 7, altura: 5, volume: 1155 },
  { largura: 50, comprimento: 10, altura: 20, volume: 10000 } ]
*/