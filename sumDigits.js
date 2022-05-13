function sumDigits(number) {
    arr = []
    number = Math.abs(number)
    strnum = number.toString()

    for(i=0; i<=strnum.length-1; i++){
      arr.push(parseInt(strnum[i]))
    }

    sumOfArray = arr.reduce(
      (a, b) => a + b,
    )
    return console.log(sumOfArray)
    }
sumDigits(-89123)
console.log('=====')
sumDigits(10)
console.log('=====')
sumDigits(99)
console.log('=====')
sumDigits(-32)
console.log('=====')