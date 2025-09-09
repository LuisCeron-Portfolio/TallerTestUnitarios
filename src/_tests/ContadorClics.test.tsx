import { render, screen, fireEvent } from "@testing-library/react";
import ContadorClics from "../views/ContadorClics";

// Mock localStorage para que funcione consistentemente en tests
const localStorageMock = (() => {
  let store: Record<string, string> = {};
  return {
    getItem: (key: string) => store[key] || null,
    setItem: (key: string, value: string) => {
      store[key] = value.toString();
    },
    clear: () => {
      store = {};
    }
  };
})();

Object.defineProperty(window, 'localStorage', {
  value: localStorageMock
});

beforeEach(() => {
  localStorage.clear();
});

test("inicia en 0", () => {
  render(<ContadorClics />);
  expect(screen.getByText(/Clics: 0/i)).toBeInTheDocument();
});

test("incrementa y guarda", () => {
  render(<ContadorClics />);
  const button = screen.getByText("Incrementar");

  fireEvent.click(button);

  // Se actualiza en pantalla
  expect(screen.getByText(/Clics: 1/i)).toBeInTheDocument();

  // Se guarda en localStorage
  expect(localStorage.getItem("clickCounter")).toBe("1");
});

test("recupera valor de localStorage al recargar", async () => {
  localStorage.setItem("clickCounter", "5");

  render(<ContadorClics />);

  // esperamos a que el efecto cargue
  expect(await screen.findByText((content) => {
    return content.replace(/\s+/g, ' ').trim() === "Clics: 5";
  })).toBeInTheDocument();
});
