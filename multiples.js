/**
 * sumOfAMultiple() sums of the multiples of 3 and 5 for any number passed in
 * @param  {Number} n Number that is to be used for calculating multiples up to that Number
 * @return {Number}
 */
exports.sumOfAMultiple = function( n ) {
  var sum = 0;
  var array = [];
  function add(a,b){
    return a + b;
  }

  for(var i = 0; i < n; i++){
    if(i%5 === 0){
      array.push(i);
      // console.log(array);
    } else {
    if(i%3 === 0){
      array.push(i);
      // console.log(array);
    }
    }
  }

  var answer = array.reduce(add,  0 );

  return answer;
};
