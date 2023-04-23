console.log("hello world");



function handleSubmit(evt) {
	evt.preventDefault();
	
	alert('form has been submitted successfully')
}


function promptCompliment(evt) {
	evt.preventDefault()
	alert('give the user a compliment')
}

let form = document.querySelector('#contact');
let photo = document.querySelector('#photo')

form.addEventListener('submit', handleSubmit);
photo.addEventListener('mouseover', promptCompliment)