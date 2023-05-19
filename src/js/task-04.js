let counterValue = 0

const incrementBtn = document.querySelector('[data-action="increment"]')
const decrementBtn = document.querySelector('[data-action="decrement"]')
const result = document.querySelector('[id="value"]')

incrementBtn.addEventListener('click', function() {
	counterValue+=1
	console.log(counterValue);
	result.textContent = counterValue
	result.style.color = 'green'
})

decrementBtn.addEventListener('click', function() {
	counterValue-=1
	console.log(counterValue);
	result.textContent = counterValue
	result.style.color = 'red'
})






