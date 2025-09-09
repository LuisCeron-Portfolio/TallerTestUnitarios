import { render, screen, fireEvent } from "@testing-library/react";
import TablasMul from "../views/TablasMul";

test("renderiza el título", () => {
  render(<TablasMul />);
  expect(screen.getByText(/Calculadora de Tablas de Multiplicar/i)).toBeInTheDocument();
});

test("genera tabla correctamente", () => {
  render(<TablasMul />);
  const input = screen.getByRole("spinbutton");
  const button = screen.getByText(/Generar/i);
  fireEvent.change(input, { target: { value: "5" } });
  fireEvent.click(button);
  expect(screen.getByText("5 x 10 = 50")).toBeInTheDocument();
});
