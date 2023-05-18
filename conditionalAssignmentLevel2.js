
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

if (Month.toLowerCase == "september".toUpperCase || Month == "October".toUpperCase || Month == "November".toUpperCase) {
    
    alert( `The Month ${Month} and the season is Autum`)

    
} else {
    
}
