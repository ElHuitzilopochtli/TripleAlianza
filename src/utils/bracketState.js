// Estructura y utilidades para un bracket de 32 equipos (5 rondas).
// rounds[0] = R32 (16 matches), rounds[1] = R16 (8), rounds[2] = Cuartos (4),
// rounds[3] = Semis (2), rounds[4] = Final (1)

export function emptyBracket32() {
  const sizes = [16, 8, 4, 2, 1];
  return {
    event: "torneo-del-sol",
    // R32 incluye "slots" para 32 equipos (dos por match)
    rounds: sizes.map((count, r) => {
      return Array.from({ length: count }, () => ({
        a: r === 0 ? "" : "", // nombre lado A
        b: r === 0 ? "" : "", // nombre lado B
        winner: null,         // "a" | "b" | null
      }));
    }),
  };
}

export function loadBracket(key = "bracket:torneo-del-sol") {
  try {
    const raw = localStorage.getItem(key);
    if (!raw) return emptyBracket32();
    const parsed = JSON.parse(raw);
    return parsed?.rounds ? parsed : emptyBracket32();
  } catch {
    return emptyBracket32();
  }
}

export function saveBracket(state, key = "bracket:torneo-del-sol") {
  localStorage.setItem(key, JSON.stringify(state));
}

// Coloca un equipo por índice global 0..31 (R32)
// idx par -> lado A del match, idx impar -> lado B
export function setTeamAtR32(state, idx, name) {
  const matchIndex = Math.floor(idx / 2);
  const side = idx % 2 === 0 ? "a" : "b";
  state.rounds[0][matchIndex][side] = name;
  // si cambian equipos de R32, vaciamos ganadores hacia arriba
  clearWinnersFromRound(state, 0);
}

// Marca ganador de un match en cierta ronda y propaga a la siguiente
export function setWinner(state, roundIndex, matchIndex, side /* "a" | "b" */) {
  const match = state.rounds[roundIndex][matchIndex];
  match.winner = side;

  // Propaga nombre a siguiente ronda (si existe)
  if (roundIndex < state.rounds.length - 1) {
    const nextMatchIndex = Math.floor(matchIndex / 2);
    const nextSide = matchIndex % 2 === 0 ? "a" : "b";
    const winnerName = side === "a" ? match.a : match.b;
    state.rounds[roundIndex + 1][nextMatchIndex][nextSide] = winnerName || "";
    // Limpiar rondas superiores dependientes
    clearWinnersFromRound(state, roundIndex + 1);
  }
}

// Limpia ganadores y cascada desde cierta ronda (para evitar inconsistencias)
export function clearWinnersFromRound(state, startRound) {
  for (let r = startRound; r < state.rounds.length; r++) {
    for (let m = 0; m < state.rounds[r].length; m++) {
      state.rounds[r][m].winner = null;
      if (r < state.rounds.length - 1) {
        const nextMatchIndex = Math.floor(m / 2);
        const nextSide = m % 2 === 0 ? "a" : "b";
        state.rounds[r + 1][nextMatchIndex][nextSide] = "";
      }
    }
  }
}


// Mezcla aleatoriamente los 32 slots de la Ronda de 32 (R32)
// - Mantiene el resto de rondas vacías y borra ganadores aguas arriba.
export function shuffleR32(state) {
  // 1) Tomar los 32 nombres actuales (a,b de cada match en R32)
  const r32 = state.rounds[0];
  const list = r32.flatMap(m => [(m.a || "").trim(), (m.b || "").trim()]);

  // Relleno por si hay menos de 32 ya escritos
  while (list.length < 32) list.push("");

  // 2) Fisher–Yates shuffle
  for (let i = list.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [list[i], list[j]] = [list[j], list[i]];
  }

  // 3) Volcar de regreso en R32 y limpiar ganadores en rondas superiores
  for (let i = 0; i < 32; i++) {
    const matchIndex = Math.floor(i / 2);
    const side = i % 2 === 0 ? "a" : "b";
    state.rounds[0][matchIndex][side] = list[i];
  }
  clearWinnersFromRound(state, 0); // <- ya existe en tu archivo
}
