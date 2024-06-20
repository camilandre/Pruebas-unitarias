import { describe, expect, test, vi } from "vitest";
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Switch } from '@mui/material';
import { useState } from 'react';

describe("Test SwitchMui", () => {
  test('renders Switch correctly', () => {
    render(<Switch />);
    const switchElement = screen.getByRole('checkbox'); // Busca el elemento Switch por su rol de checkbox
    expect(switchElement).toBeInTheDocument(); // Verifica que el Switch está en el documento
  });

    //verificará si se llama a la propiedad onChange cuando cambia el estado de algún componente
    test('calls onChange prop when state changes', () => { 
      const handleChange = vi.fn(); // Crea una función mock para el evento onChange
      render(<Switch onChange={handleChange} />); // Renderiza el Switch con el evento onChange
      const switchElement = screen.getByRole('checkbox'); // Busca el elemento Switch por su rol de checkbox
      expect(handleChange).toHaveBeenCalledTimes(0);
      fireEvent.click(switchElement); // Simula un clic en el Switch
      expect(handleChange).toHaveBeenCalledTimes(1); // Verifica que la función handleChange se llamó una vez
    });

    test('renders Switch with checked state', () => {
      render(<Switch checked />); // Renderiza el Switch marcado
      const switchElement = screen.getByRole('checkbox'); // Busca el elemento Switch por su rol de checkbox
      expect(switchElement).toBeChecked(); // Verifica que el Switch está marcado
    });

    test('renders Switch with unchecked state', () => {
      render(<Switch checked={false} />); // Renderiza el Switch sin marcar
      const switchElement = screen.getByRole('checkbox'); // Busca el elemento Switch por su rol de checkbox
      expect(switchElement).not.toBeChecked(); // Verifica que el Switch no está marcado
      expect(switchElement).not.toBeDisabled();
    });
  
    test('renders Switch as disabled', () => {
      render(<Switch disabled />); // Renderiza el Switch deshabilitado
      const switchElement = screen.getByRole('checkbox'); // Busca el elemento Switch por su rol de checkbox
      expect(switchElement).toBeDisabled(); // Verifica que el Switch está deshabilitado
    });

    test('updates state when value changes', () => {
      // Componente funcional que maneja el estado del Switch
      const TestComponent = () => {
        const [checked, setChecked] = useState(false); // Estado local 'checked' inicializado como false
        return (
          <Switch
            checked={checked}
            onChange={(e) => setChecked(e.target.checked)} // Actualiza el estado 'checked' con el evento onChange
            //Entonces cuando ejecutamos un evento se activa la funcion setChecked y cambia el estado del switch
          />
        );
      };
      render(<TestComponent />); // Renderiza el componente TestComponent
      const switchElement = screen.getByRole('checkbox'); // Busca el elemento Switch por su rol de checkbox
      expect(switchElement).not.toBeChecked(); // Verifica que el Switch no está marcado inicialmente
      fireEvent.click(switchElement); // Simula un clic en el Switch
      expect(switchElement).toBeChecked(); // Verifica que el Switch está marcado después del clic
      fireEvent.click(switchElement); // Simula un clic en el Switch
      expect(switchElement).not.toBeChecked(); // Verifica que el Switch está marcado después del clic
    });
});