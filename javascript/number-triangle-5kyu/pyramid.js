
//solve this in 100 characters

  let b = [0]
  for (i=1;i<10;i++) {
    console.log(b.join(''))
    b = b.map(e => e + 1)
    b.unshift(0)
    b.push(0)
  }
  let c = b
  for(j=0;j<10;j++) {
    console.log(c.join(''))
    c = c.map(e=>e-1)
    c.shift()
    c.pop()
  }
