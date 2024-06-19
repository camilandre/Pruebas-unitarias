import { describe, expect, test, vi } from "vitest";
import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Button } from "@mui/material";

describe("Test mui button", () => {
  test("render muibutton with correct text", () => {
    render(<Button>CLick me</Button>);
    const button = screen.getByRole("button", { name: /click me/i }); // i -> for not sensitive case   
    expect(button).toBeInTheDocument();
  });
  test("call click event when button is clicked", () => {
    const handleClick = vi.fn(console.log("Click en el botón"));
    render(<Button onClick={handleClick}>CLick me</Button>);
    const button = screen.getByRole("button", { name: /click me/i });
    expect(button).toBeInTheDocument();
    expect(handleClick).toHaveBeenCalledTimes(0);
    fireEvent.click(button);
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
  test('renders MuiButton with correct styles', () => {
    render(<Button fullWidth style={{ backgroundColor: 'red' }}>Styled Button</Button>);
    const button = screen.getByRole("button", { name: /Styled button/i });
    expect(button).toBeInTheDocument();
    expect(button.style.backgroundColor).toBe('red');
    expect(button).toHaveStyle('background-color: rgb(255,0,0)');
    expect(button).toHaveStyle('background-color: #ff0000');
  });
});
