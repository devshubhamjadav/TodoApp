let form = document.querySelector('form')
let input = document.querySelector('input')
let ul = document.querySelector('ul')
let button = document.querySelector('button')
let buttons =document.querySelector('#removeAll')

function todo(e) {
    e.preventDefault()
    let newLi = document.createElement('li')
    newLi.innerText = input.value
    newLi.style.fontSize = '23px'
    newLi.style.color = '#c471ed'
    newLi.style.marginTop = '20px'
    const delbtn = document.createElement('button')
    delbtn.innerText = "Delete"
    delbtn.className = "red-btn"
    newLi.appendChild(delbtn)
    ul.appendChild(newLi)
    form.reset()
}

form.addEventListener('submit', todo)



function deleteTodo(e) {
    if (e.target.className.includes('red-btn')) {
        let li = e.target.parentElement
        ul.removeChild(li)
    }
}

ul.addEventListener('click', deleteTodo)

function deleteAll(e) {
        ul.remove()
}
buttons.addEventListener("click", deleteAll)