import Footer from '../../components/Footer'
import Header from '../../components/Header'
import Post from '../../components/Post'

import styles from '../../styles/pages/Blog.module.css'

export default function Matriz() {
  return (
    <div className={styles.main}>
      <Header />

      <div className={styles.container}>
        <h3>          
          Blog!
        </h3>

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
            <Post
            id={1}
            title="Lorem Ipsum is not simply random text"
            summary="The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested."
            imageUrl="industry.png"
            />
                        <Post
            id={1}
            title="Lorem Ipsum is not simply random text"
            summary="The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested."
            imageUrl="industry.png"
            />
                        <Post
            id={1}
            title="Lorem Ipsum is not simply random text"
            summary="The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested."
            imageUrl="industry.png"
            />
                        <Post
            id={1}
            title="Lorem Ipsum is not simply random text"
            summary="The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested."
            imageUrl="industry.png"
            />            
        </div>        
        
      </div>

      <Footer />
    </div>
  )
}
