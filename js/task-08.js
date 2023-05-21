const form = document.querySelector('.login-form')

form.addEventListener('submit', onSubmit)

function onSubmit(event) {
  event.preventDefault()

    const {email, password} = event.currentTarget.elements

    if (email === "" || password === "") {
      
      alert('Будь ласка, заповніть всі поля')
      
  } else {
   
    const userData = {
      email: email.value,
      password: password.value,
    }

    console.dir(userData)

    event.target.reset()
  }
}

