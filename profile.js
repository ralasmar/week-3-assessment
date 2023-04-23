function favoriteColor(evt) {
	evt.preventDefault()
	alert('My favorite color is green!')
}

function favoritePlace(evt) {
	evt.preventDefault()
	alert('My favorite place is Greece!')
}

function favoriteRitual(evt) {
	evt.preventDefault()
	alert('My favorite ritual is starting my morning with a cup of coffee!')
}

let button1 = document.querySelector('#color')
button1.addEventListener('click', favoriteColor)

let button2 = document.querySelector('#place')
button2.addEventListener('click', favoritePlace)

let button3 = document.querySelector('#ritual')
button3.addEventListener('click', favoriteRitual)
