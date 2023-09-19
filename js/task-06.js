const inputElement = document.getElementById("validation-input");

inputElement.addEventListener("blur", () => {
  const inputValue = inputElement.value;
  const requiredLength = parseInt(inputElement.getAttribute("data-length"));

  if (inputValue.length === requiredLength) {
    inputElement.classList.remove("invalid");
    inputElement.classList.add("valid");
  } else {
    inputElement.classList.remove("valid");
    inputElement.classList.add("invalid");
  }
});
