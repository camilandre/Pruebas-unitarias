import { afterEach, beforeEach, describe, expect, test, vi } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Home } from "../../pages/Home";

describe.only("Test Home component", () => {
    
  beforeEach(() => {
    vi.spyOn(console, "log").mockImplementation(() => {});
    vi.spyOn(window, "alert").mockImplementation(() => {});
  });

  afterEach(() => {
    console.log.mockRestore();
    window.alert.mockRestore();
  });

  test("renders sign-in form", () => {
    render(<Home />);
    // Verificar que los elementos del formulario estén en el documento
    expect(screen.getByLabelText(/email address/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/password input/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/remember me/i)).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: /sign in/i })
    ).toBeInTheDocument();
    expect(screen.getByText(/forgot password\?/i)).toBeInTheDocument();
    expect(
      screen.getByText(/don't have an account\? sign up/i)
    ).toBeInTheDocument();
  });

  test("Test remember me checkbox", () => {
    render(<Home />);
    // Obtener el checkbox
    const rememberMeCheckbox = screen.getByLabelText(/remember me/i);
    // Verificar que el checkbox está inicialmente desmarcado
    expect(rememberMeCheckbox.checked).toBe(false);
    // Simular el marcado del checkbox
    fireEvent.click(rememberMeCheckbox);
    // Verificar que el checkbox está marcado
    expect(rememberMeCheckbox.checked).toBe(true);
    // Simular el desmarcado del checkbox
    fireEvent.click(rememberMeCheckbox);
    // Verificar que el checkbox está desmarcado
    expect(rememberMeCheckbox.checked).toBe(false);
  });

  test("Test toggle show password", () => {
    render(<Home />);
    // Obtener el checkbox de mostrar contraseña y el input de contraseña
    const togglePasswordButton = screen.getByLabelText(
      /toggle password visibility/i
    );
    const passwordInput = screen.getByLabelText(/password input/i);
    // Verificar que el input de contraseña está inicialmente oculto
    expect(passwordInput.type).toBe("password");
    // Simular el clic en el botón de mostrar contraseña
    fireEvent.click(togglePasswordButton);
    // Verificar que el input de contraseña muestra el texto
    expect(passwordInput.type).toBe("text");
    // Simular el clic nuevamente en el botón de mostrar contraseña para ocultarla
    fireEvent.click(togglePasswordButton);
    // Verificar que el input de contraseña vuelve a estar oculto
    expect(passwordInput.type).toBe("password");
  });

  test("updates input values", () => {
    render(<Home />);
    const username = "newemail@example.com";
    const password = "newpassword";
    // Obtener los elementos del formulario
    const emailInput = screen.getByLabelText(/email address/i);
    const passwordInput = screen.getByLabelText(/password input/i);
    expect(emailInput.value).toBe("");
    expect(passwordInput.value).toBe("");
    // Simular entrada de usuario
    fireEvent.change(emailInput, { target: { value: username } });
    fireEvent.change(passwordInput, { target: { value: password } });
    // Verificar que los valores de los inputs se actualizan
    expect(emailInput.value).toBe(username);
    expect(passwordInput.value).toBe(password);
  });

  test("handles form submission", () => {
    render(<Home />);
    const username = "test@example.com";
    const password = "password123";
    // Obtener los elementos del formulario
    const emailInput = screen.getByLabelText(/email address/i);
    const passwordInput = screen.getByLabelText(/password input/i);
    const submitButton = screen.getByRole("button", { name: /sign in/i });
    // Simular entrada de usuario
    fireEvent.change(emailInput, { target: { value: username } });
    fireEvent.change(passwordInput, { target: { value: password } });
    // Simular envío de formulario
    fireEvent.click(submitButton);
    // Verificar que se registró la entrada del usuario en el formulario
    expect(console.log).toHaveBeenCalledWith({
      email: username,
      password: password,
    });
    expect(window.alert).toHaveBeenCalledWith("Se ha enviado el formulario");
  });

});
