import React, { useState } from 'react'

import Head from 'next/head'
import styles from '../styles/Home.module.css'

import Header from '../components/Header'
import Project from '../components/Project'
import Post from '../components/Post'
import Footer from '../components/Footer'

import { Link } from 'react-scroll'
import ModalTopic from '../components/ModalTopic'
import Image from 'next/image'

//&rarr;
//<Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />

interface ModalData {
  title: string
  content: string
}

export default function Home() {
  const [modalTopicIsOpen, setModalTopicIsOpen] = useState(false)
  const [modalContent, setModalContent] = useState({
    title: '',
    content: '',
  })

  // let modalData: ModalData =

  function handleModalTopicOpen(props?: ModalData) {
    if (props) {
      setModalContent(props)
    }
    setModalTopicIsOpen((prev) => !prev)
  }

  const studyTopics = [
    {
      title: 'WEB DEVELOPMENT',
      content:
        'The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.',
    },
    {
      title: 'ALGORITHMS',
      content:
        'The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.',
    },
    {
      title: 'PROGRAMMING LOGIC',
      content:
        'The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.',
    },
    {
      title: 'COMPUTER ARCHITECTURE',
      content:
        'The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.',
    },
    {
      title: 'DATA STRUCTURE',
      content:
        'The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.',
    },
    {
      title: 'NETWORKS',
      content:
        'The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.',
    },
    {
      title: 'GRAPHIC COMPUTING',
      content:
        'The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.',
    },
  ]

  return (
    <div> 
      <Head>
        <title>ADS - UNIFASIPE</title>
        <meta name="description" content="Análise e Desenvolvimento de Sistemas - UNIFASIPE" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <ModalTopic handleOpen={handleModalTopicOpen} isOpen={modalTopicIsOpen} data={modalContent} />

      <main className={styles.main}>
        <Header />

        <section id="introduction" className={styles.introduction}>
          <div className={styles.container}>
            <h1 className={styles.title}>ANÁLISE E DESENVOLVIMENTO DE SISTEMAS</h1>

            <div className={styles.apresentation}>
              <p>
                Preparando você para o mercado de trabalho com uma metodologia focada em{' '}
                <span className={styles.bold__text}>hands-on</span> e com muito{' '}
                <span className={styles.bold__text}>networking</span>.
              </p>
              <button>
                <span>saiba mais &rarr;</span>
              </button>
            </div>
          </div>

          <Link
            className={styles.arrow__down}
            activeClass="active"
            to="information"
            spy={true}
            smooth={true}
            offset={50}
            duration={500}
          >
            <Image src="/assets/images/arrow-down.png" alt="Scroll Down" width={90} height={50} />
          </Link>
        </section>

        <section id="information" className={styles.information}>
          <div className={styles.container}>
            <div className={styles.about__course}>
              <div className={styles.section__header}>
                <h5>/about</h5>
                <h1>POR QUE ADS?</h1>
              </div>

              <div className={styles.text}>
                <p>
                  O mercado de TI nunca esteve tão aquecido antes! 2022 deve encerrar com crescimento significativo na área! A busca por profissionais da área tende a aumentar visto que se tem expectativas de até 700 mil novas vagas nos próximos anos.
                </p>

                <p>
                  Termos como Meta, Robótica, IOT, Impressões 3D, 5G já fazem parte quase que do nosso cotidiano, são realidades que vem a fazer parte do nosso dia a dia.
                </p>

                <p>
                  A tendencia é que existam profissionais de TI em todos os segmentos do mercado, o cenário pandêmico mostrou para grandes empresas a importância de estar conectado com o mundo tecnológico, e isso salvou muito negócios da falência!
                </p>

                <p>
                  À medida que essa transformação digital se torna cada vez maior, a demanda por profissionais seguirá o mesmo rumo, as empresas já assediam esses profissionais com maiores salários e cargos importantes de carreira.
                </p>
              </div>
            </div>

            <div className={styles.section__caller}>
              <h1>COMO ISSO ME PREPARA PARA O MERCADO DE TRABALHO?</h1>
            
              <div className={styles.text}>
                <p>
                  O curso de Análise e Desenvolvimento de Sistemas trás de uma forma objetiva o conteúdo necessário para uma evolução constante dentro deste mercado de trabalho.
                </p>

                <p>
                  O curso tem duração de 5 semestres, ou seja, 2 anos e 6 meses, isso nos possibilita trabalhar diretamente os pilares de uma formação em TI, passando pelas principais áreas que o profissional precisa.
                </p>

                <p>
                  Uma das principais características deste curso é a mão na massa! São poucas as disciplinas trabalhadas em sala de aula, os laboratórios se tornam nossa casa! Logo no 1º semestre o aluno já inicia as práticas de desenvolvimento WEB por exemplo.
                </p>

                <p>
                  E por que parar quando a aula termina? Hoje os projetos de extensão fazem parte da vida do acadêmico, trocando conhecimentos e fazendo muito networking.              
                </p>                
              </div>

              <button className={styles.default__button}>
                <span>INSCREVA-SE</span>
              </button>
            </div>
          </div>
        </section>

        <section id="study" className={styles.study}>
          <div className={styles.container}>
            <div className={styles.section__header}>
              <div className={styles.indicator}>
                <h5>/study</h5>
                <h1>O QUE VOU ESTUDAR?</h1>
              </div>

              <div className={styles.info}>
                <p>
                  Só para você ter um gostinho do que esse curso tem a lhe oferecer, conheça os principais tópicos que
                  você irá aprender durante o nosso curso.
                </p>
                <p>
                  Se você desejar conheça a nossa{' '}
                  <b onClick={() => (window.location.href = '/matriz')}>matriz curricular</b> completa.
                </p>
              </div>
            </div>

            <div className={styles.course__content}>
              {studyTopics.map((topic) => (
                <div key={topic.title} className={styles.topic} onClick={() => handleModalTopicOpen(topic)}>
                  <h2>{topic.title}</h2>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="projects" className={styles.hands__on}>
          <div className={styles.container}>
            <div className={styles.section__header}>
              <div className={styles.indicator}>
                <h5>/hands-on</h5>
                <h1>MUITA PROGRAMAÇÃO</h1>
              </div>

              <div className={styles.info}>
                <p>
                  Nosso curso não exige um TCC para você se formar, porém, todo semestre, exceto no primeiro, você terá
                  que entregar um projeto interdisciplinar, serão 4 projetos ao longo de 4 semestres aonde você mostrará
                  na prática o que aprendeu, conheça alguns projetos dos nossos alunos.
                </p>
              </div>
            </div>

            <div className={styles.projects}>
              <Project student="Luan Hubner" project="Website" repository="www.google.com" imageUrl="minicode.png" />
              <Project student="Luan Hubner" project="Website" repository="www.google.com" imageUrl="minicode.png" />
              <Project student="Luan Hubner" project="Website" repository="www.google.com" imageUrl="minicode.png" />
            </div>

            <button className={styles.default__button}>
              <span>VER MAIS</span>
            </button>
          </div>
        </section>

        <section id="blog" className={styles.blog}>
          <div className={styles.container}>
            <div className={styles.section__header}>
              <div className={styles.indicator}>
                <h5>/blog</h5>
                <h1>NOSSAS POSTAGENS</h1>
              </div>

              <div className={styles.info}>
                <p>
                  Usamos esse espaço para postar algumas das atividades que realizamos durante o curso, notícias e
                  eventos que acontecem no nosso Centro Universitário, venha conhecer um pouco mais de perto o nosso
                  curso.
                </p>
              </div>
            </div>

            <div className={styles.posts}>
              <Post
                id={1}
                title="Lorem Ipsum is not simply random text"
                summary="The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested."
                imageUrl="tech.png"
              />
              <Post
                id={1}
                title="Lorem Ipsum is not simply random text"
                summary="The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested."
                imageUrl="farm.png"
              />
              <Post
                id={1}
                title="Lorem Ipsum is not simply random text"
                summary="The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested."
                imageUrl="industry.png"
              />
            </div>

            <button onClick={() => window.location.href="blog"} className={styles.default__button}>
              <span>
                VER MAIS
              </span>
            </button>
          </div>
        </section>

        <Footer />
      </main>
    </div>
  )
}
