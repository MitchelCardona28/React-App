export const savedGame = ({board, turn}) => {
  window.localStorage.setItem('board', JSON.stringify(board)) // This stores information from the board.
  window.localStorage.setItem('turn', turn)
}

export const removeGame = () => {
  window.localStorage.removeItem('board')
  window.localStorage.removeItem('turn')
}
