const ageTitle = document.querySelector("#age");
const input = document.querySelector("#input");

const writeAge = () => {
    const inputValue = input.value;
    const mensaje = inputValue >=18 ? "Eres mayor de edad" : "Eres menor de edad";
    ageTitle.textContent = mensaje;
}


