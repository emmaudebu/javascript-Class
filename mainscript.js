



function Addition(event) {
    event.preventDefault()
    let FirstValue = document.getElementById("first-number").value
    let SecondValue = document.getElementById('second-number').value;
    let answer = document.getElementById('answer')
    let RESULT = Number(FirstValue) + Number(SecondValue);
    answer.innerHTML = RESULT;
    console.log(RESULT)
}
function Module(event) {
    event.preventDefault()
    let FirstValue = document.getElementById("first-number").value
    let SecondValue = document.getElementById('second-number').value;
    let answer = document.getElementById('answer')
    let RESULT = Number(FirstValue) ** Number(SecondValue);
    answer.innerHTML = RESULT;
    console.log(RESULT)
}

