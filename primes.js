function getPrimeNumbers(n) {
    let numbers = []
    for (let i = 2; n > numbers.length; i++) {
        let prime = true
        for (let j = 2; j <= Math.sqrt(i) && prime === true; j++) {
            if (i % j === 0) {
                prime = false
            }
        } 
        if (prime) {
            numbers.push(i)
        }    
    }
    return numbers
}

console.log(getPrimeNumbers(20))
