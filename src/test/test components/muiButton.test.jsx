import { describe, expect, test, vi } from "vitest";
import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Button } from "@mui/material";

describe("Test mui button", () => {
  //Se ejecuta una sola vez antes del primer test
  beforeAll(() => {});

  // Se ejecuta antes de cada test
  beforeEach(() => {
    //Hacemos una escucha de los console log antes de cada test
    vi.spyOn(console, "log").mockImplementation(() => {});
  });

  // Se ejecuta después de cada test
  afterEach(() => {
    //Paramos la escucha de los console log después de cada test
    console.log.mockRestore();
  });

  //Se ejecuta una sola vez después del último test
  afterAll(() => {});

  test("render muibutton with correct text", () => {
    render(<Button>CLick me</Button>);
    const button = screen.getByRole("button", { name: /click me/i }); // i -> for not sensitive case
    expect(button).toBeInTheDocument();
  });

  test("call click event when button is clicked", () => {
    //Ahora el console.log sólo aparece cuando se llama a la funcion mock vi.fn
    const handleClick = vi.fn(() => console.log("click"));
    render(<Button onClick={handleClick}>Click me</Button>);
    const button = screen.getByRole("button", { name: /Click me/i });
    expect(button).toBeInTheDocument();
    expect(console.log).not.toHaveBeenCalledWith("click");
    expect(handleClick).toHaveBeenCalledTimes(0);
    fireEvent.click(button);
    expect(handleClick).toHaveBeenCalledTimes(1);
    expect(console.log).toHaveBeenCalledWith("click");
    fireEvent.click(button);
    expect(handleClick).toHaveBeenCalledTimes(2);
  });

  test("renders MuiButton with correct styles", () => {
    render(
      <Button fullWidth style={{ backgroundColor: "red" }}>
        Styled Button
      </Button>
    );
    const button = screen.getByRole("button", { name: /Styled button/i });
    expect(button).toBeInTheDocument();
    expect(button.style.backgroundColor).toBe("red");
    expect(button).toHaveStyle("background-color: rgb(255,0,0)");
    expect(button).toHaveStyle("background-color: #ff0000");
    expect(button).toHaveClass("MuiButton-fullWidth");
  });
});
