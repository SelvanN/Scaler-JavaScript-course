

// Topics

/* 1. what is Arrays?
   2. Creating an Array?
   3. Characteristics of an array 


// 1. What is Array

    * Using Array is stored a data and also 
                       stored multiple data types (var arr = [ 12 , " selva" , true , 12.93]).

    * index starts from 0 to upto the last element
    * length starts from 1 to upto the last element
    * Array to define a square brackets [ ]
    */
// eg: we can store different type of data in array.

var arr = [12, " selva", true, 12.93]
console.log(arr);

//  accessing the elements with index

var a = arr[0]
console.log(a);

//  replacing the value of an array by using index

arr[1] = "Tamil"
console.log(arr)

// get a length value of an array

var b = arr.length
console.log( " length of the array is " , b);


// array methods 

arr.push(1000)
console.log("push array" , arr)    

arr.pop()
console.log("pop array" , arr)  

arr.shift()
console.log("shift array" , arr)  

arr.unshift("hello")
console.log("unshift array" , arr)



