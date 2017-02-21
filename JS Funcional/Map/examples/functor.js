const isEqual = (a, b) =>
  JSON.stringify(a) == JSON.stringify(b)
  
const identity = a => a

const addOne = a => a+1

const negate = a => !a

const compose = (f, g) => a => f(g(a))

const and = (a, b) => a && b

const allIsTrue = (...xs) => xs.reduce(and, true)

const isFunctor = xs => xs.map ? allIsTrue(
    isEqual(
      xs.map(identity),
      xs
    ),
    isEqual(
      xs.map(addOne).map(negate),
      xs.map(compose(negate, addOne))
    )
  )
: false


console.log(isFunctor( {a: 2} ))
console.log(isFunctor( [1, 2, 3, 4] ))
