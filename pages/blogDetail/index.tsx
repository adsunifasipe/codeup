import Footer from '../../components/Footer'
import Header from '../../components/Header'

import styles from '../../styles/pages/BlogDetail.module.css'

import blogJson from '../../assets/blog.json';
import ReactHtmlParser from 'react-html-parser'; 
import { useRouter } from 'next/router';

export default function Matriz() {

    var router = useRouter();

    const post = blogJson.find(item => item.id == (router.query["id"]||1))
      
    return (          
        <div className={styles.main}>
            <Header />            
                    
            <div className={styles.container}>
                
                <div
                    className={styles.image}
                    style={{
                        backgroundImage: `url(/assets/posts/${post?.image})`,
                    }}
                />

                <h3>                          
                    { post?.title }
                </h3>

                <div className={styles.posts}>     
                    { ReactHtmlParser (post?.content || '') }
                </div> 

                {post?.images.map(image => (
                    <img src={`../../assets/posts/${image}`}></img>
                ))}       
                
            </div>

            <Footer />
        </div>
    )
}
