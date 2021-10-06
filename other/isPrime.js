function isPrime(num) {
    if(num < 2) return "Bukan Bilangan Prima";
    for (var i = 2; i < num; i++) {
        if(num%i === 0)
            return "Bukan Bilangan Prima";
    }
    return "Bilangan Prima";
    }
    
console.log(isPrime(10)); // output "Bukan Bilangan Prima"
console.log(isPrime(5)); // output "Bilangan prima"
console.log(isPrime(97)); // output "Bilangan Prima"