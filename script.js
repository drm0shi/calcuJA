let expresion = '';
const pantalla = document.getElementById('pantalla');

function agregarNumero(num) {
    expresion += num;
    pantalla.textContent = expresion;
}

function limpiar() {
    expresion = '';
    pantalla.textContent = expresion;
}

function borrarUltimo() {
    expresion = expresion.slice(0, -1);
    pantalla.textContent = expresion;
}

function calcular() {
    try {
        let resultado = '';
        
        // Verificar las sumas chistosas
        if (expresion === '1+1') {
            resultado = 'π';
        } else if (expresion === '2+2') {
            resultado = '🐟';
        } else if (expresion === '4+4') {
            resultado = '🏠';
        } else if (expresion === '7+7') {
            resultado = '🎶';
        } else if (expresion === '8+8') {
            resultado = '∞';
        } else if (expresion === '9+9') {
            resultado = '66';
        } else {
            // Evaluar la expresión normalmente
            resultado = eval(expresion);
        }
        
        // Guardar el resultado y redirigir
        localStorage.setItem('resultadoCalculadora', resultado);
        window.location.href = 'resultado/resp.html';
        
    } catch (error) {
        pantalla.textContent = 'Error';
    }
}
