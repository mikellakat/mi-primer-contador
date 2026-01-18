
// Recuperamos el número guardado o empezamos en 0
let guardado = localStorage.getItem("miContador");
let contador = guardado ? parseInt(guardado) : 0;

const visual = document.getElementById("numero");
const boton = document.getElementById("boton");
const botonReset = document.getElementById("botonReset");

// Mostramos el número inicial
visual.innerText = contador;

// Lógica del botón de sumar
boton.onclick = function() {
    contador = contador + 1;
    visual.innerText = contador;
    localStorage.setItem("miContador", contador);
    
    // Cambio de color cada 5 clics
    if (contador % 5 === 0) {
        document.body.style.backgroundColor = "#e94560";
    } else {
        document.body.style.backgroundColor = "#1a1a2e";
    }
}

// Lógica del botón de REINICIAR
botonReset.onclick = function() {
    contador = 0;
    visual.innerText = contador;
    localStorage.setItem("miContador", 0);
    document.body.style.backgroundColor = "#1a1a2e";
    alert("Contador reiniciado");
}
