function neutralize (formula1, formula2) {
  /* take a base and acid such as, ('Mg(OH)2', 'H2SO5')
    Base = cation + OH
    Acid = H + anion

    Mg(OH)2 + HCl
    +2  -2   +1 -1
    LCM = 2 :. acidMultiplier = LCM (2) / anion.charge = 2

    H6TeO6 + Au(OH)3
    +6 -6    +3  -3
    LCM = 6 :. baseMultiplier = LCM (6) / cation.charge = 2

    H3BO3  +  Th(OH)4
    +3 -3     +4 -4
    LCM = 12 :. baseMultiplier = 12/4 = 3 && acidMultiplier = 12/3 = 4


    *1) asign base and acid.
    *2) store the anion and cation {string: '', charge: |1|}.
     3) get LCM
    4) combine the cation(metal)+anion.
    5) calculate the LCD to make H2O

    Refactor:
      regex in formatIon,
      regex in parseCation,
      lcm
      One function parses both anion and cation
      

  */

  let base = '', acid = ''
  let anion = {string: '', charge: 0}, cation = {string: '', charge: 0}

  //helper functions
  const acidOrBase = (f) => { f.includes("OH") ? base = f : acid = f }

  const parseCation = (b) => {
    if (b.match(/[(]OH[)][0-9]*/))
    {
      cation.string = b.substr( 0, b.search(/[(]OH[)][0-9]+/) )

      cation.charge = Number(
        b.match(/[(]OH[)][0-9]+/)[0]
        .match(/[0-9]+/)[0])
    }
    else
    {
      cation.string = b.substr(0, b.search('OH'))
      cation.charge = 1
      countOH = 1
    }

  }

  const parseAnion = (a) => {

      anion.string = a.substring(a.match(/H[0-9]*/)[0].length)
      if (a.match(/H[0-9]+/))
      {
        anion.charge = Number(a.match(/H[0-9]+/)[0].substring(1))
      }
      else {
        anion.charge = 1
      }
  }

  function lcm(int1, int2) {
    let m = []
    let b = int1 > int2 ? int1 : int2
    let s = int1 < int2 ? int1 : int2

    for (let x = b; x <= b * s; x += b)
    {
      m.push(x)
    }
    for (let i = s; i <= b*s; i += s)
    {
      if (m.includes(i)) return i
    }
  }

  function formatIon(ionString, multiplier){
    if (multiplier > 1)
    {
      // Find A2, AaB, A2B, AB, Aa2 : to apply ( )
      if (ionString.match(/[A-Z][1-9]|[A-Z][a-z][A-Z]|[A-Z][1-9][A-Z]|[A-Z][A-Z]|[A-Z][a-z][1-9]/) )
      {
        return '(' + ionString + ')' + multiplier
      }
      else {
        return ionString + multiplier
      }
    }
    else {
      return ionString
    }
  }
  //assign inputs to acid or base
  acidOrBase(formula1)
  acidOrBase(formula2)
  // give up now!
  if ( !base || !acid ) return null
  //build ions and charges objects {}
  parseAnion(acid)
  parseCation(base)
  //balance the equations
  let leastcm = lcm(anion.charge, cation.charge)
  let baseMultiplier = leastcm/cation.charge
  let acidMultiplier = leastcm/anion.charge

  //values for output template
  let positionOne = formula1 == base
    ? baseMultiplier > 1 ? '' + baseMultiplier + formula1 : formula1
    : acidMultiplier > 1 ? '' + acidMultiplier + formula1 : formula1

  let positionTwo = formula2 == base
    ? baseMultiplier > 1 ? '' + baseMultiplier + formula2 : formula2
    : acidMultiplier > 1 ? '' + acidMultiplier + formula2 : formula2

  let positionThree = '' + formatIon(cation.string, baseMultiplier) + formatIon(anion.string, acidMultiplier)

  let positionFour = '' + leastcm > 1 ? leastcm + 'H2O' : 'H2O'

  return `${positionOne} + ${positionTwo} \u2192 ${positionThree} + ${positionFour}`
}


module.exports = neutralize
