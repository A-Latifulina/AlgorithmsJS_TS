//an algorith takes an array of numbers as input and calculates the sum of those numbers
//define time complexity + determine lowest possible time complexity

function sumNumbers(numbers) {
    return numbers.reduce((sum, curNum) => sum + curNum ,0);
}

console.log(sumNumbers([3,10,50]));
//Constant time complexity not possible, only linear, 0(n)
