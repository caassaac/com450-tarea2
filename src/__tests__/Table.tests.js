import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Table from "../Table";

describe("Cantidad de Diplomado", () => {
  test("debería mostrar 2 puntos cuando se ingrese 1", () => {
    render(<Table />);

    const diplomadoInput = screen.getByTestId("diplomado-quantity");
    fireEvent.change(diplomadoInput, { target: { value: "1" } });

    const diplomadoScore = screen.getByTestId("diplomado-score");
    expect(diplomadoScore).toHaveValue("2");
  });

  test("debería mostrar 3 puntos cuando se ingrese 2", () => {
    render(<Table />);

    const diplomadoInput = screen.getByTestId("diplomado-quantity");
    fireEvent.change(diplomadoInput, { target: { value: "2" } });

    const diplomadoScore = screen.getByTestId("diplomado-score");
    expect(diplomadoScore).toHaveValue("3");
  });

  test("debería mostrar 4 puntos cuando se ingrese 3", () => {
    render(<Table />);

    const diplomadoInput = screen.getByTestId("diplomado-quantity");
    fireEvent.change(diplomadoInput, { target: { value: "3" } });

    const diplomadoScore = screen.getByTestId("diplomado-score");
    expect(diplomadoScore).toHaveValue("4");
  });

  test("no debería exceder 4 puntos", () => {
    render(<Table />);

    const diplomadoInput = screen.getByTestId("diplomado-quantity");
    fireEvent.change(diplomadoInput, { target: { value: "10" } });

    const diplomadoScore = screen.getByTestId("diplomado-score");
    expect(diplomadoScore).toHaveValue("4");
  });
});

describe("Cantidad de Especialidad", () => {
  test("debería mostrar 4 puntos cuando se ingrese 1", () => {
    render(<Table />);

    const especialidadInput = screen.getByTestId("especialidad-quantity");
    fireEvent.change(especialidadInput, { target: { value: "1" } });

    const especialidadScore = screen.getByTestId("especialidad-score");
    expect(especialidadScore).toHaveValue("4");
  });

  test("debería mostrar 6 puntos cuando se ingrese 2", () => {
    render(<Table />);

    const especialidadInput = screen.getByTestId("especialidad-quantity");
    fireEvent.change(especialidadInput, { target: { value: "2" } });

    const especialidadScore = screen.getByTestId("especialidad-score");
    expect(especialidadScore).toHaveValue("6");
  });

  test("no debería exceder 6 puntos", () => {
    render(<Table />);

    const especialidadInput = screen.getByTestId("especialidad-quantity");
    fireEvent.change(especialidadInput, { target: { value: "10" } });

    const especialidadScore = screen.getByTestId("especialidad-score");
    expect(especialidadScore).toHaveValue("6");
  });
});

describe("Cantidad de Maestría", () => {
  test("debería mostrar 8 puntos cuando se ingrese 1", () => {
    render(<Table />);

    const maestriaInput = screen.getByTestId("maestria-quantity");
    fireEvent.change(maestriaInput, { target: { value: "1" } });

    const maestriaScore = screen.getByTestId("maestria-score");
    expect(maestriaScore).toHaveValue("8");
  });

  test("debería mostrar 11 puntos cuando se ingrese 2", () => {
    render(<Table />);

    const maestriaInput = screen.getByTestId("maestria-quantity");
    fireEvent.change(maestriaInput, { target: { value: "2" } });

    const maestriaScore = screen.getByTestId("maestria-score");
    expect(maestriaScore).toHaveValue("11");
  });

  test("no debería exceder 11 puntos", () => {
    render(<Table />);

    const maestriaInput = screen.getByTestId("maestria-quantity");
    fireEvent.change(maestriaInput, { target: { value: "10" } });

    const maestriaScore = screen.getByTestId("maestria-score");
    expect(maestriaScore).toHaveValue("11");
  });
});

describe("Cantidad de Doctorado", () => {
  test("debería mostrar 12 puntos cuando se ingrese 1", () => {
    render(<Table />);

    const doctoradoInput = screen.getByTestId("doctorado-quantity");
    fireEvent.change(doctoradoInput, { target: { value: "1" } });

    const doctoradoScore = screen.getByTestId("doctorado-score");
    expect(doctoradoScore).toHaveValue("12");
  });

  test("no debería permitir ingresar más de 12 puntos", () => {
    render(<Table />);

    const doctoradoInput = screen.getByTestId("doctorado-quantity");
    fireEvent.change(doctoradoInput, { target: { value: "10" } });

    const doctoradoScore = screen.getByTestId("doctorado-score");
    expect(doctoradoScore).toHaveValue("12");
  });
});

describe("Cantidad de Actualización Académica en Derecho", () => {
  test("debería mostrar 0.5 puntos cuando se ingrese 1", () => {
    render(<Table />);

    const actualizacionInput = screen.getByTestId("actualizacion-quantity");
    fireEvent.change(actualizacionInput, { target: { value: "1" } });

    const actualizacionScore = screen.getByTestId("actualizacion-score");
    expect(actualizacionScore).toHaveValue("0.5");
  });

  test("debería mostrar 1 punto cuando se ingrese 2", () => {
    render(<Table />);

    const actualizacionInput = screen.getByTestId("actualizacion-quantity");
    fireEvent.change(actualizacionInput, { target: { value: "2" } });

    const actualizacionScore = screen.getByTestId("actualizacion-score");
    expect(actualizacionScore).toHaveValue("1");
  });

  test("no debería exceder 6 puntos", () => {
    render(<Table />);

    const actualizacionInput = screen.getByTestId("actualizacion-quantity");
    fireEvent.change(actualizacionInput, { target: { value: "15" } });

    const actualizacionScore = screen.getByTestId("actualizacion-score");
    expect(actualizacionScore).toHaveValue("6");
  });
});

describe("Cantidad de Experiencia General", () => {
  test("debería mostrar 1 punto cuando se ingrese 1", () => {
    render(<Table />);

    const experienciaGeneralInput = screen.getByTestId(
      "experiencia-general-quantity"
    );
    fireEvent.change(experienciaGeneralInput, { target: { value: "1" } });

    const experienciaGeneralScore = screen.getByTestId(
      "experiencia-general-score"
    );
    expect(experienciaGeneralScore).toHaveValue("1");
  });

  test("debería mostrar 4 puntos cuando se ingrese 4", () => {
    render(<Table />);

    const experienciaGeneralInput = screen.getByTestId(
      "experiencia-general-quantity"
    );
    fireEvent.change(experienciaGeneralInput, { target: { value: "4" } });

    const experienciaGeneralScore = screen.getByTestId(
      "experiencia-general-score"
    );
    expect(experienciaGeneralScore).toHaveValue("4");
  });

  test("no debería exceder 4 puntos", () => {
    render(<Table />);

    const experienciaGeneralInput = screen.getByTestId(
      "experiencia-general-quantity"
    );
    fireEvent.change(experienciaGeneralInput, { target: { value: "10" } });

    const experienciaGeneralScore = screen.getByTestId(
      "experiencia-general-score"
    );
    expect(experienciaGeneralScore).toHaveValue("4");
  });
});

describe("Cantidad de Experiencia como Servidor Público", () => {
  test("debería mostrar 1 punto cuando se ingrese 1", () => {
    render(<Table />);

    const servidorPublicoInput = screen.getByTestId(
      "servidor-publico-quantity"
    );
    fireEvent.change(servidorPublicoInput, { target: { value: "1" } });

    const servidorPublicoScore = screen.getByTestId("servidor-publico-score");
    expect(servidorPublicoScore).toHaveValue("1");
  });

  test("debería mostrar 4 puntos cuando se ingrese 4", () => {
    render(<Table />);

    const servidorPublicoInput = screen.getByTestId(
      "servidor-publico-quantity"
    );
    fireEvent.change(servidorPublicoInput, { target: { value: "4" } });

    const servidorPublicoScore = screen.getByTestId("servidor-publico-score");
    expect(servidorPublicoScore).toHaveValue("4");
  });

  test("no debería exceder 4 puntos", () => {
    render(<Table />);

    const servidorPublicoInput = screen.getByTestId(
      "servidor-publico-quantity"
    );
    fireEvent.change(servidorPublicoInput, { target: { value: "10" } });

    const servidorPublicoScore = screen.getByTestId("servidor-publico-score");
    expect(servidorPublicoScore).toHaveValue("4");
  });
});

describe("Cantidad de Experiencia como Docente Universitario", () => {
  test("debería mostrar 2 puntos cuando se ingrese 1", () => {
    render(<Table />);

    const docenteInput = screen.getByTestId("docente-quantity");
    fireEvent.change(docenteInput, { target: { value: "1" } });

    const docenteScore = screen.getByTestId("docente-score");
    expect(docenteScore).toHaveValue("2");
  });

  test("no debería otorgar más de 2 puntos", () => {
    render(<Table />);

    const docenteInput = screen.getByTestId("docente-quantity");
    fireEvent.change(docenteInput, { target: { value: "5" } });

    const docenteScore = screen.getByTestId("docente-score");
    expect(docenteScore).toHaveValue("2");
  });
});

describe("Cantidad de Investigaciones y Publicaciones", () => {
  test("debería mostrar 1 punto cuando se ingrese 1", () => {
    render(<Table />);

    const investigacionInput = screen.getByTestId("investigacion-quantity");
    fireEvent.change(investigacionInput, { target: { value: "1" } });

    const investigacionScore = screen.getByTestId("investigacion-score");
    expect(investigacionScore).toHaveValue("1");
  });

  test("debería mostrar 2 puntos cuando se ingrese 2", () => {
    render(<Table />);

    const investigacionInput = screen.getByTestId("investigacion-quantity");
    fireEvent.change(investigacionInput, { target: { value: "2" } });

    const investigacionScore = screen.getByTestId("investigacion-score");
    expect(investigacionScore).toHaveValue("2");
  });

  test("no debería exceder 2 puntos", () => {
    render(<Table />);

    const investigacionInput = screen.getByTestId("investigacion-quantity");
    fireEvent.change(investigacionInput, { target: { value: "5" } });

    const investigacionScore = screen.getByTestId("investigacion-score");
    expect(investigacionScore).toHaveValue("2");
  });
});

describe("Subtotales y Total", () => {
  test("debería mostrar 0 en todos los subtotales y total al iniciar", () => {
    render(<Table />);
    
    expect(screen.getByTestId("subtotal-formacion")).toHaveValue("0");
    expect(screen.getByTestId("subtotal-actualizacion")).toHaveValue("0");
    expect(screen.getByTestId("subtotal-experiencia")).toHaveValue("0");
    expect(screen.getByTestId("subtotal-produccion")).toHaveValue("0");
    expect(screen.getByTestId("total-score")).toHaveValue("0");
  });

  test("debería calcular correctamente los subtotales y el total con entradas específicas", () => {
    render(<Table />);

    fireEvent.change(screen.getByTestId("diplomado-quantity"), { target: { value: "1" } });
    fireEvent.change(screen.getByTestId("especialidad-quantity"), { target: { value: "2" } });
    fireEvent.change(screen.getByTestId("maestria-quantity"), { target: { value: "1" } });
    fireEvent.change(screen.getByTestId("doctorado-quantity"), { target: { value: "0" } });

    fireEvent.change(screen.getByTestId("actualizacion-quantity"), { target: { value: "3" } });

    fireEvent.change(screen.getByTestId("experiencia-general-quantity"), { target: { value: "2" } });
    fireEvent.change(screen.getByTestId("servidor-publico-quantity"), { target: { value: "2" } });
    fireEvent.change(screen.getByTestId("docente-quantity"), { target: { value: "1" } });

    fireEvent.change(screen.getByTestId("investigacion-quantity"), { target: { value: "2" } });

    expect(screen.getByTestId("subtotal-formacion")).toHaveValue("12");
    expect(screen.getByTestId("subtotal-actualizacion")).toHaveValue("1.5");
    expect(screen.getByTestId("subtotal-experiencia")).toHaveValue("6");
    expect(screen.getByTestId("subtotal-produccion")).toHaveValue("2");
    expect(screen.getByTestId("total-score")).toHaveValue("21.5");
  });

  test("debería limitar los subtotales y total a los máximos permitidos", () => {
    render(<Table />);

    fireEvent.change(screen.getByTestId("diplomado-quantity"), { target: { value: "10" } });
    fireEvent.change(screen.getByTestId("especialidad-quantity"), { target: { value: "10" } });
    fireEvent.change(screen.getByTestId("maestria-quantity"), { target: { value: "10" } });
    fireEvent.change(screen.getByTestId("doctorado-quantity"), { target: { value: "1" } });

    fireEvent.change(screen.getByTestId("actualizacion-quantity"), { target: { value: "20" } });

    fireEvent.change(screen.getByTestId("experiencia-general-quantity"), { target: { value: "10" } });
    fireEvent.change(screen.getByTestId("servidor-publico-quantity"), { target: { value: "10" } });
    fireEvent.change(screen.getByTestId("docente-quantity"), { target: { value: "10" } });

    fireEvent.change(screen.getByTestId("investigacion-quantity"), { target: { value: "10" } });

    expect(screen.getByTestId("subtotal-formacion")).toHaveValue("12");
    expect(screen.getByTestId("subtotal-actualizacion")).toHaveValue("6");
    expect(screen.getByTestId("subtotal-experiencia")).toHaveValue("10");
    expect(screen.getByTestId("subtotal-produccion")).toHaveValue("2");
    expect(screen.getByTestId("total-score")).toHaveValue("30");
  });
});

describe("Botones", () => {
  beforeEach(() => {
    localStorage.clear();
  });

  test("al hacer clic en Guardar, se guarda la data y muestra un alert", () => {
    const alertSpy = jest.spyOn(window, "alert").mockImplementation(() => {});
    render(<Table />);
    
    const guardarButton = screen.getByTestId("guardar-button");
    fireEvent.click(guardarButton);
    
    const storedData = localStorage.getItem("tableData");
    expect(storedData).toBe(JSON.stringify([0, 0, 0, 0, 0, 0, 0, 0, 0]));
    expect(alertSpy).toHaveBeenCalledWith("Datos guardados exitosamente.");
    
    alertSpy.mockRestore();
  });

  test("al hacer clic en Imprimir, se llama a window.print", () => {
    const printSpy = jest.spyOn(window, "print").mockImplementation(() => {});
    render(<Table />);
    
    const imprimirButton = screen.getByTestId("imprimir-button");
    fireEvent.click(imprimirButton);
    
    expect(printSpy).toHaveBeenCalled();
    printSpy.mockRestore();
  });

  test("al hacer clic en Cerrar, se ejecuta el manejador", () => {
    const consoleSpy = jest.spyOn(console, "log").mockImplementation(() => {});
    
    render(<Table />);
    const cerrarButton = screen.getByTestId("cerrar-button");
    fireEvent.click(cerrarButton);
    
    expect(consoleSpy).toHaveBeenCalledWith("Botón de cerrar presionado");
    consoleSpy.mockRestore();
  });
    
});