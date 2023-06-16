let arrayC = ['Chicken in the oven', 'Fried Chicken with rice', 'Asian Style Chicken', 'Honey garlic Chicken', 'Sopa de chicken', 'Garlic butter Chicken', 'Poke Bowl'];
let arrayB = ['Fried Beef', 'boeuf bourguignon', 'Asian style Beef', 'Stroganoff', 'Chili con carne'];
let arrayM = ['Albondigas', 'Hamburguesas', 'Meat loaf', 'Bolognesa', 'Menestrone', 'Pasta con salciccia', 'Meatball curry', 'Cabagge Stew', 'Tacos'];
let arrayP = ['Fried Puerco', 'Puerco in the oven', 'Schnitzel', 'Calapurca', 'Poke Bowl', 'Garlic Ginger Sticky Pork', 'Carnitas para Tacos'];
let arrayO = ['Sopa de Shrimp', 'Sopa de pescado', 'Salmon in the oven', 'Korvito con maccarones', 'Pita with kebab', 'Moussaka', 'Tacos de pescado'];

let userInput = document.getElementById('mainInput');
let result = document.getElementById('recipe');
let button = document.getElementById('main-button');



button.addEventListener('click', function () {
    let value1 = userInput.value
    let value = value1.toLowerCase()
    if (value === 'chicken') {
        let random = Math.floor(Math.random() * arrayC.length)
        result.innerHTML = arrayC[random]

    } else if (value === 'beef') {
        let random = Math.floor(Math.random() * arrayB.length)
        result.innerHTML = arrayB[random]

    } else if (value === 'pork') {
        let random = Math.floor(Math.random() * arrayP.length)
        result.innerHTML = arrayP[random]
    } else if (value === 'minced') {
        let random = Math.floor(Math.random() * arrayM.length)
        result.innerHTML = arrayM[random]
    } else if (value === 'other') {
        let random = Math.floor(Math.random() * arrayO.length)
        result.innerHTML = arrayO[random]

    } else {
        result.innerHTML = 'you need to write something dude!'
    }

})


