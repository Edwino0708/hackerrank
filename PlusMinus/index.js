
var n = [-4,3,-9,0,4,1]

function plusMinus(arr) {
    var text = new String;
    var cant = arr.length;
    var pos = 0, neg = 0, zer = 0;
    for (var i = 0; i < cant; i++)
    {
        if (arr[i] > 0) pos++;
        if (arr[i] < 0) neg--;
        if (arr[i] == 0) zer++;
    }

    
    pos = Math.abs((pos / cant)).toFixed(6);
    neg = Math.abs((neg / cant)).toFixed(6);
    zer = Math.abs((zer / cant)).toFixed(6);

    console.log(pos);
    console.log(neg);
    console.log(zer);
}

  console.log(plusMinus(n));