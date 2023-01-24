import { Link } from 'react-scroll'
import styles from '../styles/components/Header.module.css'

export default function Header() {
  return (
    <header className={styles.header}>
      <Link to="information" smooth={true} duration={600}>
        Informações
      </Link>
      <Link to="projects" smooth={true} duration={600}>
        Projetos
      </Link>
      <Link to="blog" smooth={true} duration={600}>
        Blog
      </Link>
    </header>
  )
}
