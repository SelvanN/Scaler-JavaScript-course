//   Hoisting


console.log(a)     //undefined
greet()            // hello everyone
add(2, 4)          // error msg showing , buz its inside a variable



var a = 10

function greet() {
    console.log(" hello everyone ")
}

console.log(a)    // 10
greet()           // hello everyone


//  note:


//  function will work every where of body, but variable will not work like that ,


//  Function expression

var add = function(a, b){
    console.log(a+b)
}   
add(2, 4)    // 6


