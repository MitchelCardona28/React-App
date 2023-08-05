import { WINNER_COMBOS } from "../constants"

export const checkWinner = (boardToCheck) => {
  for (const combo of WINNER_COMBOS) {
    const [a, b, c] = combo
    if (
      boardToCheck[a] &&                      // e.g. -> X
      boardToCheck[a] === boardToCheck[b] &&  // e.g. -> XX -> TRUE
      boardToCheck[a] === boardToCheck[c]     // e.g. -> XX -> TRUE
    ) {
      return boardToCheck[a]
    }
  }
  return null
}

export const checkEndGame = (newBoard) => {
  return newBoard.every((square) => square !== null)
}
