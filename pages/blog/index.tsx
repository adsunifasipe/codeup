import Footer from '../../components/Footer'
import Header from '../../components/Header'
import Post from '../../components/Post'

import styles from '../../styles/pages/Blog.module.css'

import blogJson from '../../assets/blog.json';

interface Item {  
  id : number
  title : string
  summary : string
  image: string
}

export default function Matriz() {   

  return (
    <div className={styles.main}>
      <Header />

      <div className={styles.container}>
        <h3>          
          Blog!
        </h3>

        <div className={styles.posts}>
            {
              blogJson.map(item => (
                <Post key={item.id}
                  id={item.id}
                  title={item.title}
                  summary={item.summary}
                  imageUrl={item.image}
                />  
              ))
            }                
        </div>        
        
      </div>

      <Footer />
    </div>
  )
}
