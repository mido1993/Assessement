
let yourName = "Elmahdi Mhaijir" // name!

// We'll use these variables to track the counts of each cookie type
let gb = 0 // Gingerbread
let cc = 0 // Chocolate Chip
let sugar = 0 // Sugar Sprinkle
let total = 0

const credit = document.querySelector('#credit')
credit.textContent = `Created by ${yourName}`
// selecting the element with an id of add-gb
const gbPlusBtn = document.querySelector('#add-gb')
const gbMinusBtn = document.querySelector('#minus-gb')
const quantityGb  = document.querySelector('#qty-gb')
const ccPlusBtn = document.querySelector('#add-cc')
const ccMinusBtn = document.querySelector('#minus-cc')
const quantityCc  = document.querySelector('#qty-cc')
const sugarPlusBtn = document.querySelector('#add-sugar')
const sugarMinusBtn = document.querySelector('#minus-sugar')
const quantitySugar  = document.querySelector('#qty-sugar')
const quantityTotal = document.querySelector('#qty-total')

// gb

gbPlusBtn.addEventListener('click', function() {
    gb = gb + 1

    
quantityGb.textContent = ` ${gb}`

})

gbMinusBtn.addEventListener('click', function() {
    
    gb = gb - 1 
   
    quantityGb.textContent = ` ${ gb}`
    
})

// Cc
ccPlusBtn.addEventListener('click', function() {
    cc = cc + 1
    
    
quantityCc.textContent = ` ${cc}`



})

ccMinusBtn.addEventListener('click', function() {
    cc = cc - 1
    
    quantityCc.textContent = ` ${cc}`
})
// sugar
sugarPlusBtn.addEventListener('click', function() {
    sugar = sugar + 1
    
    
quantitySugar.textContent = ` ${sugar}`



})

sugarMinusBtn.addEventListener('click', function() {
    sugar = sugar - 1
    
    quantitySugar.textContent = ` ${sugar}`
})

//total 
gbPlusBtn.addEventListener('click', function( ) {
    
    total = gb + cc + sugar

    quantityTotal.textContent = ` ${total}`
})

