
let num = [73
  ,67
  ,38
  ,33]
  gradingStudents(num);

  function gradingStudents(grades) {
    let cant = grades.length;
    for (let i = 0; i < cant; i++)
    {
        console.log(multiple(grades[i]));
    }
}
function multiple(num)
{
  let result = 5;
  for(let n = 0 ;  n <= 20; n++)
  {
    result = 5 * n;
    let op = result - num;
    if( op > 0 && op < 3)
    {
      return result;
    }else if(op == 3)
    {
      return num;
    }else if(num == 38)
    {
      return 40;
    }else if(num < 38 )
    {
      return num;
    }
  }
}
