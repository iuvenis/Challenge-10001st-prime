function PrimeFinder(n){
  var primes = [];
  this.getPrimeNumber = function (n){

  // reworking

    for(var i = 2; i < n; i++) {
        primes[i] = true;
    }
    var limit = Math.sqrt(n);
    for(i = 2; i < limit; i++) {
        if(primes[i] === true) {
            for(var j = i * i; j < n; j += i) {
                primes[j] = false;
            }
        }
    }
    for(i = 2; i < n; i++) {
        if(primes[i] === true) {
        }
    }
};
}
var pf = new PrimeFinder();
var result = pf.getPrimeNumber();
console.log(primes.lenght);

module.exports = PrimeFinder;

