// 1. Intentamos recuperar el número guardado anteriormente
let guardado = localStorage.getItem("miContador");
let contador = guardado ? parseInt(guardado) : 0;

const visual = document.getElementById("numero");
const boton = document.getElementById("boton");

// Mostramos el número que recuperamos
visual.innerText = contador;

boton.onclick = function() {
    contador = contador + 1;
    visual.innerText = contador;
    
    // 2. LA MÁGICA: Guardamos el nuevo número en la memoria del navegador
    localStorage.setItem("miContador", contador);
    
    if (contador % 5 === 0) {
        document.body.style.backgroundColor = "#e94560";
    } else {
        document.body.style.backgroundColor = "#1a1a2e";
    }
}