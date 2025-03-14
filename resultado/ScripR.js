window.onload = function() {
    const resultado = localStorage.getItem('resultadoCalculadora') || 'No hay resultado';
    document.getElementById('resultado-valor').textContent = resultado;
}

function volverACalculadora() {
   window.location.href = window.location.origin + '/calcuJA/resultado/resp.html';
}
