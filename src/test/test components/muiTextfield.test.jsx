import { describe, expect, test } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import { TextField } from "@mui/material";
import { useState } from "react";

describe("Test TextFieldMui", () => {
  // Prueba: renders TextField with correct label
  test("renders TextField with correct label", () => {
    render(<TextField label="Username" />);
    // Busca el TextField por su rol de 'textbox' y por su etiqueta
    const textFieldByRole = screen.getByRole("textbox", { name: /username/i });
    const textFieldByLabel = screen.getByLabelText(/username/i);
    // Verifica que ambos métodos encuentren el TextField en el documento
    expect(textFieldByRole).toBeInTheDocument();
    expect(textFieldByLabel).toBeInTheDocument();
  });

  // Prueba: updates state when value changes
  test("updates state when value changes", () => {
    // Declaramos TestComponent como un componente funcional que utiliza useState para manejar el estado 'value'
    const TestComponent = () => {
      const [value, setValue] = useState(""); // Estado local 'value' inicializado como cadena vacía
      return (
        <TextField
          label="Username" // Etiqueta del TextField
          value={value} // Propiedad 'value' del TextField establecida con el estado 'value'
          onChange={(e) => setValue(e.target.value)} // Evento onChange que actualiza el estado 'value' con el valor del evento
        />
      );
    };
    render(<TestComponent />); // Renderiza el componente TestComponent
    const textField = screen.getByLabelText(/username/i); // Busca el TextField por su etiqueta
    expect(textField).toBeInTheDocument();
    expect(textField).toHaveValue("");
    fireEvent.change(textField, { target: { value: "John Doe" } }); // Simula un cambio en el valor del TextField
    // Verifica que el TextField tenga el valor correcto después del cambio
    expect(textField).toHaveValue("John Doe");
  });

  // Prueba: renders TextField with correct placeholder
  test("renders TextField with correct placeholder", () => {
    render(<TextField placeholder="Enter your username" />);
    // Busca el TextField por su marcador de posición
    const textField = screen.getByPlaceholderText(/enter your username/i);
    // Verifica que el TextField con el marcador de posición sea visible en el documento
    expect(textField).toBeInTheDocument();
  });

  // Prueba: renders TextField with correct value
  test("renders TextField with correct value", () => {
    render(<TextField value="John Doe" onChange={() => {}} />);
    // Busca el TextField por su valor mostrado
    const textField = screen.getByDisplayValue(/john doe/i);
    // Verifica que el TextField con el valor mostrado sea visible en el documento
    expect(textField).toBeInTheDocument();
    expect(textField).toHaveValue("John Doe");
  });

  // Prueba: renders TextField as disabled
  test("renders TextField as disabled", () => {
    render(<TextField label="Username" disabled />);
    // Busca el TextField por su etiqueta y verifica que esté deshabilitado
    const textField = screen.getByLabelText(/username/i);
    expect(textField).toBeDisabled();
  });

  // Prueba: renders TextField with error state
  test("renders TextField with error state", () => {
    render(
      <TextField label="Username" error helperText="Username is required" />
    );
    // Busca el TextField por su etiqueta y verifica que tenga estado de error
    const textField = screen.getByLabelText(/username/i);
    expect(textField).toBeInTheDocument();
    expect(textField).toHaveAttribute("aria-invalid", "true");
    // Busca el texto de ayuda y verifica que esté presente en el documento
    const helperText = screen.getByText(/username is required/i);
    expect(helperText).toBeInTheDocument();
  });
});
