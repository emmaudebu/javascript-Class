
// ### Exercises: Level 2

// 1. Write a code which can give grades to students according to their scores:
// - 80 - 100, A
//     - 70 - 89, B
//     - 60 - 69, C
//     - 50 - 59, D
//     - 0 - 49, F

const scores = prompt('Enter your scores')
if (scores <= 49) {
    alert("your Grade is F")
    
} else if (scores > 50 && scores < 60) {
    alert("your Grade is D")
} else if (scores == 60 && scores < 70) {
    alert(' your Grade is C')
    
} else if (scores == 70 && scores < 90) {
    alert(' your Grade is B')
} else if (scores == 90 && scores <= 100) {
    alert(' your Grade is A')
} else {
    alert('INVALID SCORES')
}





// 1. Check if the season is Autumn, Winter, Spring or Summer.
//    If the user input is:
// - September, October or November, the season is Autumn.
//    - December, January or February, the season is Winter.
//    - March, April or May, the season is Spring
//     - June, July or August, the season is Summer
//

const Month = prompt('Enter the month')

if (Month.toUpperCase() == "september".toUpperCase() || Month.toUpperCase() == "october".toUpperCase() || Month.toUpperCase() == "november".toUpperCase()) {
    
    alert( `The Month ${Month} and the season is Autum`)

    
} else if (Month.toUpperCase() == "December".toUpperCase() || Month.toUpperCase() == "January".toUpperCase() || Month.toUpperCase() == "February".toUpperCase()) {

    alert(`The Month ${Month} and the season is Winter`)

} else if (Month.toUpperCase() == "March".toUpperCase() || Month.toUpperCase() == "April ".toUpperCase() || Month.toUpperCase() == "May".toUpperCase()) {

    alert(`The Month ${Month} and the season is Spring`)
} else if (Month.toUpperCase() == "June".toUpperCase() || Month.toUpperCase() == "July ".toUpperCase() || Month.toUpperCase() == "August".toUpperCase()) {
    alert(`The Month ${Month} and the season is Summer`)
    
} else {
    alert('Invalid input please put in a correct month')
}
