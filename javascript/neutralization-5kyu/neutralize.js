

function neutralize (formula1, formula2) {
  /* take a base and acid such as, ('Mg(OH)2', 'H2SO5')
    Base = cation + OH
    Acid = H + anion
    1) asign base and acid.
    2) store the anion and cation.
    3) store OH and H as Sum the Os and Hs.
    comnbine the cation(metal)+anion. sum the water.
  */

  let base = "", acid = ""
  let anion = "", cation = ""
  let countH = 0, countO = 0

  let acidOrBase = (f) => { f.includes("OH") ? base = f : acid = f }

  acidOrBase(formula1); acidOrBase(formula2)

  let parse = (str) => { //todo
    if (!str.length == 0) {
      if (str.match(/([A-Z][a-z][0-9])/) )
      {//add # elements, then parse(str.shift(3)),
        let ch = str.match(/([A-Z][a-z][0-9])/)

      }
      if (str.match(/([A-Z][a-z])/))
      {//add 1 element, then shift

      }
      if (str.match(/([A-Z][0-9])/) )
      {//add # element

      }
      if (str.match(/([A-Z])/))
      {//add 1 element

      }
      if (str.match(/[(]OH[)][0-9]/))
      {//add # O, and # H

      }
      if (str.match("(OH)"))
      {//add 1 O, and 1 H

      }
    }

  }

  if ( !base || !acid ) return null
  //isInteger()
  //return parse(acid)




}
module.exports = neutralize
