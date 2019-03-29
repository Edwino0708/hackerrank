
var n = [1000000001,1000000002,1000000003,1000000004,1000000005];

function aVeryBigSum(ar) {
    let suma = 0;

    for (let n = 0; n < ar.length; n++)
    {
        suma = suma + parseInt(ar[n]);
    }

    return suma;
}
console.log(aVeryBigSum(n));


