import Modal from 'react-modal'
import styles from '../styles/components/ModalTopic.module.css'

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    borderRadius: '1px',
    backgroundColor: 'var(--light-background-default)',
    borderColor: 'var(--contrast-color)',
    maxWidth: 600,
  },
  overlay: {
    background: 'rgba(0, 0, 0, 0.7)',
  },
}

interface ModalData {
  title: string
  content: string
}

interface ModalProps {
  isOpen: boolean
  handleOpen: () => void
  data: ModalData
}

export default function ModalTopic({ isOpen, handleOpen, data }: ModalProps) {

  return (
    <Modal isOpen={isOpen} onRequestClose={handleOpen} style={customStyles} contentLabel="Example Modal">
      <div className={styles.header}>
        <h1>{data.title}</h1>

        <h1 className={styles.close} onClick={() => handleOpen()}>
          &#10006;
        </h1>
      </div>

      <p className={styles.p}>{data.content}.</p>
    </Modal>
  )
}
