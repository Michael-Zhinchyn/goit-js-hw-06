const inputData = document.querySelector('#name-input');
const nameOutput = document.querySelector('#name-output');

inputData.addEventListener('input', onInput);

function onInput(evt) {
  nameOutput.textContent = 
  evt.currentTarget.value !== '' ? evt.currentTarget.value : 'Anonymous';
}

  
  
  
  