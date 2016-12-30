const aceleracao = { Terra: 9.81, Jupiter: 25.93 }

const calculaPeso = (massa, aceleracao) => massa * aceleracao

const calculaPesoNaTerra = (massa) =>  calculaPeso(massa, aceleracao.Terra)
const calculaPesoEmJupiter = (massa) =>  calculaPeso(massa, aceleracao.Jupiter)


const calculaPesoEmJupiterBaseadoNaTerra = (massa) =>  
  calculaPesoNaTerra(massa).toFixed(2) * (aceleracao.Jupiter / aceleracao.Terra).toFixed(2)

const minhaMassaNaTerra = 65.00
const meuPesoTerra = calculaPesoNaTerra(minhaMassaNaTerra).toFixed(2)
const meuPesoJupiter = calculaPesoEmJupiterBaseadoNaTerra(minhaMassaNaTerra).toFixed(2)

console.log(`Minha massa na Terra é ${minhaMassaNaTerra}Kg, sendo meu Peso ${meuPesoTerra}N, 
calculando meu Peso em Júpiter ficará ${meuPesoJupiter}N!`) 