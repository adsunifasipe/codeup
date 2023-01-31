import Image from 'next/image'
import Footer from '../../components/Footer'
import Header from '../../components/Header'

import styles from '../../styles/pages/Matriz.module.css'

export default function Matriz() {
  return (      
    <div className={styles.main}>
      <Header />

      <div className={styles.container}>
        <h1>
          <Image src="/assets/images/arrow-back.png" alt="Voltar" onClick={() => (window.location.href = '/')} />
          MATRIZ CURRICULAR
        </h1>

        <table>
          <thead>
            <tr className={styles.table__header}>
              <td>FASE</td>
              <td>CH</td>
              <td>TURNO NORMAL</td>
              <td>TURNO NORMAL</td>
              <td>TURNO NORMAL</td>
              <td>TURNO NORMAL</td>
              <td>TURNO NORMAL</td>
              <td>TURNO NORMAL</td>
              <td>TURNO NORMAL</td>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>1º</td>
              <td>360</td>
              <td>PROGRAMAÇÃO E DESIGN PARA WEB</td>
              <td>FUNDAMENTOS DE HARDWARE E SOFTWARE</td>
              <td>INTRODUÇÃO A ALGORITMOS E PROGRAMAÇÃO</td>
              <td>SISTEMAS DE INFORMAÇÕES GERENCIAIS</td>
              <td>MATEMÁTICA APLICADA</td>
              <td>INGLÊS INSTRUMENTAL</td>
              <td>METODOLOGIA CIENTÍFICA E TECNOLÓGICA</td>              
            </tr>
            <tr>
              <td>2º</td>
              <td>400</td>
              <td>LINGUAGEM DE PROGRAMAÇÃO</td>
              <td>ARQUITETURA DE COMPUTADORES</td>
              <td>ESTRUTURA DE DADOS E ORGANIZAÇÃO DE ARQUIVOS</td>
              <td>BANCO DE DADOS</td>
              <td>COMPUTAÇÃO GRÁFICA</td>
              <td></td>
              <td>PROJETO INTERDISCIPLINAR I</td>
            </tr>
            <tr>
              <td>3º</td>
              <td>400</td>
              <td>ENGENHARIA DE SOFTWARE</td>
              <td>PROGRAMAÇÃO ORIENTADA A OBJETO I</td>
              <td>REDES DE COMPUTADORES I</td>
              <td>SISTEMAS OPERACIONAIS</td>
              <td>METODOLOGIA DE DESENVOLVIMENTO DE SISTEMAS</td>
              <td></td>              
              <td>PROJETO INTERDISCIPLINAR II</td>
            </tr>
            <tr>
              <td>4º</td>
              <td>420</td>
              <td>TÓPICOS AVANÇADOS EM DES. DE SISTEMAS</td>
              <td>PROGRAMAÇÃO ORIENTADA A OBJETO II</td>
              <td>REDES DE COMPUTADORES II</td>
              <td>PROGRAMAÇÃO PARA DISPOSITIVOS MÓVEIS</td>
              <td>EMPREENDEDORISMO, INOVAÇÃO E GESTÃO DE PROJETOS DE TI</td>
              <td>ROBÓTICA E AUTOMAÇÃO</td>            
              <td>PROJETO INTERDISCIPLINAR III</td>
            </tr>
            <tr>
              <td>5º</td>
              <td>420</td>
              <td>PROTÓTIPOS DE HARDWARE E SOFTWARE</td>
              <td>EDUCAÇÃO AMBIENTAL E SUSTENTABILIDADE</td>
              <td>ÉTICA, DIREITOS HUMANOS E LEGISLAÇÃO</td>
              <td>CULTURA AFRO-BRASILEIRA E RELAÇÕES ÉTNICO-RACIAIS</td>
              <td>SEGURANÇA E AUDITORIA DA INFORMAÇÃO</td>
              <td>OPTATIVA</td>            
              <td>PROJETO INTERDISCIPLINAR IV</td>
            </tr>
          </tbody>
        </table>
      </div>

      <Footer />
    </div>
  )
}
