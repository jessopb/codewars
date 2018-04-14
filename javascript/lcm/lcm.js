function lcm(int1, int2) {
  mult = int1 * int2
  high = int1 >= int2 ? int1 : int2

  let findlcm = (i, j, m, h) => {
    if (m > h) {
      for (let n=2; n <= Math.ceil(Math.sqrt(m)); n++)
      {
        if (m % n == 0)
        {
          if ((i % n == 0) && (j % n == 0))
          {
            console.log(' i:' + i + ' j:' + j + ' m:' + m + ' n:' + n + ' h: ' + h)
            return findlcm(i, j, m / n, h)
          }
          else return m
        }
        
      } //for

    }
    else { return m }

  }//findlcm
  return findlcm(int1, int2, mult, high)
}
console.log(lcm(3,27))
module.exports = lcm
