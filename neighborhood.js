function restaurantRequest(evt) {
    evt.preventDefault()
    let places = ['Gyu-Kaku', 'Lynlake Brewery', 'Lagos Tacos', 'Red Dragon'];
    let random = Math.floor(Math.random() * places.length)
    let suggestion = places[random]
    alert(`You should try ${suggestion}`)
}


let restaurant = document.querySelector('#suggestion')
restaurant.addEventListener('click', restaurantRequest)