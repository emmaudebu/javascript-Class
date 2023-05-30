
let container = document.querySelector('.container')
let header = document.querySelector('h1')
let para = document.querySelector('p')

header.classList.add('bold-text')
header.classList.add('large-text')

let Span = document.createElement('span')
container.appendChild(Span)
Span.classList.add('cohort')
Span.innerHTML = "Febuary Cohort"