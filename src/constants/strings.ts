export const GAME_TITLE = process.env.REACT_APP_GAME_NAME!

export const WIN_MESSAGES = ['Bravo', 'Félicitations', 'Nice']
export const GAME_COPIED_MESSAGE =
  'Le message est copié dans ton presse-papier ! Partage-le score pour flexer un max.'
export const ABOUT_GAME_MESSAGE = 'A propos de ce jeu'
export const NOT_ENOUGH_LETTERS_MESSAGE = 'pas assez de lettre'
export const WORD_NOT_FOUND_MESSAGE = 'ce mot existe ?'
export const CORRECT_WORD_MESSAGE = (solution: string) =>
  `Le mot était ${solution}`
export const ENTER_TEXT = 'Entrée'
export const DELETE_TEXT = 'Supprimer'
export const STATISTICS_TITLE = 'stats'
export const GUESS_DISTRIBUTION_TEXT = 'Distribution des tentatives'
export const NEW_WORD_TEXT = 'Nouveau mot'
export const SHARE_TEXT = 'Flex sur tes collègues'
export const TOTAL_GAMES_TEXT = 'Total games'
export const SUCCESS_RATE_TEXT = 'Success rate'
export const CURRENT_STREAK_TEXT = 'Current streak'
export const BEST_STREAK_TEXT = 'Best streak'
