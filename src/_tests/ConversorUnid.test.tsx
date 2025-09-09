import { render, screen, fireEvent } from "@testing-library/react";
import ConversorUnid from "../views/ConversorUnid";

test("convierte correctamente", () => {
  render(<ConversorUnid />);
  const input = screen.getByRole("spinbutton");
  const button = screen.getByText(/Convertir/i);
  fireEvent.change(input, { target: { value: "0" } });
  fireEvent.click(button);
  expect(screen.getByDisplayValue("32")).toBeInTheDocument();
});
