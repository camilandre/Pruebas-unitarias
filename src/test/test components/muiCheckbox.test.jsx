import { describe, expect, test } from "vitest";
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Checkbox } from '@mui/material';
import { useState } from 'react';

describe("Checkbox tests", () => {
  test('renders unchecked checkbox correctly', () => {
    // Renderiza un Checkbox no marcado
    render(<Checkbox checked={false} />);
    const checkbox = screen.getByRole('checkbox'); // Busca el checkbox por su rol
    expect(checkbox).toBeInTheDocument(); // Verifica que el checkbox está en el documento
    expect(checkbox).not.toBeChecked(); // Verifica que el checkbox no está marcado
  });

  test('renders checked checkbox correctly', () => {
    // Renderiza un Checkbox marcado
    render(<Checkbox checked={true} />);
    const checkbox = screen.getByRole('checkbox'); // Busca el checkbox por su rol
    expect(checkbox).toBeInTheDocument(); // Verifica que el checkbox está en el documento
    expect(checkbox).toBeChecked(); // Verifica que el checkbox está marcado
  });

  test('renders unchecked checkbox disabled correctly', () => {
    // Renderiza un Checkbox no marcado desactivado
    render(<Checkbox checked={false} disabled />);
    const checkbox = screen.getByRole('checkbox'); // Busca el checkbox por su rol
    expect(checkbox).toBeInTheDocument(); // Verifica que el checkbox está en el documento
    expect(checkbox).not.toBeChecked(); // Verifica que el checkbox está marcado
    expect(checkbox).toBeDisabled(); // Verifica que el checkbox está deshabilitado
  });

  test('renders checked checkbox disabled correctly', () => {
    // Renderiza un Checkbox no marcado desactivado
    render(<Checkbox checked={true} disabled />);
    const checkbox = screen.getByRole('checkbox'); // Busca el checkbox por su rol
    expect(checkbox).toBeInTheDocument(); // Verifica que el checkbox está en el documento
    expect(checkbox).toBeChecked(); // Verifica que el checkbox está marcado
    expect(checkbox).toBeDisabled(); // Verifica que el checkbox está deshabilitado
  });

  test('checkbox toggles state correctly', () => {
    // Componente funcional que maneja el estado del Checkbox
    const TestComponent = () => {
      const [checked, setChecked] = useState(false); // Estado local 'checked' inicializado como false
      return <Checkbox checked={checked} onChange={(e) => setChecked(e.target.checked)} />; // Checkbox controlado por 'checked' y evento onChange para actualizar el estado
    };
    render(<TestComponent />); // Renderiza el componente TestComponent
    const checkbox = screen.getByRole('checkbox'); // Busca el checkbox por su rol
    expect(checkbox).toBeInTheDocument(); // Verifica que el checkbox está en el documento
    expect(checkbox).not.toBeChecked(); // Verifica que el checkbox no está marcado inicialmente
    fireEvent.click(checkbox); // Simula un clic en el checkbox
    expect(checkbox).toBeChecked(); // Verifica que el checkbox está marcado después del clic
    fireEvent.click(checkbox); // Simula otro clic en el checkbox
    expect(checkbox).not.toBeChecked(); // Verifica que el checkbox ya no está marcado después del segundo clic
  });
});