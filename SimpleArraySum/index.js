
var n = [1,2,3,4,10,11];

function simpleArraySum(ar) {
    let suma = 0;
    for (let n = 0; n < ar.length; n++) {
        suma = suma + parseInt(ar[n]);
    }

    return suma;
}

console.log(simpleArraySum(n));


