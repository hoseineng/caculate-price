let $ = document
const pricecalculate = $.querySelector('#price')
const quantityCalculate = $.querySelector('#quantity')
const btnCalculate = $.querySelector('button')
const showDiscountTotal = $.querySelector('#totalDiscount')
const showTaxTotal = $.querySelector('#totalTax')
const showPriceFinal = $.querySelector('#finalPrice')
const showTotalProfit = $.querySelector('#totalProfit')


function calculate(){
const priceValue =parseFloat(pricecalculate.value)
const quantityValue =   parseInt(quantityCalculate.value)


let discountRate = 0.10
let taxRate = 0.20
let discountValue = priceValue *  discountRate * quantityValue
let taxValue = priceValue * taxRate* quantityValue
console.log('كل تخفيف :' , discountValue);
console.log(' كل ماليات : '  , taxValue);
const finalPriceItem =(priceValue - discountValue/quantityValue + taxValue / quantityValue) * quantityValue
const finalPrice = finalPriceItem * quantityValue
showDiscountTotal.textContent = discountValue
showTaxTotal.textContent = taxValue
showPriceFinal.textContent = finalPriceItem
showTotalProfit.textContent = finalPrice
}


btnCalculate.addEventListener('click' , calculate);