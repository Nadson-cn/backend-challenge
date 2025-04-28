// 1.1 Manipulação de Tipos e Generics
function extractValue<T, K extends keyof T>(data: T[], key: K): T[K][] {
  return data.map((item) => item[key])
}