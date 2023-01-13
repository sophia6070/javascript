const form = document.querySelector('form')
const input = form.querySelector('input')
const foodList = document.querySelector('.food_list')

// 5470b548
// 5a73909af775cd55cec304b31b033758

const APP_ID = '5470b548'
const APP_KEY = '5a73909af775cd55cec304b31b033758'

const baseUrl = `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}&from=0&to=3&calories=591-722&health=alcohol-free`

function init() {
  console.log(form)
  console.log(input)
  console.log(foodList)
}

init()
