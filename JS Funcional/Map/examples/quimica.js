
const Z_LIMIT = 83

const classifiquePeloZ = ( atom ) => ( atom.Z >= Z_LIMIT) 
                                      ? Object.assign({}, atom, { radioactive: true })
                                      : Object.assign({}, atom, { radioactive: false })


const atom1 = {simbol: 'Be', Z: 4}
const atom2 = {simbol: 'Sc', Z: 21}
const atom3 = {simbol: 'Hf', Z: 72}
const atom4 = {simbol: 'Ta', Z: 73}
const atom5 = {simbol: 'Ti', Z: 81}
const atom6 = {simbol: 'Bi', Z: 83}
const atom7 = {simbol: 'Mt', Z: 109}
const atom8 = {simbol: 'Cn', Z: 112}

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