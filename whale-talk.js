let input = "The ocean is a desert with its life underground and a perfect disguise above";
const vowels = ['a', 'e', 'i', 'o', 'u'];
let resultArray = [];
for (let i = 0; i < input.length; i++) {
  for (let j = 0; j < vowels.length; j++) {
    if ( input[i] === vowels[j] ) {
/*
      if(input[i] === "e") {
        resultArray.push('ee');
      }
      else if (input[i] === "u") {
        resultArray.push("uu");
      }
*/
      if (vowels[j] === "e" || vowels[j] === "u") {
        resultArray.push( input[i] );
        resultArray.push( input[i] );
      }
      else {
        resultArray.push( input[i] );
      }
    }
  }
}
console.log( resultArray.join('').toUpperCase() );
