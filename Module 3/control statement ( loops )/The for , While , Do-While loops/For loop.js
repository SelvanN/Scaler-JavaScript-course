//  For loop

var a = 'Hello world'

for (var i = 0; i < 10; i++) {
    console.log(a)
}

var num = [2, 3, 4, 5, 6, 7, 8]
var squaredArray = []
var Array = []


for (i = 0; i < num.length; i++) {
    squaredArray.push(num[i] * num[i]);
    Array.push(num[i] + num[i]);
}

console.log(squaredArray)
console.log(Array)


for(let i = 5; i <= 10 ; i++){
    console.log(i);
   }