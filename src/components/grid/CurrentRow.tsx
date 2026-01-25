import { MAX_WORD_LENGTH } from '../../lib/words'
import { Cell } from './Cell'

type Props = {
  guess: string
}

export const CurrentRow = ({ guess }: Props) => {
  const splitGuess = guess.split('')
  console.log('🚀 ~ CurrentRow ~ guess:', guess)
  const emptyCells = Array.from(Array(MAX_WORD_LENGTH - splitGuess.length))
  console.log('🚀 ~ CurrentRow ~ MAX_WORD_LENGTH:', MAX_WORD_LENGTH)

  return (
    <div className="flex justify-center mb-1">
      {splitGuess.map((letter, i) => (
        <Cell key={i} value={letter} />
      ))}
      {emptyCells.map((_, i) => (
        <Cell key={i} />
      ))}
    </div>
  )
}
