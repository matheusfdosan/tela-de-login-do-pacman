const inputs = document.querySelectorAll(".login__label .input")

for (const input of inputs) {
  input.addEventListener("focus", (event) => {
    event.target.previousElementSibling.classList.add("active")
  })
  input.addEventListener("blur", (event) => {
    if (event.target.value.length === 0) {
      event.target.previousElementSibling.classList.remove("active")
    }
  })
  input.addEventListener("input", (event) => {
    if (inputs[0].value.length !== 0 && inputs[1].value.length >= 8) {
      document.querySelector(".login__button").classList.add("active")
    } else {
      document.querySelector(".login__button").classList.remove("active")
    }
  })
}
