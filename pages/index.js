import styles from '../styles/Home.module.scss'

export default function Home() {
  return (
    <div className ={styles.cardContainer}>
    <div className={styles.card}>
      <div className ={styles.title}>
      Card 1
      </div>
      <div className ={styles.description}>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      </div>
    </div>

    <div className={styles.card}>
      <div className ={styles.title}>
     Card 2
      </div>
      <div className ={styles.description}>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      </div>
    </div>

    <div className={styles.card}>
      <div className ={styles.title}>
      Card 3
      </div>
      <div className ={styles.description}>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      </div>
    </div>
    </div>
  )
}
