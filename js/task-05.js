const inputData = document.querySelector('[id="name-input"]')
const nameOutput = document.querySelector('[id="name-output"]')



inputData.addEventListener('input', onInput)


function onInput(evt) {
    if (evt.currentTarget.value !== '') {
      nameOutput.textContent = evt.currentTarget.value;
    } else {
      nameOutput.textContent = 'Anonymous';
    }
  }

  
  
  
  