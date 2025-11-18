function buscarRut() {
  const rutIngresado = document.getElementById("search-bar").value.trim().toLowerCase();
  const normalizarRut = (rut) => rut.replace(/[.-]/g, "").toLowerCase();

  const resultado = usuarios.find(u => normalizarRut(u.rut) === normalizarRut(rutIngresado));

  const resultDiv = document.getElementById("result");
  resultDiv.innerHTML = ""; 

  if (resultado) {
    let textoInhabilidad = resultado.inhabilidad;
    let estiloInhabilidad = 'color: green; font-weight: bold;';

    if (textoInhabilidad.toLowerCase() === 'perpetua') {
      estiloInhabilidad = 'color: red; font-weight: bold;';
    }

    resultDiv.innerHTML = `
      <div class="card-resultado">
        <p><strong>RUT:</strong> ${resultado.rut}</p>
        <p><strong>Nombre:</strong> ${resultado.nombre}</p>
        <p><strong>Juzgado Origen:</strong> ${resultado.juzgado}</p>
        <p><strong>Rit:</strong> ${resultado.rit}</p>
        <p><strong>Fecha Fallo:</strong> ${resultado.fechaFallo}</p>
        <p><strong>Inhabilidad:</strong> <span style="${estiloInhabilidad}">${textoInhabilidad}</span></p>
      </div>
    `;
  } else {
    resultDiv.innerHTML = `
      <div class="card-resultado no-result">
        ❌ No se encontró ningún registro de inhabilidad asociado al RUT ${rutIngresado.toUpperCase()}.
      </div>
    `;
  }
}
