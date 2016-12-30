# A Gravidade


> **Tentarei não usar o máximo possível de fórmulas matemáticas, para que eu possa fazer-lhe pensar sobre o conceito e como resolver problemas de forma mais lógica.**


## Massa


![](https://raw.githubusercontent.com/suissa/Ebooks/master/Fisica/S%C3%A9rie%20-%20O%20Tempo/A%20Gravidade/images/peso.jpg)


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


### Massa - Para pensar

Após esse pequeno conteúdo sobre a massa e sabendo que existe a [Dualidade onda-partícula](https://pt.wikipedia.org/wiki/Dualidade_onda-corp%C3%BAsculo), para você:

> **- O que é a massa, em nível subatômico?**

Eu lhe indago isso porque antes de escrever esse conteúdo eu nunca tinha me perguntado isso e após ter lido várias coisas sobre o assunto, incluindo o livro [Uma Breve História sobre o Tempo, do Stephen Hawking](), formulei uma ideia **BEM LOUCA** sobre:

> Conhecendo a célebre equação `E=mc^2` podemos afirmar então que a Massa é uma relação entre E(energia) e c(velocidade da luz no vácuo), tudo bem?
> 
> Levando esse conceito de Energia para algo bem mais comum, você consegue "ver" mais Energia em uma bola parada ou em uma corda sendo balançada?
> 
> Provavelmente na corda correto? Não entrarei agora no assunto Energia, mas para nossa concepção é mais fácil "ver" Energia em algo que se movimenta, tem uma frequência, assim como as ondas sonoras, do mar, etc.
> 
> Agora imagine se tudo, na escala Plank, é formado por algo que possui uma frequência ressonante, porém sua massa é desprezível assim como do Elétron. Querendo ou não essa massa pode ser uma consequência de uma propriedade intrísceca à qualquer partícula do Universo, algo que posso usar para tentar basear essa ideia louca é o [Boson de Higgs](https://pt.wikipedia.org/wiki/B%C3%B3son_de_Higgs), que falarei mais no ebook sobre Modelo Padrão: 


![](https://raw.githubusercontent.com/suissa/Ebooks/master/Fisica/S%C3%A9rie%20-%20O%20Tempo/A%20Gravidade/images/higgs01.gif)

```
A partícula chamada Bóson de Higgs é de fato o quantum (partícula) 
de um dos componentes de um campo de Higgs. No espaço vazio, o 
campo de Higgs adquire um valor diferente de zero, que permeia a cada lugar 
no universo todo o tempo. Este valor da expectativa do vácuo (VEV) do campo 
de Higgs é constante e igual a 246 GeV. A existência deste VEV diferente de 
zero **tem um papel fundamental: dá a massa a cada partícula elementar, 
incluindo o próprio bóson de Higgs**.

No detalhe, a aquisição de um VEV diferente de zero quebra espontaneamente a
simetria de calibre da força eletrofraca, um fenômeno conhecido como o
mecanismo de Higgs. Este é o único mecanismo conhecido capaz de dar a massa
aos bóson de calibre (particulas transportadoras de força) que é também 
compatível com teorias do calibre.
```

![](https://raw.githubusercontent.com/suissa/Ebooks/master/Fisica/S%C3%A9rie%20-%20O%20Tempo/A%20Gravidade/images/higgs02.gif)

Eu ja conhecia seu conceito até porque usei-o na [minha metodologia de tomic Design Behavior](http://nomadev.com.br/atomic-design-b%C3%B3sons-e-quarks-extended/) conceituando-o como um placeholder, no Stylus, o qual serve para darmos propriedades para meus "atomos", confira um exemplo:

```
$bold
  font-weight bold

.title
  @extend $bold
```

Isso gerara o seguinte código:

```

.title {
  font-weight: bold;
}

```

Caso eu usasse uma *class* em vez do *placeholder* ficaria assim:

```
.bold
  font-weight bold

.title
  @extend $bold
```

Geraria isso, ocasionando o aumento do CSS pelo fato de gerar o código da class, ja no *placeholder* ele só gera o código onde é requisitado:

```
.bold,
.title{
  font-weight: bold;
}
```


Com isso entendemos que a massa que uma partícula possui advém desse tal de Bóson de Higgs, certo?? E o que ele é?

> 
> Coincidentemente acabei de encontrar uma notícia muito importante para minha dissertação: [](http://ciencia.estadao.com.br/noticias/geral,particula-sem-massa-buscada-ha-85-anos-e-criada-em-laboratorio,1726707)


> **Quero que você leia BEM essa parte da matéria:**
> 
> A equipe coordenada por Hasan vasculhou uma base de dados que tinha a descrição de um milhão de tipos de cristais e descobriu que um deles, o arsenieto de tântalo, parecia promissor.

Vamos tentar analisar como é que eles nessa mineração de dados?

> Provavelmente essa base de dados possui "objetos" que descrevem esses cristais, logo eles provavelmente definiram quais as propriedades específicas e sua faixa de valores para que fosse meramente possível a criação dessa partícula

- [https://pt.wikipedia.org/wiki/Arsenieto_de_g%C3%A1lio](https://pt.wikipedia.org/wiki/Arsenieto_de_g%C3%A1lio)
- [https://pt.wikipedia.org/wiki/T%C3%A2ntalo_(elemento_qu%C3%ADmico)](https://pt.wikipedia.org/wiki/T%C3%A2ntalo_(elemento_qu%C3%ADmico))


> **Agora imagine no futuro quando linkarmos bases gigantescas com essas com Machine Learning e for tudo OPEN SOURCE! Cada pesquisa criada utilizando-se esse sistema DEVERIA OBRIGATORIAMENTE ser liberada gratuitamente e de forma aberta.**

> Quando esse cristal especial foi bombardeado com raios de fótons de alta energia, o formato, direção e tamanho dos raios indicaram modificação no posicionamento dos elétrons que correspondia ao comportamento esperado pelo férmion de Weyl.

## Densidade

## Velocidade

## Aceleração


## Newton

## Einstein

## Ondas Grav  itacionais
