import Head from 'next/head'
import Image from 'next/image'
import Navbar from '../comps/Navbar'
import Footer from '../comps/Footer'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

export default function Home() {
  return (
  <>
    <Head>
      <title>Ninja List | Home</title>
      <meta name="keywords" content="ninjas"/>
    </Head>
    <div >
      <h1 className={styles.title}>Homepage</h1>
      <p className={styles.text}>Aute aliqua irure esse tempor eu cillum nulla veniam. Laborum sunt voluptate laboris tempor pariatur anim nisi nisi dolor. Nulla consequat in
        duis enim aliquip laboris eiusmod id cupidatat mollit cillum laboris excepteur aliquip. Consectetur aliquip proident est non minim id do voluptate excepteur et laboris cillum deserunt esse.
      </p>
      <p className={styles.text}>Aute aliqua irure esse tempor eu cillum nulla veniam. Laborum sunt voluptate laboris tempor pariatur anim nisi nisi dolor. Nulla consequat in
        duis enim aliquip laboris eiusmod id cupidatat mollit cillum laboris excepteur aliquip. Consectetur aliquip proident est non minim id do voluptate excepteur et laboris cillum deserunt esse.
      </p>
      <Link href="/subpages">
        <a className={styles.btn}>See Sub Pages</a>
      </Link>
    </div>
  </>
  )
}
