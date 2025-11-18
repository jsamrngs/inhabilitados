function buscarRut() {
    const rutIngresado = document.getElementById("search-bar").value.trim().toLowerCase();

    const normalizarRut = (rut) => rut.replace(/[.-]/g, "").toLowerCase();
    
    const resultado = usuarios.find(u => normalizarRut(u.rut) === normalizarRut(rutIngresado));

    const tablaBody = document.getElementById("tabla-body");
    tablaBody.innerHTML = ""; 

    if (resultado) {
        let textoInhabilidad = resultado.inhabilidad;
        let estiloInhabilidad = 'font-weight: bold; color: green;';

        if (textoInhabilidad.toLowerCase() === 'perpetua') {
             estiloInhabilidad = 'font-weight: bold; color: red;';
        }

        const fila = `
            <tr>
                <td>${resultado.nombre}</td>
                <td>${resultado.rut}</td>
                <td>${resultado.juzgado}</td>
                <td>${resultado.rit}</td>
                <td>${resultado.fechaFallo}</td>
                <td style="${estiloInhabilidad}">${textoInhabilidad}</td>
            </tr>
        `;
        tablaBody.innerHTML = fila;
    } else {
      
        tablaBody.innerHTML = `
            <tr>
                <td colspan="6" style="color:#888; text-align:center; padding: 20px;">
                    ❌ No se encontró ningún registro de inhabilidad asociado al RUT ${rutIngresado.toUpperCase()}.
                </td>
            </tr>
        `;
    }
}