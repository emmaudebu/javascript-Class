// 1. create an object literal of this class showing the female and male in the class
const NumberOfStudent = {
    Girl: 2,
    Boys:8,

}

const male = 9;
const female = 2;
const isPresentALL = true;



// create an array of all the color worn in the class

let colors = [
    
    "Black",
    "white",
    "pink",
    "rainbow",
    "Ankara",
    

]



const bioData = {
    BloodGroup: "0+",
    weight: 68,
    isPregnant: false,
}



console.log(
    typeof colors,
    typeof NumberOfStudent,
    typeof bioData,
    typeof isPresentALL,
    typeof female,
    typeof male,
);




// operators in javascript


function Addition() {
    let students = male + female;
    let classes = 10;
    let cl =  classes++
    let subtraction = male - female;
    let Remainder = male % female;
    console.log(students++)
    console.log(subtraction)
    console.log(Remainder)
    console.log(2**4)
}


Addition() 