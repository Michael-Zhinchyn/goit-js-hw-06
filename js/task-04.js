let counterValue = 0

const incrementBtn = document.querySelector('[data-action="increment"]')
const decrementBtn = document.querySelector('[data-action="decrement"]')
const result = document.querySelector('[id="value"]')

incrementBtn.addEventListener('click', () => {
	counterValue+=1
	result.textContent = counterValue
	result.style.color = '#00fa0d'
})

decrementBtn.addEventListener('click', () => {
	counterValue-=1
	result.textContent = counterValue
	result.style.color = 'red'
})







