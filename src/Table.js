import React, { useState } from "react";

function Table() {
  const [quantities, setQuantities] = useState([0, 0, 0, 0, 0, 0, 0, 0, 0]);

  function handleQuantityChange(index, value) {
    if (/^\d*$/.test(value)) {
      const newQuantities = [...quantities];
      newQuantities[index] = value === "" ? "" : parseInt(value, 10);
      setQuantities(newQuantities);
    }
  }

  function computeDiplomadoScore(quantity) {
    const q = parseInt(quantity, 10);
    if (!q || q < 1) {
      return 0;
    }
    const score = 2 + (q - 1);
    return score > 4 ? 4 : score;
  }

  function computeEspecialidadScore(quantity) {
    const q = parseInt(quantity, 10);
    if (!q || q < 1) return 0;
    const score = 4 + (q - 1) * 2;
    return score > 6 ? 6 : score;
  }

  function computeMaestriaScore(quantity) {
    const q = parseInt(quantity, 10);
    if (!q || q < 1) return 0;
    const score = 8 + (q - 1) * 3;
    return score > 11 ? 11 : score;
  }

  function computeDoctoradoScore(quantity) {
    const q = parseInt(quantity, 10);
    return q >= 1 ? 12 : 0;
  }

  function computeActualizacionAcademicaScore(quantity) {
    const q = parseInt(quantity, 10);
    if (!q || q < 1) return 0;
    const score = q * 0.5;
    return score > 6 ? 6 : score;
  }

  function computeExperienciaGeneralScore(quantity) {
    const q = parseInt(quantity, 10);
    if (!q || q < 1) return 0;
    return q > 4 ? 4 : q;
  }

  function computeServidorPublicoScore(quantity) {
    const p = parseInt(quantity, 10);
    if (!p || p < 1) return 0;
    return p > 4 ? 4 : p;
  }

  function computeDocenteScore(quantity) {
    const q = parseInt(quantity, 10);
    return q >= 1 ? 2 : 0;
  }

  function computeInvestigacionScore(quantity) {
    const q = parseInt(quantity, 10);
    if (!q || q < 1) return 0;
    return q > 2 ? 2 : q;
  }

  const subtotalFormacion = Math.min(
    computeDiplomadoScore(quantities[0]) +
      computeEspecialidadScore(quantities[1]) +
      computeMaestriaScore(quantities[2]) +
      computeDoctoradoScore(quantities[3]),
    12
  );

  const subtotalActualizacion = Math.min(
    computeActualizacionAcademicaScore(quantities[4]),
    6
  );

  const subtotalExperiencia = Math.min(
    computeExperienciaGeneralScore(quantities[5]) +
      computeServidorPublicoScore(quantities[6]) +
      computeDocenteScore(quantities[7]),
    10
  );

  const subtotalProduccion = Math.min(
    computeInvestigacionScore(quantities[8]),
    2
  );

  function handleGuardar() {
    localStorage.setItem("tableData", JSON.stringify(quantities));
    alert("Datos guardados exitosamente.");
  }

  function handleImprimir() {
    window.print();
  }

  function handleCerrar() {
    console.log("Botón de cerrar presionado");
  }   

  return (
    <table>
      <thead>
        <tr>
          <th>CATEGORÍA</th>
          <th>PARÁMETROS</th>
          <th>CANTIDAD</th>
          <th>PUNTAJE</th>
          <th>MÁX.</th>
        </tr>
      </thead>

      <tbody>
        {/* A. FORMACIÓN ACADÉMICA */}
        <tr>
          <td colSpan="5" className="bold-left">
            A. FORMACIÓN ACADÉMICA
          </td>
        </tr>

        <tr>
          <td rowSpan="4">Formación Profesional</td>
          <td>1. Diplomado: 2 puntos (+1 por cada diplomado adicional)</td>
          <td>
            <input
              type="text"
              value={quantities[0]}
              onChange={(e) => handleQuantityChange(0, e.target.value)}
              maxLength="3"
              data-testid="diplomado-quantity"
            />
          </td>
          <td>
            <input
              type="text"
              value={computeDiplomadoScore(quantities[0])}
              readOnly
              data-testid="diplomado-score"
            />
          </td>
          <td>4</td>
        </tr>

        <tr>
          <td>
            2. Especialidad: 4 puntos (+2 por cada especialidad adicional)
          </td>
          <td>
            <input
              type="text"
              value={quantities[1]}
              onChange={(e) => handleQuantityChange(1, e.target.value)}
              maxLength="3"
              data-testid="especialidad-quantity"
            />
          </td>
          <td>
            <input
              type="text"
              value={computeEspecialidadScore(quantities[1])}
              readOnly
              data-testid="especialidad-score"
            />
          </td>
          <td>6</td>
        </tr>

        <tr>
          <td>3. Maestría: 8 puntos (+3 por cada maestría adicional)</td>
          <td>
            <input
              type="text"
              value={quantities[2]}
              onChange={(e) => handleQuantityChange(2, e.target.value)}
              maxLength="3"
              data-testid="maestria-quantity"
            />
          </td>
          <td>
            <input
              type="text"
              value={computeMaestriaScore(quantities[2])}
              readOnly
              data-testid="maestria-score"
            />
          </td>
          <td>11</td>
        </tr>

        <tr>
          <td>4. Doctorado: 12 puntos</td>
          <td>
            <input
              type="text"
              value={quantities[3]}
              onChange={(e) => handleQuantityChange(3, e.target.value)}
              maxLength="3"
              data-testid="doctorado-quantity"
            />
          </td>
          <td>
            <input
              type="text"
              value={computeDoctoradoScore(quantities[3])}
              readOnly
              data-testid="doctorado-score"
            />
          </td>
          <td>12</td>
        </tr>

        <tr>
          <td colSpan="3" className="bold-left">
            Subtotal (hasta 12 puntos)
          </td>
          <td>
            <input
              type="text"
              value={subtotalFormacion}
              readOnly
              data-testid="subtotal-formacion"
            />
          </td>
          <td></td>
        </tr>

        {/* B. ACTUALIZACIÓN ACADÉMICA */}
        <tr>
          <td colSpan="5" className="bold-left">
            B. ACTUALIZACIÓN ACADÉMICA
          </td>
        </tr>
        <tr>
          <td>Actualización Académica en Derecho</td>
          <td>
            1. Asistencia a programas, cursos, seminarios, talleres y congresos
            relacionados al área de derecho: 0.5 puntos
          </td>
          <td>
            <input
              type="text"
              value={quantities[4]}
              onChange={(e) => handleQuantityChange(4, e.target.value)}
              maxLength="3"
              data-testid="actualizacion-quantity"
            />
          </td>
          <td>
            <input
              type="text"
              value={computeActualizacionAcademicaScore(quantities[4])}
              readOnly
              data-testid="actualizacion-score"
            />
          </td>
          <td>6</td>
        </tr>

        <tr>
          <td colSpan="3" className="bold-left">
            Subtotal (hasta 6 puntos)
          </td>
          <td>
            <input
              type="text"
              value={subtotalActualizacion}
              readOnly
              data-testid="subtotal-actualizacion"
            />
          </td>
          <td>6</td>
        </tr>

        {/* C. EXPERIENCIA PROFESIONAL */}
        <tr>
          <td colSpan="5" className="bold-left">
            C. EXPERIENCIA PROFESIONAL
          </td>
        </tr>
        <tr>
          <td>Experiencia General</td>
          <td>
            1. Antigüedad en el ejercicio de la profesión de abogada o abogado:
            1 punto por año desde el registro en el RPA
          </td>
          <td>
            <input
              type="text"
              value={quantities[5]}
              onChange={(e) => handleQuantityChange(5, e.target.value)}
              maxLength="3"
              data-testid="experiencia-general-quantity"
            />
          </td>
          <td>
            <input
              type="text"
              value={computeExperienciaGeneralScore(quantities[5])}
              readOnly
              data-testid="experiencia-general-score"
            />
          </td>
          <td>4</td>
        </tr>

        <tr>
          <td rowSpan="2">Experiencia Específica</td>
          <td>
            2. Experiencia como servidor público en el Órgano Judicial o
            Ministerio Público: 1 punto por año
          </td>
          <td>
            <input
              type="text"
              value={quantities[6]}
              onChange={(e) => handleQuantityChange(6, e.target.value)}
              maxLength="3"
              data-testid="servidor-publico-quantity"
            />
          </td>
          <td>
            <input
              type="text"
              value={computeServidorPublicoScore(quantities[6])}
              readOnly
              data-testid="servidor-publico-score"
            />
          </td>
          <td>4</td>
        </tr>

        <tr>
          <td>
            3. Como docente universitario: 2 puntos por año (pregrado), 2 puntos
            por módulo o asignatura (postgrado)
          </td>
          <td>
            <input
              type="text"
              value={quantities[7]}
              onChange={(e) => handleQuantityChange(7, e.target.value)}
              maxLength="3"
              data-testid="docente-quantity"
            />
          </td>
          <td>
            <input
              type="text"
              value={computeDocenteScore(quantities[7])}
              readOnly
              data-testid="docente-score"
            />
          </td>
          <td>2</td>
        </tr>

        <tr>
          <td colSpan="3" className="bold-left">
            Subtotal (hasta 10 puntos)
          </td>
          <td>
            <input
              type="text"
              value={subtotalExperiencia}
              readOnly
              data-testid="subtotal-experiencia"
            />
          </td>
          <td></td>
        </tr>

        {/* D. PRODUCCIÓN INTELECTUAL */}
        <tr>
          <td colSpan="5" className="bold-left">
            D. PRODUCCIÓN INTELECTUAL
          </td>
        </tr>
        <tr>
          <td>Investigaciones y Publicaciones</td>
          <td>
            1. Artículos publicados vinculados al área jurídica: 1 punto por
            artículo
          </td>
          <td>
            <input
              type="text"
              value={quantities[8]}
              onChange={(e) => handleQuantityChange(8, e.target.value)}
              maxLength="3"
              data-testid="investigacion-quantity"
            />
          </td>
          <td>
            <input
              type="text"
              value={computeInvestigacionScore(quantities[8])}
              readOnly
              data-testid="investigacion-score"
            />
          </td>
          <td>2</td>
        </tr>

        <tr>
          <td colSpan="3" className="bold-left">
            Subtotal (hasta 2 puntos)
          </td>
          <td>
            <input
              type="text"
              value={subtotalProduccion}
              readOnly
              data-testid="subtotal-produccion"
            />
          </td>
          <td></td>
        </tr>

        <tr>
          <td colSpan="3" className="bold-left">
            TOTAL
          </td>
          <td>
            <input
              type="text"
              value={
                subtotalFormacion +
                subtotalActualizacion +
                subtotalExperiencia +
                subtotalProduccion
              }
              readOnly
              data-testid="total-score"
            />
          </td>
          <td>30</td>
        </tr>

        <tr>
          <td colSpan="5" className="left-align">
            <strong>Observaciones:</strong>
            <br />
            <textarea className="full-width-textarea"></textarea>
          </td>
        </tr>

        <tr>
          <td colSpan="5">
            <div className="button-row">
              <button className="blue-button" onClick={handleGuardar} data-testid="guardar-button">
                Guardar
              </button>
              <button className="blue-button" onClick={handleImprimir} data-testid="imprimir-button">
                Imprimir
              </button>
              <button className="blue-button" onClick={handleCerrar} data-testid="cerrar-button">
                Cerrar
              </button>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  );
}

export default Table;
