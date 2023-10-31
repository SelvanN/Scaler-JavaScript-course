

//  The For in loops

// In Javascript, the for-in-loop allows you to loop through the properties of an object.
// The Statements of code found within the loop body will be executed once for each property of the objects.

// example : 1

var colors = {
    firstcolor: "red",
    secondcolor: "bule",
    thirdcolor: "green"
}


for (var color in colors) {
    console.log(colors[color])
}

for (var color in colors) {
    console.log(color + " -> " + colors[color])
}

// example:2

var players = {
    msdhoni: "Keeper",
    rohit: "Batsman",
    shami: "Bowler",
    jaddu: "Fielder"
}

for (var role in players) {
    console.log(players[role])
}
for (var mode in players) {
    console.log(mode + " -> " + players[mode])

}


// example: 3 using array method

var electronics = ["Laptop" , "Mobile" , "Television" , "Remote"]

for (var things in electronics){
    console.log(electronics[things])
}

for (var things in electronics){
    console.log( things+ " -> " + electronics[things])
}
