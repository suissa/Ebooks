# A Gravidade


## Massa

> **Tentarei não usar o máximo possível de fórmulas matemáticas, para que eu possa fazer-lhe pensar sobre o conceito e como resolver problemas de forma mais lógica.**






> - **Quando você se “pesa” na farmácia, você sabe o que significa o resultado da balança?**

> Meu peso é claro!

> - **Perfeitamente, mas você sabe o que é o Peso? Se você acha que ele é medido em Kg já lhe aviso que errastes.**

Antes de responder essa pergunta corretamente precisamos entender o conceito de Peso.  

O Peso sempre será uma correlação entre a massa, essa medida em Kgs, e a aceleração da gravidade, por exemplo, utilizando a aceleração da gravidade da Terra como 10m/s2:

Se temos um Peso de 650N ou 65Kgf, qual será a massa desse corpo?

…

> - **Fácil né?** Não colocarei a resposta pois ela está muito na cara, caso você tenha problemas em calcular a massa automaticamente por favor veja meu conteúdo sobre: Matemática para Programadores.

Precisamos ter o Peso como o conceito de “UMA força” que possui intensidade, direção e sentido, no caso aqui na Terra sempre apontando para seu centro. Então se pesarmos o mesmo corpo aqui na Terra, 9.81/s2, e em Júpiter, 25.93m/s, independente da sua massa qual será a resposta?

Para resolvermos problemas assim é bem fácil, praticamente tudo é uma proporção de algo: quando você multiplica ou divide está criando uma proporção entre 2 ou mais números, então:

Já podemos iniciar pensando assim:

9.81 = 1 unidade
25.93 = x

X = 25.93 / 9.81
X = 2.64





Ou seja, qualquer cálculo de Peso, que fizermos para cá,e quisermos saber o mesmo resultado em Júpiter basta multiplicarmos o valor por essa proporção: 2.64

const aceleracao = { Terra: 9.82, Jupiter: 25.93 }

const calculaPeso = (massa, aceleracao) => massa * aceleracao

const calculaPesoNaTerra = (massa) =>  calculaPeso(massa, aceleracao.Terra)
const calculaPesoEmJupiterBaseadoNaTerra = (massa) =>  calculaPesoNaTerra(massa, aceleracao.Terra) * 2.64


Assim ficou mais simples de entender nossa analogia? Se não, vamos lá!

Primeiramente vamos armazenar os valores da aceleração da gravidade para a Terra e Júpiter: 
const aceleracao = { Terra: 9.82, Jupiter: 25.93 }

Para depois criarmos uma função genérica para calcular qualquer Peso:
const calculaPeso = (massa, aceleracao) => massa * aceleracao

A partir dela podemos criar funções específicas para esses cálculos passando apenas o valor da massa:
const calculaPesoNaTerra = (massa) =>  calculaPeso(massa, aceleracao.Terra)

E como estávamos falando que a mesma massa terá Peso diferente dependendo da aceleração da gravidade podemos usar aquela proporção que achamos anteriormente:
const calculaPesoEmJupiterBaseadoNaTerra = (massa) =>  calculaPesoNaTerra(massa, aceleracao.Terra) * 2.64

Caso não tivéssemos calculado a proporção anteriormente poderíamos fazer assim também:
const calculaPesoEmJupiterBaseadoNaTerra = (massa) =>  calculaPesoNaTerra(massa, aceleracao.Terra) * (aceleracao.Jupiter / aceleracao.Terra)


### Massa - Exercícios

Levando em consideração o seguinte código:

```js
const aceleracao = { Terra: 9.81, Jupiter: 25.93 }

const calculaPeso = (massa, aceleracao) => massa * aceleracao

const calculaPesoNaTerra = (massa) =>  calculaPeso(massa, aceleracao.Terra)
const calculaPesoEmJupiter = (massa) =>  calculaPeso(massa, aceleracao.Jupiter)

const calculaPesoEmJupiterBaseadoNaTerra = (massa) =>  
  calculaPesoNaTerra(massa).toFixed(2) * (aceleracao.Jupiter / aceleracao.Terra).toFixed(2)

const minhaMassaTerra = 65.00
const meuPesoTerra = calculaPesoNaTerra(minhaMassaTerra).toFixed(2)
const meuPesoJupiter = calculaPesoEmJupiterBaseadoNaTerra(minhaMassaTerra).toFixed(2)

console.log(`Minha massa na Terra é ${minhaMassaTerra}Kg, sendo meu Peso ${meuPesoTerra}N, 
calculando meu Peso em Júpiter ficará ${meuPesoJupiter}N!`) 

``` 

E a seguinte tabela:

```

Sol 27,90
Mercúrio 0,3770 
Vênus 0,9032 
Lua 0,1655 
Marte 0,3895 
Júpiter 2,640 
Saturno 1,139 
Urano 0,917 
Netuno 1,148 


```

Adicione os valores de cada aceleração da gravidade no Objeto `aceleracao`, crie 1 função específica para corpo celeste, como a `calculaPesoNaTerra` e `calculaPesoEmJupiter`, depois crie uma função que calcule qualquer peso, baseado na Terra, para qualquer outro corpo celeste, como a `calculaPesoEmJupiterBaseadoNaTerra` porém dessa vez de forma genérica chamando-se: `calculaPesoBaseadoNaTerra` que receberá 2 parâmetros:

- massa
- corpo celeste a ser calculado o Peso

```js
const calculaPesoBaseadoNaTerra = (massa, corpo) => {
  switch
}
```

*Vamos trabalhar apenas com 2 casas decimais, ou seja, qualquer resultado com mais não será aceito.*

## Densidade

## Velocidade

## Aceleração


## Newton

## Einstein

## Ondas Grav  itacionais
