// 🧠 Objective:
// The goal of this assignment is to practice declaring, assigning, and accessing data in JavaScript Arrays.

// 📝 Reminder:
// Run your code using the command: node index.js

// ----------------------------------------------------------
// Part 1 [2 pts]
// ----------------------------------------------------------
// Create an array for each class with the following names:
// csRoster, mathRoster, elaRoster, ssRoster, electivesRoster (5 arrays total)
// Each should contain 3 unique student names (you can make them up or use classmates)

let csRoster = ["osmelly ", "Mile", "kiana"]  
let mathRoster = ["Sophis", "jennifer", "marco"]
let elaRoster = ["jayden", "aasman", "eddie"]
let ssRoster = ["murphy", "lia", "ashley"]
let electivesRoster = ["miguel", "kimberly", "ava"]

console.log("Inital Roster")
console.log("CS:", csRoster)
console.log("Math:", mathRoster)
console.log("Ela:", elaRoster)
console.log("SS:", ssRoster)
console.log("Elective:", electivesRoster)



// ----------------------------------------------------------
// Part 2 [2 pts]
// ----------------------------------------------------------
// Five new students enrolled at CSH: JP, Arnold, Peach, Laila, Jayden
// Use the push() method to add ONE of these students to each roster:
// Add JP → CS
// Add Arnold → Math
// Add Peach → ELA
// Add Laila → Social Studies
// Add Jayden → Electives

csRoster.push("JP")
mathRoster.push("Arnold")
elaRoster.push("Peach")
ssRoster.push("Laila")
electivesRoster.push("Jayden")

console.log("\nAfter Adding New Students")
console.log("CS:", csRoster)
console.log("Math:", mathRoster)
console.log("Ela:", elaRoster)
console.log("SS:", ssRoster)
console.log("Elective:", electivesRoster)




// ----------------------------------------------------------
// Part 3 [2 pts]
// ----------------------------------------------------------
// Jayden has unenrolled from CSH.
// Use an array method to remove Jayden from the electivesRoster.


electivesRoster.pop()

console.log("\nAfter Jayden Unenrolled:")
console.log("Elective:", electivesRoster)


// ----------------------------------------------------------
// Part 4 [2 pts]
// ----------------------------------------------------------
// Create a new array named cshRosters that stores all class rosters in this order:
// 0: csRoster
// 1: mathRoster
// 2: elaRoster
// 3: ssRoster
// 4: electivesRoster

let cshRoster = [csRoster, mathRoster, elaRoster, ssRoster, electivesRoster]

console.log("\nAll csh Rosters Combined")
console.log(cshRoster)



// Using ONLY cshRosters and list indexing, print the name of the
// second student in the ssRoster (index 3 in cshRosters)

console.log("\nSecond student in the SS roster:")
console.log(cshRoster[3][1])



// ✅ Done! 
