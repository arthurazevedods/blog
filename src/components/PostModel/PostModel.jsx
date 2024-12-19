import styles from './PostModel.module.css';
/* eslint-disable react/prop-types */
export default function PostModel({ FotoCapa, título, children }) {
  return (
    <article className={styles.postModeloContainer}>
      <div className={styles.fotoCapa} style={{backgroundImage: `url(${FotoCapa})`}} />
      <h2 className={styles.título}>{título}</h2>
      <div className={styles.postConteudoContainer}>{children}</div>
    </article>
  )
}