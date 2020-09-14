// // Напиши фукцнию findLongestWord(string), которая принимает 
// параметром произвольную строку (в строке будут только слова и пробелы) 
// и возвращает самое длинное слово в этой строке.

const findLongestWord = function(string) {
    // твой код
   const normalizedString = string.split(' ')
    // console.log(normalizedString);
   let longestWord = normalizedString[0];
   let longestWordLength = normalizedString[0].length;
   for (let i =0; i < normalizedString.length; i++) {
       if(normalizedString[i].length > longestWordLength ) {
        longestWord = normalizedString[i];
        longestWordLength = normalizedString[i].length;
        // console.log(longestWord, longestWordLength );   
    }
}
    return longestWord;
};
  
  /*
   * Вызовы функции для проверки работоспособности твоей реализации.
   */
  console.log(findLongestWord('The quick brown fox jumped over the lazy dog')); // 'jumped'
  
  console.log(findLongestWord('Google do a roll')); // 'Google'
  
  console.log(findLongestWord('May the force be with you')); // 'force'



























// const findLongestWord = function(string) {
//     let arrayWord = string.split(' ');
//     console.log(arrayWord);
// let longestWord = "";
//     let longestWord = arrayWord[0];
//     let wordLength = arrayWord[0].length;
//     for(let i = 1; i < arrayWord.length; i++) {
//         // console.log(arrayWord[i]);
//         // console.log(arrayWord[i].length);
//         if(wordLength < arrayWord[i].length){
//             wordLength = arrayWord[i].length
//             // console.log(wordLength);
//             longestWord = arrayWord[i];
//             // console.log(longestWord);
//         }
//     }
//     return longestWord;
//     for (let word of arrayWord){
// if (word.length>longestWord.length){
// longestWord = word;
//   }
// }    
// return longestWord;     

//     // }
//   // твой код
// };

// /*
//  * Вызовы функции для проверки работоспособности твоей реализации.
//  */
// console.log(findLongestWord('The quick brown fox jumped over the lazy dog')); // 'jumped'

// console.log(findLongestWord('Google do a roll')); // 'Google'

// console.log(findLongestWord('May the force be with you')); // 'force'