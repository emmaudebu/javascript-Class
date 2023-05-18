// 1. Get user input using prompt(“Enter your age:”).If user is 18 or older, give feedback: 'You are old enough to drive' but if not 18 give another feedback stating to wait for the number of years he needs to turn 18.

//     ```sh
//    Enter your age: 30
//    You are old enough to drive.

//    Enter your age:15
//    You are left with 3 years to drive.

const MyAge = prompt(' Enter your Age');

const ValidAge = 18;

if (MyAge >= 18) {
    console.log('You are old enough to drive');
    
    
} else {

    const Differnce = ValidAge - MyAge
    console.log(`Please wait for ${Differnce} years to turn 18 before yo drive`)
    
}



// 1. Compare the values of myAge and yourAge using if … else. Based on the comparison and log the result to console stating who is older(me or you).Use prompt(“Enter your age:”) to get the age as input.

//    ```sh
//    Enter your age: 30
//    You are 5 years older than me.


let Myage = prompt('Enter your age');
const YourAge = 35;
if (Myage < YourAge) {
    let RESULT = YourAge-Myage  ;
    console.log(`You are ${RESULT} years older than me`)
    
    
    
} else if(Myage > YourAge) {
    let RESULT = Myage -YourAge   ;
    console.log(`I am  ${RESULT} years older than you`)
    
} else {
    console.log("We are mates")
}







// 1. If a is greater than b return 'a is greater than b' else 'a is less than b'.Try to implement it in to ways

//     - using if else
//     - ternary operator.

//    ```js
//    let a = 4;
//    let b = 3;
//    ```

//         ```sh
//      4 is greater than 3
//    ```

let a = 4
 b = 3;

{ a > b ? "a is greater than b" : "a is less than b" };



if (a > b) {

    console.log( "a is greater than b" );
    
} else {
    console.log("b is greater than a" );
    
}