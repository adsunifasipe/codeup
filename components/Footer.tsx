import { Link } from 'react-scroll'

import styles from '../styles/components/Footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.links}>
          <div className={styles.list}>
            <Link to="introduction" smooth={true} duration={600}>
              Informações
            </Link>
            <Link to="projects" smooth={true} duration={600}>
              Projetos
            </Link>
            <Link to="blog" smooth={true} duration={600}>
              Blog
            </Link>
            <a href="#">Contato</a>
          </div>
          <div className={styles.list}>
            <a href="https://www.instagram.com/adsunifasipe/" target="_blank" rel="noreferrer">
              Instagram
            </a>
            <a href="https://www.facebook.com/ADSUNIFASIPE">Facebook</a>
            <a href="https://www.youtube.com/@adsunifasipe7993">YouTube</a>
          </div>
        </div>

        <div className={styles.additional}>
          <img src="/assets/images/fasipe.png" alt="Fasipe Logo" />

          <span onClick={() => window.open('https://github.com/adsunifasipe/codeup')}>
            código fonte <img src="/assets/images/mini-github.png" alt="GitHub Logo" />
          </span>
        </div>
      </div>
    </footer>
  )
}
