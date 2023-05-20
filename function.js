function GetName() {
    let Name = "ifeanyi"
    let lastName = "Chukwu"
    let Age = 27;
    let PhoneNumber = "+2348137935760" 
    let fullDetail = (`My Name is ${Name} ${lastName} , i am ${Age} Years And My Number is ${PhoneNumber}`)
    return fullDetail;
    
}


GetName()


function Addition(a, b) {
    
   return   a + b >= 10 ? "the number is more than Decade" : "The number is less than Decade" 

    

}

Addition(5, 6)


let number = [
    1,2,3,4,5,6,7,8,9,10
]

for (let index = 0; index < number.length; index++) {
    const element = number[index];

    console.log(element)
    
}
