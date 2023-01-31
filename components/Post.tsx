import styles from '../styles/components/Post.module.css'

interface PostProps {
  id: number
  title: string
  summary: string
  imageUrl: string
}

export default function Post({ id, title, summary, imageUrl }: PostProps) {
  return (
    <div key={id} onClick={() => window.location.href="blogDetail?id="+id} className={styles.box}>
      <div
        className={styles.image}
        style={{
          backgroundImage: imageUrl.includes('https')
            ? imageUrl
            : `url(/assets/posts/${imageUrl})`,
        }}
      />

      <div className={styles.info}>
        <h1>{title}</h1>
        <h2>{summary}</h2>
      </div>
    </div>
  )
}
