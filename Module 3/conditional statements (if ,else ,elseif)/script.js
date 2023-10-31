
//  IF and ELSE condition:

// if i scored above 90, my dad will present me a bicycle

var myScore = 95

if ( myScore > 90){
    console.log(" yayyy i got my cycle gift")
}

else{
    console.log("Opps, this time i didn't get the cycle")
}



//  ELSE IF Condition:

// 90 to 100 - A
// 70 to 89 - B
// 50 to 69 - C
// less than 50 - F


var studentScore = 24

if(studentScore >90){
    console.log('student has scored an A')
}

else if ( studentScore >= 70 && studentScore <= 89){
    console.log('Student has scored an B')
}
else if ( studentScore >= 50 && studentScore <= 69){
    console.log('Student has scored an C')
}

else {
    console.log('Student has failed an F')
}