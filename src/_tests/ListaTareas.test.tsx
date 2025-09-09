import { render, screen, fireEvent } from "@testing-library/react";
import ListaTareas from "../views/ListaTareas";

test("agrega y elimina tareas", () => {
  render(<ListaTareas />);
  const input = screen.getByRole("textbox");
  const button = screen.getByText(/Agregar/i);

  fireEvent.change(input, { target: { value: "Tarea X" } });
  fireEvent.click(button);
  expect(screen.getByText("Tarea X")).toBeInTheDocument();

  const eliminar = screen.getByText(/Eliminar/i);
  fireEvent.click(eliminar);
  expect(screen.queryByText("Tarea X")).toBeNull();
});
