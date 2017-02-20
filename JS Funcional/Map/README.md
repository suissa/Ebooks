# Map

> **Serve para transformar valores de um *Array*.**



![](https://raw.githubusercontent.com/Webschool-io/workshop-js-funcional-free/master/assets/images/array-map.png)


> Analisando a imagem acima podemos inferir que a ação que a função map faz é cortar cada fruta, correto?


## Pré-conhecimentos

### Array

// Escrever sobre o Array e seu prototype

### [Functor](https://github.com/Webschool-io/workshop-js-funcional-free#functor)

> A Functor is a function, given a value and a function, unwraps the values to get to its inner value(s), 
> calls the given function with the inner value(s), wraps the returned values in a new structure, and 
> returns the new structure.

Vamos entender parte por parte:

- *Functor* é uma função que irá receber um valor e uma função;
- Desencapsula os valores para chegar a seu(s) valor(es) interno(s);
- Chama a função repassada com o(s) valor(es) interno(s);
- Encapsula os valores devolvidos em uma nova estrutura;
- e retorna a nova estrutura.



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
const atom1 = { simbol: 'Be', Z: 4, N: 2 }
const atom2 = { simbol: 'Sc', Z: 21, N: 2 }
const atom3 = { simbol: 'Hf', Z: 72, N: 2 }
const atom4 = { simbol: 'Ta', Z: 73, N: 2 }
const atom5 = { simbol: 'Ti', Z: 81, N: 2 }
const atom6 = { simbol: 'Bi', Z: 83, N: 2 }
const atom7 = { simbol: 'Mt', Z: 109, N: 2 }
const atom8 = { simbol: 'Cn', Z: 112, N: 2 }

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
