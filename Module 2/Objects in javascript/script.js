

//  Topics 

/* 

* what are objects
* initializing an object
* Playing around with objects



// what are objects


* In javascript, an object is an unordered collection of key-value pairs.
  each key-value pair is called property.

* The key of a property can be a string, and the value of a 
    property can be any value,
            eg:
              string , number , array and function

* Define a object using is curly brackets { }

            eg:
            var personName = {
                firstName : "Tamil",
                lastName : "selva" ,
                age : 23
            }
*/


var personName = {
  firstName: "Tamil",
  lastName: "selva",
  age: 23
}
console.log(personName)
console.log(personName.age)


var ipl = {
  Teams: ["CSK", 'MI', 'RCB', 'GT', 'SRH',],
  Captains: ['MS.DHONI', 'ROHIT', 'VIRAT', 'HARDHIK', 'WARNER'],
  CSK: {
    venue: "Chennai",
    date: '12/03/1999',
    time: '7pm',
    match: "csk vs mi",
    captain: "ms dhoni",
    vice_captain: "jaddu"
  },

  MI: {
    venue: "mumbai",
    date: '16/03/1999',
    time: '7pm',
    match: "mi vs rcb",
    captain: "rohit sharma",
    vice_captain: "surya"
  }
}

ipl.RCB = {
  venue: "Bangalore",
  date: '20/03/1999',
  time: '7pm',
  match: "rcb vs gt",
  captain: "virat",
  vice_captain: "ABD"
}

delete ipl.CSK.time

ipl.Teams[5] = "KKk"
ipl.Teams[6] = "RR"

console.log(ipl)

console.log(ipl.MI.captain)
console.log(ipl.CSK.captain)
console.log(ipl.Captains[2])
console.log(ipl.Captains.length)