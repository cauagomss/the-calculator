// VALORES NO DISPLAY
const insert = (n) => {
    const display = document.querySelector("#resultado").value;
    document.querySelector("#resultado").value = display + n

}

// ALL CLEAR
const deleteAC = () => {
    document.querySelector("#resultado").value = ""
}

const backSpace = () => {
    const valor = document.querySelector("#resultado").value;
    document.querySelector("#resultado").value = valor.substring(0, valor.length - 1)
}

// BACK-PRESS
const btn = document.querySelector("#back-btn")
let intervalo

btn.addEventListener("mousedown", () => {
    intervalo = setInterval(() => {
        backSpace()
    }, 100)
})

btn.addEventListener('mouseup', () => {
    clearInterval(intervalo)
})

btn.addEventListener('mouseleave', () => {
    clearInterval(intervalo)

})

// CALCULOS (=)
const calcular = () => {
    
}



