import { render, screen, fireEvent } from "@testing-library/react";
import { TodoList } from "./TodoList";

test("Agregar una nueva tarea a lista", () => {
  render(<TodoList />);

  expect(screen.getByText("Tarea 1")).toBeInTheDocument();
  expect(screen.getByText("Tarea 2")).toBeInTheDocument();

  fireEvent.change(screen.getByRole("textbox"), {
    target: { value: "Tarea 3" },
  });
  fireEvent.click(screen.getByText("Agregar Tarea"));

  expect(screen.getByText("Tarea 3")).toBeInTheDocument();
});
