import { BaseModal } from './BaseModal'

type Props = {
  isOpen: boolean
  handleClose: () => void
}

export const InfoModal = ({ isOpen, handleClose }: Props) => {
  return (
    <BaseModal title="How to play" isOpen={isOpen} handleClose={handleClose}>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        Les règles sont simples. Il faut deviner nom de jeu de société MAAAAAIS
        vous pouvez mettre aussi des mots normaux.
      </p>
    </BaseModal>
  )
}
