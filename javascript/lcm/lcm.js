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
module.exports = lcm
