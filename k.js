function sum(a, b) {  
      return a + b;
    }
sum(6,9)    
console.log(sum(6,9))

// 2.answer

function isEven(number) {
      return number % 2 === 0;
  }
isEven(10)  
console.log(isEven(10) )
// 3.answer
function toFahrenheit(celsius) {
  return celsius * (9 / 5) + 32;
}
// 4.answer
function max(a, b, c) {
  return Math.max(a, b, c);
}

    
// 5.answerfunction factorial(n) {
      function factorial(n) {
            if (n === 0 || n === 1) return 1;
            let result = 1;
            for (let i = 2; i <= n; i++) {
              result *= i;
            }
            return result;
          }
          
  
//   6.answer
function isPrime(num) {
      if (num <= 1) return false;
      for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
      }
      return true;
    }
    
  
// 7.answer
function reverseString(str) {
      return str.split('').reverse().join('');
    }
    
  
// 8.answer
function sumArray(arr) {
      let sum = 0;
      for (let num of arr) {
        sum += num;
      }
      return sum;
    }
    console.log(sumArray(arr))
// 9.answer
function longestWord(sentence) {
      const words = sentence.split(' ');
      let longest = '';
      for (let word of words) {
        if (word.length > longest.length) {
          longest = word;
        }
      }
      return longest;
    }
    
// 10.answer
function isPalindrome(str) {
      const reversed = str.split('').reverse().join('');
      return str === reversed;
    }
    
// 11.answer
function fibonacci(n) {
      if (n <= 1) return n;
      let a = 0, b = 1, temp;
      for (let i = 2; i <= n; i++) {
        temp = a + b;
        a = b;
        b = temp;
      }
      return b;
    }
    
// 12.answer
function countVowels(str) {
      const vowels = 'aeiouAEIOU';
      let count = 0;
      for (let char of str) {
        if (vowels.includes(char)) {
          count++;
        }
      }
      return count;
    }
    
// 13.answer
function uniqueElements(arr) {
      return [...new Set(arr)];
    }
    
// 14.answer
function power(base, exponent) {
      return Math.pow(base, exponent);
    }
    
// 15.answer
function sortArray(arr) {
      return arr.sort((a, b) => a - b);
    }
    
// 16.answer
function findMedian(arr) {
      const sorted = arr.slice().sort((a, b) => a - b);
      const mid = Math.floor(sorted.length / 2);
      return sorted.length % 2 === 0 
        ? (sorted[mid - 1] + sorted[mid]) / 2 
        : sorted[mid];
    }
    
// 17.answer
function capitalizeFirstLetter(str) {
      return str.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
    }

    
// 18.answer
function flattenArray(arr) {
      return arr.flat(Infinity);
    }
    

    function randomNumber(min, max) {
      return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    

    function countOccurrences(array, value) {
      let count = 0;
      for (let item of array) {
        if (item === value) {
          count++;
        }
      }
      return count;
    }
    