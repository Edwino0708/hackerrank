
var n = [11,2,4][4,5,6][10,8,-12]

function diagonalDifference(arg) {
    var cant = arg.length;
    var dif = 0;
    var d1 = 0, d2 = 0;
    for (var i = 0; i < cant; i++) {
        for (var j = 0; j < cant; j++) {

            if (i == j) {
                d1 += parseInt(arg[i][j]);

            }

            if (i == cant - j - 1) {
            console.log('i : ' + i + ' j :' + j);
            d2 += parseInt(arg[i][j]);
            } 

        }
    }
    return Math.abs(d1 - d2);
}


  console.log(diagonalDifference(n));