import Image from 'next/image'
import styles from '../styles/components/Project.module.css'

interface ProjectProps {
  student: string
  project: string
  repository: string
  imageUrl: string
}

export default function Project({
  student,
  project,
  repository,
  imageUrl,
}: ProjectProps) {
  return (
    <div
      className={styles.box}
      style={{ backgroundImage: `url(/assets/projects/${imageUrl})` }}
    >
      <h1>{student}</h1>
      <h2>{project}</h2>

      <Image
        className={styles.image}
        width={49}
        height={49}
        onClick={() => window.open(repository, '_blank')}
        src="/assets/images/github.png"
        alt="GitHub Logo"
      />
    </div>
  )
}
