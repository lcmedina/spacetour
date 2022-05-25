import Head from 'next/head'
import Nav from '../components/nav'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Nav/>
      <Head>
        <title>Tour Space | Frontend Mentor</title>
        <meta name="description" content="Frontend mentor challenge" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
        <div className={styles.content}>
          <div className={styles.left}>
            <h5 className='h5'>SO, YOU WANT TO TRAVEL TO</h5>
            <h1 className='h1'>SPACE</h1>
            <p>Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we’ll give you a truly out of this world experience!</p>
          </div>
          <div className={styles.explore}>
            <p>EXPLORE</p>
          </div> 
        </div>
    </div>
  )
}
