import { render, screen, fireEvent } from "@testing-library/react";
import ValidContrasena from "../views/ValidContrasena";

test("renderiza los requisitos", () => {
  render(<ValidContrasena />);
  expect(screen.getByText(/Al menos 8 caracteres/i)).toBeInTheDocument();
  expect(screen.getByText(/Contiene un número/i)).toBeInTheDocument();
  expect(screen.getByText(/Contiene mayúscula/i)).toBeInTheDocument();
});

test("muestra requisitos y valida contraseña", () => {
  render(<ValidContrasena />);
  const input = screen.getByLabelText(/contraseña/i);

  // Prueba con contraseña incompleta
  fireEvent.change(input, { target: { value: "hola" } });
  expect(screen.queryByText(/Contraseña válida/i)).toBeNull();

  // Prueba con contraseña válida
  fireEvent.change(input, { target: { value: "Hola1234" } });
  expect(screen.getByText(/Contraseña válida/i)).toBeInTheDocument();
});