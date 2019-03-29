function staircase(arr) {
   let result = "";
    for (let i = 0; i < n; i++) {
        for (let j = 1; j <= n; j++) {
            result += j < n - i ? " " : "#";
            //console.log(j < (n - i) ? " " : "#");
        }
        result += '\n';
    }

    console.log(result)
}

  console.log(staircase(5));