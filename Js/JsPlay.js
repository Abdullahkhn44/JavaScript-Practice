
// Reverse ++ a string

// function fun(params) {

//     let rev = params.toString()
//     .split(' ')
//     .map(word=>word.split('').reverse().join(''))
//     .join(' ')
//     return rev
// }

// console.log(fun(['My name is Abdullah']))



//Palindrome

// function palindrome(param){

//     let str = param.split('').reverse().join('')

//     if (str === param) {
//         return true;
//     }else{
//         return false;
//     }

// }

//  console.log(palindrome('deedd'))


// largest number in an array

// function largestNumber(arr) {
//     let max = arr[0];
//     for (let i = 1; i <= arr.length; i++) {

//         if (max <= arr[i]) {
//             max = arr[i]

//         }

//     }
//     return max
// }

// console.log(largestNumber([4, 1, 8, 6, 5,12,0,1,3,14,5]))


// Remove the first element from an array

// function remove(arr) {
//     let y = arr.slice(0,)
//     return y
// }
// console.log(remove([1, 4, 2, 8, 5]))


//Call back function

// callback function

// function one(callback){

//     console.info('hey this is one')
//     callback()

// }

// function two(){
//     console.info('hey this is two')
// }

// one(two)

//Arrow function
// const addArrow=(a,b)=>{
//     return a+b;
// }
// console.log(addArrow(4,2))

// obj and property

// const obj = {name:'riya',position:'SWE'}
// obj.age=21
// delete obj.position
// console.log(obj)

// Reduce Method

// const scores = [22,44,11,4,0,45] //player scores

// const totalScore = scores.reduce((acc,cv)=>acc + cv) ;
// console.log(totalScore)


// console.log('gfd'.repeat(3).split('').join(','))

// sum of an array

// const sumArray= (arr) =>{
//     let sum = 0
//     for(i = 0; i<arr.length; i++){

//         sum = sum + arr[i]
//     }
//     return sum

// }
// console.log(sumArray([22,1,44,3,11,5]))

// const factorial = (num) =>{
//     let ans = 1
//     for(i=2;i<=num;i++){
//         ans = ans * i
//     }
//     return ans

// }

// console.log((factorial(5)))


// fibonacii

// function fib(num) {
//     let first = 0;
//     let second = 1;
//     let nextNum;

//     for (let i = 1; i <= num; i++) {
//         console.log(first)

//         nextNum = first + second

//         first = second
//         second = nextNum;

//     }

// }
// fib(7)

// power of a number

// function power 

// function power(base, exponent) {
//     let res = 1
//     for (let i = 1; i <= exponent; i++) {
//         res = res * base;
//     }
//     return res

// }
// console.log(power(2, 3))

// frequency in an array

// function freq(arr){

//     let store = {};

//     for(i=0;i<arr.length;i++){
//         const temp = arr[i]

//         if(store[temp]){
//             store[temp] = store[temp] + 1
//         }else{
//             store[temp] = 1

//         }
//     }
//     return store

// }
// console.log(freq([1,3,2,3,5,2,7,4,3,4,3,2,1]))


// occurences of char in string

// function countString(str, char) {
//     let newStr = str.split('')
//     let count = 0
//     for (i = 0; i <= newStr.length; i++) {

//         if (newStr[i] === char) {
//             count = count + 1
//         }


//     }
//     return count
// }

// console.log(countString('Hi Abdullah how are you', 'h'))

// celcius to farenheit

// function conversion(temp,num){

//     if(num === 1){
//         let toFarenheit = (temp * 9/5) + 32;
//         return toFarenheit
//     }else if(num===2){
//         let toCelcius = (temp-32)*5/9
//         return toCelcius
//     }
//     else{
//         console.log('INVALID NUMBER')
//         return null
//     }



// }

// console.log(conversion(37,1))

// function order(arr) {

//     for (i = 0; i <= arr.length; i++) {
//         for (j = i + 1; j <= arr.length; j++) {

//             if (arr[i] < arr[j]) {
//                 let temp = arr[i]
//                 arr[i] = arr[j]
//                 arr[j] = temp
//             }
//         }
//     }
//     return arr
// }

// console.log(order([5,3,8,1]))

//merge
// function mergeArray(arr1,arr2){
//  let arr3 = arr1.concat(arr2)
//  return arr3
// }

// console.log(mergeArray([1,2,3],[4,5,6]))

// intersection

// function inter(arr1, arr2) {
//     let arr3 =[]

//     for (i = 0; i < arr1.length; i++) {
//         for (j = 0; j < arr2.length; j++) {
//             if (arr1[i]===arr2[j]) {
//                 arr3.push(arr1[i])


//             }


//         }
//     }
//     return arr3
// }

// console.log(inter([1, 3, 5, 7, 9], [2, 5, 6, 7, 9]))

// function min(arr){
//     let num=arr[0]

//     for(let i=0;i<=arr.length;i++){
//         if (arr[i]<num) {
//             num = arr[i]
//         }

//     }
//     return num

// }
// console.log(min([5,10,6,8,0,3,-1,1]))

// function Union(arr1,arr2){
//     let arr3 = []
//     for(let i=0;i<arr1.length;i++)
//     {
//         if(!arr3.includes(arr1[i])){
//             arr3.push(arr1[i])
//         }
//     }   
//     for(let j=0;j<arr2.length;j++)
//     {
//         if(!arr3.includes(arr2[j])){
//             arr3.push(arr2[j])
//         }
//     }   

//     return arr3


// }

// console.log(Union([1,2,3,4,5,6,8],[2,4,6,8]))


// function Min(arr) {
//     let arr2 = arr[0]
//     for(let i=0;i<arr.length;i++){
//         if(arr[i]<arr2){
//             arr2 = arr[i]
//         }
//     }
// return arr2
// }

// console.log(Min([3, 6, 9, 1, 5]))

function Sub(str, trt) {

return str.includes(trt)

}

console.log(Sub('GeeksForGeeks', 'For'))