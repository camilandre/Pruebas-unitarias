import { render, screen, fireEvent } from "@testing-library/react";
import { describe, expect, test } from "vitest";
import '@testing-library/jest-dom';
import { Select } from "../../components/Select";

const animals = [
  { value: "dog", label: "Dog" },
  { value: "cat", label: "Cat" },
  { value: "lion", label: "Lion" },
  { value: "tiger", label: "Tiger" },
  { value: "elephant", label: "Elephant" },
  { value: "giraffe", label: "Giraffe" },
  { value: "zebra", label: "Zebra" },
  { value: "penguin", label: "Penguin" },
  { value: "panda", label: "Panda" },
  { value: "koala", label: "Koala" },
];

describe("Test Select component", () => {
  test('renders Select correctly', () => {
    render(<Select options={animals}/>); // Renderiza el componente Select con las opciones de animales
    const selectElement = screen.getByRole('combobox'); // Busca el elemento select
    expect(selectElement).toBeInTheDocument(); // Asegura que el elemento select esté en el documento
  });
  test("should render with default selected value", async () => {
    const value = 'cat';
    render(<Select options={animals} value={value}/>); // Renderiza el componente Select con un valor predeterminado 'cat'
    const select = screen.getByRole("combobox"); // Obtiene el elemento select
    expect(select).toBeInTheDocument(); // Asegura que el elemento select esté en el documento
    expect(screen.getByText('Cat').selected).toBe(true); // Asegura que la opción 'Cat' esté seleccionada
    expect(screen.getByText('Dog').selected).toBe(false);
  });

  test("should update selected value on change", async () => {
    let value = 'cat';
    render(<Select options={animals} value={value}/>); // Renderiza el componente Select con un valor predeterminado 'cat'
    const select = screen.getByRole("combobox"); // Obtiene el elemento select
    expect(select).toBeInTheDocument(); // Asegura que el elemento select esté en el documento
    expect(screen.getByText('Cat').selected).toBe(true); // Asegura que la opción 'Cat' esté seleccionada inicialmente
    
    // Simula el cambio de selección a 'dog'
    fireEvent.change(select, { target: { value: 'dog' } });
    expect(screen.getByText('Dog').selected).toBe(true); // Asegura que la opción 'Dog' esté seleccionada después del cambio
    expect(screen.getByText('Cat').selected).toBe(false); // Asegura que la opción 'Cat' ya no esté seleccionada

    // Simula el cambio de selección de nuevo a 'cat'
    fireEvent.change(select, { target: { value: 'cat' } });
    expect(screen.getByText('Dog').selected).toBe(false); // Asegura que la opción 'Dog' ya no esté seleccionada
    expect(screen.getByText('Cat').selected).toBe(true); // Asegura que la opción 'Cat' esté seleccionada nuevamente

    // Simula el cambio de selección a 'penguin'
    fireEvent.change(select, { target: { value: 'penguin' } });
    expect(screen.getByRole("option", { name: "Penguin" }).selected).toBe(true); // Asegura que la opción 'Penguin' esté seleccionada
    expect(screen.getByText('Cat').selected).toBe(false); // Asegura que la opción 'Cat' ya no esté seleccionada
  });
});