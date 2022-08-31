function find_spec_prod_part(n, minOrMax="min"){

  let arrayDecompoisition = []
  let primeNumbersArray = []
  let dividende = n
  let diviseur = 2

  // L'algo s'arrête quand le dernier quotient est égal à 1 (car on ne peut plus diviser) 
  while (dividende > 1){
  
    // Est-ce que le diviseur est premier ?
    let isDiviseurPremier = true
    for (let j = 0; j < primeNumbersArray.length; j++) {
      if (diviseur % primeNumbersArray[j] === 0) {
        isDiviseurPremier = false
        break
      }
    }

    // Si le diviseur est premier, on voit si le reste de la division euclidienne du quotient par ce diviseur est 0
    if (isDiviseurPremier){
      primeNumbersArray.push(diviseur)
      let frequency = 0;

      while (dividende % diviseur === 0){
        // Si le reste de la division euclidienne est nulle, c'est un facteur premier
          dividende = dividende / diviseur
          frequency += 1
          arrayDecompoisition.push(diviseur)
      }
    }
    diviseur += 1
  }

  let result = []
  if (minOrMax === "min"){
    arrayDecompoisition.reverse()
    result = [arrayDecompoisition[0], arrayDecompoisition.slice(1, arrayDecompoisition.length).reduce( (e1, e2) => e1 * e2)]
  } else {
    result = [arrayDecompoisition[0], arrayDecompoisition.slice(1, arrayDecompoisition.length).reduce( (e1, e2) => e1 * e2)]
  }
  let score = (result[0] + result[1])*2

  return [arrayDecompoisition, result, score]
}

  console.log(find_spec_prod_part(1416, "max"))
  // Expected : [ [ 2, 2, 2, 3, 59 ], [ 2, 708 ], 1420 ]
  console.log(find_spec_prod_part(1416, 'min'))
  // Expected : 