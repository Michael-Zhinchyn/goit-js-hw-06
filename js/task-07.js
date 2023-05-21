const controller = document.querySelector('[id="font-size-control"]')
const text = document.querySelector('[id="text"]')


controller.addEventListener('input', function () {
    text.style.fontSize = controller.value + 'px'
})