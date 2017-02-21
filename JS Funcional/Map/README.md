# Map

> **Serve para transformar valores de um *Array*.**



![](https://raw.githubusercontent.com/Webschool-io/workshop-js-funcional-free/master/assets/images/array-map.png)


> Analisando a imagem acima podemos inferir que a ação que a função map faz é cortar cada fruta, correto?


## Pré-conhecimentos

### Array

// Escrever sobre o Array e seu prototype

### Functor

> MANOOOOOOO DO CEUUUUU! Quanta informação errada encontrei por aí sobre esse tópico, então para que você não se foda como eu irei definir da forma mais clara e lúdica possível.


Antes de tudo linkarei [esse material](http://functionaljavascript.blogspot.com.br/2013/07/functors.html) o qual eu tinha estudado antes e apenas agora entendo os erros que ele contem.

Para iniciar esse conceito precisamos saber de onde vem esse *Functor*, pois bem, ele vem da Matemática, de algo chamado **Teoria das Categorias**. Se você já ouviu falar sobre meus parabéns! Pois mesmo nas 2 faculdades de Informática que fiz e tive Matemática **PARA CARALEO** eu não vi essa porra.

### Teoria das Categorias

**Depois que comecei a estudar Funcional e conheci a Teoria das Categorias me apaixonei logo de cara!** Pois além de ser uma área da Matemática que eu nem sabia que existia ela ainda é *abstrata* e a programação Funcional simplesmente é baseada nela.

Você deve perguntar-se:

> **\- Baseada nela como???**

Antes de lhe responder isso quero que você leia essa definição:

> A teoria das categorias é uma teoria matemática que trata de forma abstrata das estruturas matemáticas e dos relacionamentos entre elas. É conhecida, em parte como brincadeira, como "generalização do sem-sentido abstrato". 

**Aposto que quem criou essa brincadeira da "generalização do sem-sentido abstrato" nunca imaginaria que todo um paradigma de programação seria baseada nela**, até porque ela foi primeiramente apresentada por Samuel Eilenberg e Saunders Mac Lane em 1945, ou seja, bem antes do Haskell. :p

Se você já ouviu falar sobre Matemática Discreta já sabe qual a base em que a Teoria das Categorias baseou-se, ela é uma generalização da teoria dos conjuntos, porém nela são estudados objetos e os morfismos entre eles.

Caso a palavra `objeto` tenha te lembrado Orientação a Objetos, **ESQUEÇA ISSO!** Entretanto podemos entender esses objetos como conjuntos estruturados.

Agora esse tal de morfismo acredito que nem você e nem eu conhecíamos antes, contudo seu conceito é **muito simples**, só para facilitar saiba que ele também pode ser chamado de setas, isso te lembra algo??

> **\- Arrow function tio Suissa???** =>
>
> ORRRAAAA!!! Botei fé em você hein!

Pois os morfismos são exatamente as funções entre os conjuntos

> Teoria das categorias pode ser entendida como um "jogo de setas", em que se abstrai o significado das construções.

O mais interessante é que a única operação exigida em uma categoria é a **composição**. Composição em categorias é uma generalização da composição de funções da teoria dos conjuntos.

Só para entendermos o conceito em sua completude vamos relembrar o que é [composição de funções](https://pt.wikipedia.org/wiki/Composi%C3%A7%C3%A3o_de_fun%C3%A7%C3%B5es)


> Em matemática, uma função composta é criada aplicando uma função à saída, ou resultado, de uma outra função, sucessivamente.

Para entender melhor esse conceito podemos lê-lo facilmente assim: ![](https://wikimedia.org/api/rest_v1/media/math/render/svg/d0f547d768439ec5b53744c552a39908cf8dd63e)

<br>
<br>
<br>
<br>
<br>

![](http://geradormemes.com/media/created/321oat.jpg)


<br>
<br>
<br>
<br>
<br>

> **Brinks!** Olhe aí embaixo que deve clarear-lhe a mente.


<br>
<br>
<br>

<div style="text-align: center">
  <img style="text-align: center" src="https://upload.wikimedia.org/wikipedia/commons/6/68/Compfun.png" />
</div>

<br>
<br>

> Percebeu que a função inicial é a `f(x)` e depois vem a `g`?
> 
> Por que você acha que iniciou na `f` e não na `g`, como vimos nessa imagem? 
> 
> ![](https://wikimedia.org/api/rest_v1/media/math/render/svg/d0f547d768439ec5b53744c552a39908cf8dd63e)

<br>
<br>
<br>

Assim como na Programação, como na Matemática as funções são executadas de dentro para fora, por isso a função `f` é a primeira na imagem do conjunto.

Entrando um pouco mais a fundo na Matemática, podemos definir a função `f` como: ![](https://wikimedia.org/api/rest_v1/media/math/render/svg/aa2fb4d5e9d282ee5442719053c46ad1ad96f2ca)

E a função `g` como: ![](https://wikimedia.org/api/rest_v1/media/math/render/svg/fa4737b6ff067a09e20fa0775da82aae8b86ed82)


Então definimos: ![](https://wikimedia.org/api/rest_v1/media/math/render/svg/59b149046dddc57f20cf28d31fd8d2ae56d36282) como sendo a composição de `f` e `g`, ![](https://wikimedia.org/api/rest_v1/media/math/render/svg/6d3e40c53ec18498db6be88e08dc90b74dcc86f3), desde que ![](https://wikimedia.org/api/rest_v1/media/math/render/svg/ecbdf10291f17aad3c514cb516fe465f571055e5) para todo ![](https://wikimedia.org/api/rest_v1/media/math/render/svg/27bcc9b2afb295d4234bc294860cd0c63bcad2ca)


<br>
<br>
<br>

Podemos perceber facilmente que `B` é o retorno da função `f`, o qual é a entrada da função `g`, que irá retornar `C`. 

<br>
<br>
<br>

> **Compreendeste???**

<br>
<br>
<br>

**Depois dessa maratona básica de Matemática vamos logo para o código!**


<br>
<br>
<br>
<br>
<br>
<br>

![](http://geradormemes.com/media/created/vfnlfs.jpg)


<br>
<br>
<br>

Functor, em Teoria das categorias, é um mapeamento entre categorias que preserva estruturas. Os functores podem ser entendidos como homomorfismos na categoria de todas as categorias pequenas (ou seja, a categoria que tem como objetos todas as categorias compostas por objetos que são conjuntos).

Se vamos estudar JS Funcional nada melhor que nos basearmos no Haskell para isso, então veja comigo como é um *Functor* nele:

```haskell

class Functor f where  
    fmap :: (a -> b) -> f a -> f b  

```

**Hora da análise!**

Vemos que a função `fmap` "leva" uma função de um tipo para outro, `(a -> b) -> `, e um *Functor* é aplicado em um tipo, `f a ->`, e retorna um *Functor* aplicado com outro tipo, `f b`.


> **Não entendi PORRA NENHUMA!**


![](https://github.com/suissa/Ebooks/blob/master/assets/images/meme-calma.jpg?raw=true)


Então conheça a assinatura do `map`: `map :: (a -> b) -> [a] -> [b]`

Analisando temos a mesma assinatura onde a função `a` converte para

## Definição

Lembrando do [nosso material do workshop](https://github.com/Webschool-io/workshop-js-funcional-free#map) sobre `map`:

> O `map` é um método que executa um **`callback`** para cada valor de um **`array`** modificando os 
> mesmos, fazendo com que o **`map`** crie um novo **`array`** com os novos valores obtidos. 


Exemplo:


```js

var arr = [1,2,3]
var x = arr.map(function (value) {
  return value * 2
});

console.log(arr) //[1,2,3]
console.log(x) //[2,4,6]
```


Em ES6:


```js

const arr = [1,2,3]
const x = arr.map( v => v * 2 );

console.log(arr) //[1,2,3]
console.log(x) //[2,4,6]

```

[Documentação oficial do map em JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map)

Antes de entendermos como implementar o `map` precisamos [lembrar que ele é um Functor](https://github.com/Webschool-io/workshop-js-funcional-free#functor).

## Criando o nosso

Vamos começar a montar nosso `map` criando a função `functor` que receberá o valor e a função a ser executada:

```js

function functor(value, fn) {
  return fn(value)
};

```

Colocando ela como um módulo para ser mais facilmente testada:

```js

const map = (value, fn) => fn(value)

module.exports = map

```

Podemos testar ela fazendo o seguinte:

```js

function plus10(value) {
  return value + 10
};

let p10 = functor(10, plus10)

console.log(p10)

```

## Testando

Com isso já criamos a base para o nosso `map` e agora  precisamos obviamente fazer a mesma funcionar 
com *Array*, porém antes iremos escrever o **TESTE** para ela: 

```js

const expect = require('chai').expect

const map = require('./../actions/map')
const value = 2
const values = [1, 2, 3, 4, 5]
const times10 = (value) => value * 10

describe('Map',  () => {

  describe('Number',  () => {

    const resultadoRecebido = map(value, times10)
    const resultadoEsperado = 20

    it('deve retornar um Number', () => {
      expect(resultadoRecebido).to.be.a('number')
    })

    it('deve retornar o valor antigo ${value} multiplicado por 10', () => {
      expect(resultadoRecebido).to.eql(resultadoEsperado)
    })
  })
  
  describe('Array',  () => {

    const resultadoRecebido = map(values, times10)
    const resultadoEsperado = [10, 20, 30, 40, 50]  

    it('deve retornar um Array', () => {
      expect(resultadoRecebido).to.be.an('array')
    })

    it('deve retornar os valor antigos multiplicados por 10', () => {
      expect(resultadoRecebido).to.eql(resultadoEsperado)
    })
  })
})

```

Depois basta executarmos `mocha examples/test/map.spec.js`:

```

➜ mocha examples/test/map.spec.js


  Map
    Number
      ✓ deve retornar um Number
      ✓ deve retornar o valor antigo ${value} multiplicado por 10
    Array
      1) deve retornar um Array
      2) deve retornar os valor antigos multiplicados por 10


  2 passing (21ms)
  2 failing

  1) Map Array deve retornar um Array:
     AssertionError: expected NaN to be an array
      at Context.it (examples/test/map.spec.js:30:39)

  2) Map Array deve retornar os valor antigos multiplicados por 10:
     AssertionError: expected NaN to deeply equal [ 10, 20, 30, 40, 50 ]
      at Context.it (examples/test/map.spec.js:34:36)

```

## Refatorando

Criamos o teste com o *Number* apenas para vermos como a função executa com 1 valor, porém ela quebra 
com 1 *Array* e o `map` na verdade só deveria funcionar **APENAS** com *Arrays*. 

**Então bora refatorar!** 

Inicialmente irei retornar apenas um *Array* para passarmos no teste do tipo de retorno, aliás também 
**comentei o teste do *Number* para focarmos apenas no *Array*:**

```js

const map = (values, fn) => {
  let arr = []

  return arr
}

```

Para depois executarmos o teste novamente:

```

  Map
    Array
      ✓ deve retornar um Array
      1) deve retornar os valor antigos multiplicados por 10


  1 passing (21ms)
  1 failing

  1) Map Array deve retornar os valor antigos multiplicados por 10:

      AssertionError: expected [] to deeply equal [ 10, 20, 30, 40, 50 ]
      + expected - actual

      -[]
      +[
      +  10
      +  20
      +  30
      +  40
      +  50
      +]
      
      at Context.it (examples/test/map.spec.js:34:36)

```

Agora só falta passarmos pelo segundo teste, esse sim é nossa verdadeira prova, então vamos pensar:

> Precisamos fazer com que a função `map` execute a função `fn`, passada, para cada elemento do *Array*, 
> porém se estamos fazendo o `map` logicamente não poderemos utilizar o `forEach`, logo usaremos o `for`!


Sabendo disso nosso código ficará assim:

```js

const map = (values, fn) => {
  let arr = []

  for (let i=0; i<values.length; i++){
    arr.push(fn(values[i]))
  }

  return arr
}

```

Para garantir vamos executar nosso teste:

```

  Map
    Array
      ✓ deve retornar um Array
      ✓ deve retornar os valor antigos multiplicados por 10


  2 passing (15ms)

```

> **SHOW DE BOLA!!!** Agora só precisamos implementar um teste para verificar se a entrada é 
> realmente um *Array*.


Basta adicionarmos esse teste no nosso `describe`:


```js

it('deve retornar um ERRO caso não seja Array', () => {
  expect(() => map(2, times10)).to.throw(TypeError)
})

```

Depois deveremos executar o teste e vê-lo falhar, para depois refatorarmos nossa função `map`:


```

  Map
    Array
      1) deve retornar um ERRO caso não seja Array
      ✓ deve retornar um Array
      ✓ deve retornar os valor antigos multiplicados por 10


  2 passing (22ms)
  1 failing

  1) Map Array deve retornar um ERRO caso não seja Array:
     AssertionError: expected [Function] to throw TypeError
      at Context.it (examples/test/map.spec.js:31:45)


```


E para fazermos essa validação, se é ou não um *Array*, existem diversas formas, utilizaremos a mais 
fácil: `Array.isArray(value)`.

Deixando nosso código assim:

```js

const isArrayLike = (value) => !!(value != null 
                                && value != undefined 
                                && value.length 
                                && Array.isArray(value))

const map = (values, fn) => {
  
  if (!isArrayLike(values)) throw new TypeError('Não é Array')

  let arr = []

  for (let i=0; i<values.length; i++){
    arr.push(fn(values[i]))
  }

  return arr
}

module.exports = map

```

> Percebeu alguma coisa diferente na função `isArrayLike`?
>
> **- SIM! As duas `!`(exclamações).**
>
> Por que você acha que fiz isso?
> 
> **- Bem simples! Fiz isso para forçar o retorno de um BOOLEANO,** pois quando utilizamos o primeiro `!` ele 
> irá **NEGAR** o valor e usando o segundo `!` ele irá **NEGAR O VALOR DA NEGAÇÃO ANTERIOR** 
> transformando esse valor para o que desejamos.



> **Falei que era simples!**


## Refatorando para FUNCIONAL

Agora que já temos nossa implementação precisamos analisar esse exemplo puramente funcional e 
entender como refatorar nosso código até chegar nele:

```js

// map.funcional.js
const map = (mapper, [head, ...tail]) =>
  head // condition to go or stop
    ? [ mapper(head), ...map(mapper, tail) ] //recursion
    : [] // stop

```

Como você deve ter percebido a ordem dos parâmetros é **invertida**, por isso iremos criar outro teste para 
essa nova função apenas invertendo os parâmetros na chamada da função:

```js

const expect = require('chai').expect

const map = require('./../actions/map.funcional')
const value = 2
const values = [1, 2, 3, 4, 5]
const times10 = (value) => value * 10

describe('Map',  () => {
  describe('Array',  () => {

    const resultadoRecebido = map(times10, values)
    const resultadoEsperado = [10, 20, 30, 40, 50]  

    it('deve retornar um ERRO caso não seja Array', () => {
      expect(() => map(times10, value)).to.throw(TypeError)
    })

    it('deve retornar um Array', () => {
      expect(resultadoRecebido).to.be.an('array')
    })

    it('deve retornar os valor antigos multiplicados por 10', () => {
      expect(resultadoRecebido).to.eql(resultadoEsperado)
    })
  })
})

```

E depois rodamos com `mocha examples/test/map.funcional.spec.js`:

```

  Map
    Array
      ✓ deve retornar um ERRO caso não seja Array
      ✓ deve retornar um Array
      ✓ deve retornar os valor antigos multiplicados por 10


  3 passing (16ms)

```

> **PERFEITO!** Nosso teste está passando, agora vamos para a análise pesada do bagulho.


## Analisando o FUNCIONAL

```js

// map.funcional.js
const map = (mapper, [head, ...tail]) =>
  head // condition to go or stop
    ? [ mapper(head), ...map(mapper, tail) ] //recursion
    : [] // stop

```

Analisamos seus parâmetros vimos que o primeiro é a função a ser executada em cada posição do *Array*, mas e 
esse segundo parâmetro `[head, ...tail]`?

Vamos criar um tipo de teste de mesa para que possamos entender os valores de entrada, por isso modifiquei 
a função para:

```js

const map = (mapper, [head, ...tail]) =>{
  console.log('mapper', mapper)
  console.log('head', head)
  console.log('tail', tail)
  console.log('[head, ...tail]', [head, ...tail])

  return head // condition to go or stop
    ? [ mapper(head), ...map(mapper, tail) ] //recursion
    : [] // stop
}

```

Executado o nosso teste podemos verificar o seguinte (peguei apenas a parte do console.log):

```

mapper (value) => value * 10
head 1
tail [ 2, 3, 4, 5 ]
[head, ...tail] [ 1, 2, 3, 4, 5 ]

mapper (value) => value * 10
head 2
tail [ 3, 4, 5 ]
[head, ...tail] [ 2, 3, 4, 5 ]

mapper (value) => value * 10
head 3
tail [ 4, 5 ]
[head, ...tail] [ 3, 4, 5 ]

mapper (value) => value * 10
head 4
tail [ 5 ]
[head, ...tail] [ 4, 5 ]

mapper (value) => value * 10
head 5
tail []
[head, ...tail] [ 5 ]

mapper (value) => value * 10
head undefined
tail []
[head, ...tail] [ undefined ]

```

Analisando apenas a primeira parte:

```js

mapper (value) => value * 10
head 1
tail [ 2, 3, 4, 5 ]
[head, ...tail] [ 1, 2, 3, 4, 5 ]

```

Podemos notar que `[head, ...tail]` nada mais é do que o *Array* completo que entra no `map`, onde o `head` 
é a primeira posição e o `tail` é o resto. 

Note que passamos apenas 1 *Array* pra função `map`, porém ela separa em 2 valores: `head` e `tail`. 

Isso acontece graças a [destructuring assignment](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Operators/Atribuicao_via_desestruturacao) que é uma atribuição via desestruturação, ou seja, como o próprio nome diz: 
ela desestrutura um Objeto ou *Array* para variáveis definidas. 

**Nesse caso a primeira posição do *Array* vai para `head` e o resto para `tail`!** 


> Mas como ela sabe que o resto vai para o `tail?`


> \- Graças a essa chamada `...tail` e sabe o porquê foi utilizado esses `...`? 


Essa funcionalidade chama-se [Spread operator](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Operators/Spread_operator) e sua descrição é:

> 
> "O  operador spread permite uma expressão ser expandida em locais onde múltiplo argumentos 
> (por chamadas de função) ou múltiplos elementos (por array literais) são esperados."


Esse exemplo executado no *Terminal* (precisa executar `node` antes!) deixará isso mais claro:

```js

> let tail = [ 2, 3, 4, 5 ]
> [666, ...tail]
[666, 2, 3, 4, 5 ]
> const f = ([a, b, resto]) => console.log(a, b, resto)
undefined
> f([1, 2, 3, 4, 5])
1 2 3
undefined
> const g = ([a, b, ...resto]) => console.log(a, b, resto)
undefined
> g([1, 2, 3, 4, 5])
1 2 [ 3, 4, 5 ]

```

Logo ele irá definir cada valor na sequência do *Array* e para pegarmos "todos" os que sobraram 
usaremos o *Spread Operator*!

Depois de entendermos com quais valores estamos trabalhando precisamos entender a estrutura da nossa função:

```js

head // condition to go or stop
  ? [ mapper(head), ...map(mapper, tail) ] //recursion
  : [] // stop
  
```

Nesse caso ela está usando um `if` ternário, traduzindo para um `if` normal fica assim:

```js

if (head) {
  return [ mapper(head), ...map(mapper, tail) ]
} else {
  return []
}

```

> Perceba que ele não precisou usar o `return`, isso se deve pela forma da criação da função `map` que 
> utilizou [Arrow Function](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Functions/Arrow_functions), `() =>`, quando ela 
> possuir apenas 1 linha, a qual já faz o retorno da função, não é necessário utilizar `{ }`, muito menos o `return`.


Entretando ela também está usando recursividade, como visto aqui: `[ mapper(head), ...map(mapper, tail) ]`.

Agora que eu lhe pergunto:


> O que está acontecendo nessa linha?


Vamos novamente analisar, uma parte do, nosso teste de mesa.


```

mapper (value) => value * 10
head 1
tail [ 2, 3, 4, 5 ]
[head, ...tail] [ 1, 2, 3, 4, 5 ]

mapper (value) => value * 10
head 2
tail [ 3, 4, 5 ]
[head, ...tail] [ 2, 3, 4, 5 ]

mapper (value) => value * 10
head 3
tail [ 4, 5 ]
[head, ...tail] [ 3, 4, 5 ]

```


Sabemos então que na primeira parte, essa linha, `[ mapper(head), ...map(mapper, tail) ]` irá executar/retornar:


```js

[ 1 * 10,  // mapper(head)
  ...map((n) => n * 10, [ 2, 3, 4, 5 ])// ...map(mapper, tail)
]

```

Vamos nos atentar ao segundo valor desse *Array*, que acredito ser o mais "complexo" de toda essa função. Quando 
chamarmos `map(mapper, tail)` ele irá chamar a mesma função onde estamos, `map`, passando agora apenas o 
*Array* `tail` que já não possui o primeiro valor, `head`, e retornar um *Array*. 

**Porém precisamos pegar cada valor desse *Array* e "juntar" com o primeiro valor passado anteriormente, necessitamos 
utilizar `...map(mapper, tail)` pois será dessa forma que iremos criar o `[ mapper(head), ...map(mapper, tail) ]`.**

Para criarmos a primeira iteração dessa função ela deve se chamar/executar para criar o resto do *Array*, 
logo você deve perguntar-se:

> E como é que ela sabe que deve parar de se chamar?
>
> \- **ÓTIMA PERGUNTA!** 


Analise aqui comigo as duas últimas iterações do nosso teste de mesa:


```js

head 5
tail []
[head, ...tail] [ 5 ]

head undefined
tail []
[head, ...tail] [ undefined ]

```

Sabemos através da "tradução" do `if` ternário para o comum que o teste lógico é em cima do `head`, ou seja, 
enquanto existir valor pro `head` ela irá continuar executando. Logo se esse valor for `undefined` ela irá parar 
de se chamar e irá retornar `[]`.

Então perceba que o *Array* de retorno da função `map` é gerado dinamicamente em cima do mesmo *Array*, 
note também que o valor passado para cada iteração dessa recursividade é o `[head, ...tail]`. 

Vamos ver como ela se comporta no nosso teste de mesa:


```js

[head, ...tail] [ 1, 2, 3, 4, 5 ]

[head, ...tail] [ 2, 3, 4, 5 ]

[head, ...tail] [ 3, 4, 5 ]

[head, ...tail] [ 4, 5 ]

[head, ...tail] [ 5 ]

[head, ...tail] [ undefined ]

```

> Sabe o porquê esse *Array* vai diminuindo?



 
> \-**EXATAMENTE!** Porque a cada iteração nós retiramos a primeira posição que é o `head` e 
> aplicamos a função `mapper` apenas nesse valor, isso vai acontecendo até que não exista mais 
> elementos a serem processados.


## Map - COMPARAÇÃO

Agora iremos aprender como sair do código imperativo:

```js

const isArrayLike = (value) => !!(value != null 
                                && value != undefined 
                                && value.length 
                                && Array.isArray(value))

const map = (values, fn) => {
  
  if (!isArrayLike(values)) throw new TypeError('Não é Array')

  let arr = []

  for (let i=0; i<values.length; i++){
    arr.push(fn(values[i]))
  }

  return arr
}

```

Para o código funcional:

```js

const map = (mapper, [head, ...tail]) =>
  head // condition to go or stop
    ? [ mapper(head), ...map(mapper, tail) ] //recursion
    : [] // stop

```

Primeira coisa que devemos fazer é refatorar nossos parâmetros de entrada e uma coisa impotantíssima: 
**a condição de parada da função recursiva**

```js

const map = ([head, ...tail], fn) => {
  
  let arr = []
  
  if (!head) return arr

}

```

Depois precisamos fazer a chamada recursiva passando os valores corretamente:

```js

const map = ([head, ...tail], fn) => {
  
  if (!head) return []

  return [ fn(head), map(tail, fn) ]
}

```

Com isso estamos quase lá, porém eu não usei `...map(tail, fn)` apenas para vermos como ficaria essa saída errada:

```js

      -  [
      -    20
      -    [
      -      30
      -      [
      -        40
      -        [
      -          50
      -          []
      -        ]
      -      ]
      -    ]
      -  ]
```

> **Percebeu como o `...` é importantíssimo?**


Então refatorando nossa função a deixaremos assim:


```js

const map = ([head, ...tail], fn) => {
  
  if (!head) return []

  return [ fn(head), ...map(tail, fn) ]
}

```

Agora basta refatorarmos esse `if` normal para um ternário:

```js

const map = ([head, ...tail], fn) => (!head) 
                                        ? [] 
                                        : [ fn(head), ...map(tail, fn) ]

module.exports = map

```

Executando, `mocha examples/test/map.nosso.spec.js`, nosso teste para essa função teremos o seguinte resultado:

```

  Map
    Array
      ✓ deve retornar um ERRO caso não seja Array
      ✓ deve retornar um Array
      ✓ deve retornar os valor antigos multiplicados por 10


  3 passing (17ms)

```


## Map - Técnicas

### Testar sua existência

Caso você tenha criado uma função que execute em um Objeto e quer usar ela tanto 
no Objeto como em Array basta fazer o seguinte:

```js

const map = (functor, data) => data.map ? data.map(functor) : functor(data)

// const result = map(fn, obj)
// const result = map(fn, arr)

```

Dessa forma o primeiro teste é a verificação da existência da função `map` em `data`, 
caso exista será *Array* pois só ele possui o `map`, se não será Objeto, executando a função diretamente, 
passando `data` como parâmetro.

*ps: Aprendi essa técnica com o mestre [Hapan](https://github.com/halan)*

## Map - Conclusão

Para criarmos/aprendermos essa função foi necessário conhecermos/utilizarmos:

- arrow function
- destructuring assignment
- spread operator
- if ternário
- recursão

### Questionamento

> **Agora quero que você me diga para que usaria o map?**

## Map - Exemplos

### Exemplo com API

Vamos usar um exemplo de retorno da [API do Redtube]():

```

{
    "video": {
        "duration": "14:08",
        "views": "43110",
        "video_id": "1103943",
        "rating": "3.86",
        "ratings": "236",
      }
  }

```



**Com esse exemplo iremos transformar HH:MM:SS em segundos:**



```js

const transformToSeconds = ( obj ) => {

  const __obj = Object.assign( {}, obj )
  const time = __obj.video.duration.split(':')
  let seconds = 0
  let begin = 0

  if ( time.length === 3 ) {
      seconds += parseInt( time[begin] * 3600 )
      begin = 1
    }
    
  seconds += parseInt( time[begin] * 60 )
  seconds += parseInt( time[begin+1] )

  __obj.video.duration = seconds
  return __obj
}

module.exports = transformToSeconds

```



#### Nota

> Perceba que usamos o `Object.assign( {}, obj )` para criar um Objeto novo baseado 
> no original, para que possamos **modificar seus valores sem modificar o ORIGINAL**.


### Exemplo com Matemática

#### Transformar todos os valores de um conjunto


Funções de transformação:

- para o dobro
- para o quadrado
- para o cubo

```js

const toDouble = ( num ) => num * 2
const toSquare = ( num ) => num * num
const toCube = ( num ) => num * num * num

const doubles = [1, 2, 3, 4].map( toDouble )
const squares = [1, 2, 3, 4].map( toSquare )
const cubes = [1, 2, 3, 4].map( toCube )

```

Podemos também modificar o tipo do retorno dos elementos gerados nesse novo *Array*.

Imaginemos que estamos na aula de Geometria e o professor pergunta qual o volume das seguintes formas geométricas:

```js

const calcularVolume = ( forma ) => Object.assign( {}, forma, { volume: forma.largura * forma.comprimento * forma.altura })

const forma1 = { largura: 2, comprimento: 2, altura: 2 }
const forma2 = { largura: 12, comprimento: 5, altura: 6 }
const forma3 = { largura: 33, comprimento: 7, altura: 5 }
const forma4 = { largura: 50, comprimento: 10, altura: 20 }

const formas = [ forma1, forma2, forma3, forma4 ]

const volumes = formas.map( calcularVolume )
/*
[ { largura: 2, comprimento: 2, altura: 2, volume: 8 },
  { largura: 12, comprimento: 5, altura: 6, volume: 360 },
  { largura: 33, comprimento: 7, altura: 5, volume: 1155 },
  { largura: 50, comprimento: 10, altura: 20, volume: 10000 } ]
*/
```


Mais fácil ainda é fazer uma função para gerar qualquer tabuada para nós:


```js

const calcularTabuada = ( num ) => 
  Array.from({ length: 10 }, (e,i) => (i+1) * num )

console.log(calcularTabuada(4))

```

Ainda não usamos o `map` mas quis mostrar antes essa malandragem marota do `Array.from({ length: 10 }, (e,i) => (i+1) * num )` pois com ele eu crio um *Array* de tamanho 10, onde preencho cada posição com a multiplicação do número que quero a tabuada com `i+1`, precisamos somar o i, que é a posição no *Array*, com 1 pois ele incia em 0.

> E se quisermos toda a tabuada do 3 ao 9?

Agora sim vamos usar o `map`:

```js

const calcularTabuada = ( num ) => 
  Array.from({ length: 10 }, (e,i) => (i+1) * num )

const numeros = [ 3, 4, 5, 6, 7, 8, 9 ]

const tabuada = numeros.map( calcularTabuada )
console.log('tabuada: \n', tabuada)

/*
tabuada: 
 [ [ 3, 6, 9, 12, 15, 18, 21, 24, 27, 30 ],
  [ 4, 8, 12, 16, 20, 24, 28, 32, 36, 40 ],
  [ 5, 10, 15, 20, 25, 30, 35, 40, 45, 50 ],
  [ 6, 12, 18, 24, 30, 36, 42, 48, 54, 60 ],
  [ 7, 14, 21, 28, 35, 42, 49, 56, 63, 70 ],
  [ 8, 16, 24, 32, 40, 48, 56, 64, 72, 80 ],
  [ 9, 18, 27, 36, 45, 54, 63, 72, 81, 90 ] ]
*/
```


### Exemplo com Fisica


Funções de transformação:

```js

const calcDensity = ( obj ) => obj.m / obj.V

```

- calcular a densidade de todos os corpos:

```js

const objeto1 = { m: 100, V: 10 }
const objeto2 = { m: 70, V: 3 }
const objeto3 = { m: 50, V: 0.2 }
const objeto4 = { m: 1, V: 3 }

const amostra = [ objeto1, objeto2, objeto3, objeto4 ]

const densidades = amostra.map( calcDensity )
// [ 10, 23.333333333333332, 250, 0.3333333333333333 ]

```


**[A execução desse código pode ser visualizada aqui](https://goo.gl/y9H656)**



### Exemplo com Química

Podemos mapear os átomos para dizer se são ou não radioativos, sem filtra-los.

Lembrando que Z representa o número atômico dos átomos, ou seja, a quantidade de prótons existentes 
no núcleo do átomo na sua forma elementar.

Função de mapeamento:

```js

const Z_LIMIT = 83

const classifiquePeloZ = ( atom ) => ( atom.Z >= Z_LIMIT ) 
                                                            ? Object.assign( {}, atom, { radioactive: true } )
                                                            : Object.assign( {}, atom, { radioactive: false } )

```


Que usaremos na seguinte amostra:


```js

const atom1 = { simbol: 'Be', Z: 4 }
const atom2 = { simbol: 'Sc', Z: 21 }
const atom3 = { simbol: 'Hf', Z: 72 }
const atom4 = { simbol: 'Ta', Z: 73 }
const atom5 = { simbol: 'Ti', Z: 81 }
const atom6 = { simbol: 'Bi', Z: 83 }
const atom7 = { simbol: 'Mt', Z: 109 }
const atom8 = { simbol: 'Cn', Z: 112 }

const amostra = [ atom1, atom2, atom3, atom4, atom5, atom6, atom7, atom8 ]

const resultado = amostra.map( classifiquePeloZ )
console.log('resultado: ', resultado)
/*
resultado:  [ { simbol: 'Be', Z: 4, radioactive: false },
  { simbol: 'Sc', Z: 21, radioactive: false },
  { simbol: 'Hf', Z: 72, radioactive: false },
  { simbol: 'Ta', Z: 73, radioactive: false },
  { simbol: 'Ti', Z: 81, radioactive: false },
  { simbol: 'Bi', Z: 83, radioactive: true },
  { simbol: 'Mt', Z: 109, radioactive: true } ]
*/

```


**[A execução desse código pode ser visualizada aqui](https://goo.gl/Ie1Yl6)**


Como também podemos criar uma função para mapear os valores da [massa atômica](), pois a mesma é a 
soma dos prótons e nêutrons do átomo.


```js

const calcularMassaAtomica = ( atom ) => Object.assign( {}, atom, { A:  atom.Z + atom.N } )
// colocar os numeros corretos de N
const atom1 = { simbol: 'Be', Z: 4, N: 5 }
const atom2 = { simbol: 'Sc', Z: 21, N: 24 }
const atom3 = { simbol: 'Hf', Z: 72, N: 106 }
const atom4 = { simbol: 'Ta', Z: 73, N: 108 }
const atom5 = { simbol: 'Ti', Z: 81, N: 123 }
const atom6 = { simbol: 'Bi', Z: 83, N: 126 }
const atom7 = { simbol: 'Mt', Z: 109, N: 159 }
const atom8 = { simbol: 'Cn', Z: 112, N: 173 }

const amostra = [ atom1, atom2, atom3, atom4, atom5, atom6, atom7, atom8 ]

const resultado = amostra.map( calcularMassaAtomica )
console.log('resultado: ', resultado)
/*
*/

```

### Exemplo com Biologia

### Exemplo com Português

Imagine a seguinte conjugação verbal:

```
eu  programo
tu  programas
ele programa
nós programamos
vós programais
eles  programam

```

- criar a conjugação verbal acima: 

```js

const radical = 'program'
const conjugacoes = [
  { pronome: 'eu', sufixo: 'o' }, 
  { pronome: 'tu', sufixo: 'as' }, 
  { pronome: 'ele', sufixo: 'a' }, 
  { pronome: 'nós', sufixo: 'amos' }, 
  { pronome: 'vós', sufixo: 'ais' }, 
  { pronome: 'eles', sufixo: 'am' }
]

const conjugar = ( radical ) => ( conj ) =>`${conj.pronome} ${radical}${conj.sufixo}`

const conjugacao = conjugacoes.map( conjugar( radical ) )

```

**[A execução desse código pode ser visualizada aqui](https://goo.gl/xky4nC)**

### Exemplo com Inglês

### Exemplo com Geografia

### Exemplo com História

### Exemplo com Filosofia

## Embasamento Teórico

- [What is a functor?](https://medium.com/@dtinth/what-is-a-functor-dcf510b098b6#.3fz4zg1vb)

**Para alegria geral da nação ainda deixarei aqui um link FENOMENAL: [Functional Programming in Javascript](http://reactivex.io/learnrx/)**. O título parece meio bosta né? Mas acho que é o site com mais exercícios sobre JS Funcional que encontrei, espero que você também faça todos.

> Bons estudos e até mais!
