// src/utils/bracket.js
export function buildBracket(rawTeams = []) {
  // Limpia y normaliza
  const teams = rawTeams
    .map((t) => (t || "").trim())
    .filter(Boolean);

  const n = teams.length;
  if (n === 0) return { rounds: [] };

  // Calcula siguiente potencia de 2 y rellena con BYE
  let size = 1;
  while (size < n) size *= 2;
  const withByes = teams.concat(Array(size - n).fill("BYE"));

  // Primera ronda: parejas consecutivas
  let current = [];
  for (let i = 0; i < withByes.length; i += 2) {
    current.push([withByes[i], withByes[i + 1]]);
  }

  const rounds = [current];

  // Rondas siguientes: placeholders "Ganador Rn-Mm"
  // (solo para mostrar el camino; tú actualizas resultados en Discord)
  while (current.length > 1) {
    const next = [];
    for (let i = 0; i < current.length; i += 2) {
      const a = `Ganador R${rounds.length}M${i + 1}`;
      const b = `Ganador R${rounds.length}M${i + 2}`;
      next.push([a, b]);
    }
    rounds.push(next);
    current = next;
  }

  return { rounds };
}
