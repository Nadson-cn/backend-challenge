// 1.2 Validação e Tipagem com Union Types
type OperationType = "add" | "divide" | "subtract" | "multiply"

function calculate(operation: OperationType, a: number, b: number): number {
  switch (operation) {
    case "add":
      return a + b

    case "subtract":
      return a - b

    case "divide":
      if (b === 0) throw new Error("Division by zero");
      return a / b

    case "multiply":
      return a * b

    default:
      throw new Error("Invalid operation");
  }
}