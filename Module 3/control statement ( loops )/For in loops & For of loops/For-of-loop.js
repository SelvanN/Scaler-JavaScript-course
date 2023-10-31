
//  For-of-loops:

// The for statement creates a loop iterating over iterable objects,
// including: built-in string, Array, array-like objects like Nodelist and also map and set



var scores =[60 , 80 ,93 , 75]

for(var mark in scores){
    console.log(mark)     // for in loop gives a key(property) like ,index number
}
for(var mark of scores){
    // mark = mark+5
    console.log(mark)     // for of loop give a value  
}


// method - entries:

var colors = [ 'red' , 'blue' , ' green' , "white"]

//  syntax

for( var [index , color] of colors.entries()){
    console.log(index + " -> " + color)
}




//  strings in for of loop


var str = " Tamil selvan"

for ( var Swords of str){
    console.log(Swords)
}