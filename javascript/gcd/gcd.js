function gcd(x ,y) {
  while (y) {
   let t = y
   y = x % y
   x = t
  }
  return x
}
