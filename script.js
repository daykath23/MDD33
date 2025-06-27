// Función para mostrar una pantalla y ocultar las demás
function mostrarPantalla(id) {
  document.querySelectorAll('.pantalla').forEach(p => p.style.display = 'none');
  document.getElementById(id).style.display = 'block';
}

// Evaluar frase en Actividad 1 (solo ejemplo de validación simple)
function evaluarFrase(inputId, figuraEsperada) {
  const input = document.getElementById(inputId).value.trim();
  const feedback = document.getElementById('feedback1');
  if (input.length > 3) {
    feedback.textContent = `¡Buena frase! Parece una ${figuraEsperada}.`;
    feedback.style.color = 'green';
  } else {
    feedback.textContent = 'Tu frase es muy corta. Intenta agregar más detalles.';
    feedback.style.color = 'red';
  }
}

function resetear(inputId) {
  document.getElementById(inputId).value = '';
  document.getElementById('feedback1').textContent = '';
}

// Evaluación de actividad 2
function evaluarSeleccion() {
  const respuestas = Array.from(document.querySelectorAll('input[name="figura"]:checked')).map(e => e.value);
  const feedback = document.getElementById('feedback2');
  const correctas = ['personificación', 'hipérbole'];
  const aciertos = respuestas.filter(r => correctas.includes(r)).length;
  const errores = respuestas.filter(r => !correctas.includes(r)).length;
  if (aciertos === correctas.length && errores === 0) {
    feedback.textContent = '¡Correcto! Has identificado todas las figuras literarias.';
    feedback.style.color = 'green';
  } else {
    feedback.textContent = 'Revisa tus respuestas. Algunas no son correctas.';
    feedback.style.color = 'red';
  }
}

function resetearSeleccion() {
  document.querySelectorAll('input[name="figura"]').forEach(e => e.checked = false);
  document.getElementById('feedback2').textContent = '';
}

// Generar palabras aleatorias para actividad 3
function generarPalabras() {
  const sustantivos = ['nube', 'río', 'luz', 'sombra', 'estrella'];
  const adjetivos = ['triste', 'alegre', 'oscuro', 'brillante', 'invisible'];
  const acciones = ['caminar', 'bailar', 'gritar', 'caer', 'despertar'];

  const s = sustantivos[Math.floor(Math.random() * sustantivos.length)];
  const a = adjetivos[Math.floor(Math.random() * adjetivos.length)];
  const ac = acciones[Math.floor(Math.random() * acciones.length)];

  document.getElementById('palabrasAleatorias').textContent = `Palabras: ${s} – ${a} – ${ac}`;
}

// Evaluación libre (formativa)
function evaluarLibre() {
  const frase = document.getElementById('fraseLibre').value;
  const feedback = document.getElementById('feedbackLibre');
  if (frase.includes('como') || frase.includes('parece')) {
    feedback.textContent = '¡Parece un buen símil! ¿Puedes hacerlo aún más expresivo?';
  } else if (frase.match(/era un|es un|fue un/)) {
    feedback.textContent = '¡Buena metáfora! ¿Puedes añadir una acción para darle más fuerza?';
  } else {
    feedback.textContent = 'Sigue intentando. Piensa en cómo puedes personificar o exagerar.';
  }
}
