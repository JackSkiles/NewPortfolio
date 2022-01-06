import Head from 'next/head'
import Image from 'next/image'
import Navbar from '../comps/Navbar'
import Footer from '../comps/Footer'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

export default function Home() {
  return (
    <div className={styles.container}>
      <h1>Homepage</h1>
      <p>Aute aliqua irure esse tempor eu cillum nulla veniam. Laborum sunt voluptate laboris tempor pariatur anim nisi nisi dolor. Nulla consequat in
        duis enim aliquip laboris eiusmod id cupidatat mollit cillum laboris excepteur aliquip. Consectetur aliquip proident est non minim id do voluptate excepteur et laboris cillum deserunt esse.
      </p>
      <p>Aute aliqua irure esse tempor eu cillum nulla veniam. Laborum sunt voluptate laboris tempor pariatur anim nisi nisi dolor. Nulla consequat in
        duis enim aliquip laboris eiusmod id cupidatat mollit cillum laboris excepteur aliquip. Consectetur aliquip proident est non minim id do voluptate excepteur et laboris cillum deserunt esse.
      </p>
      <Link href="/subpages">
        <a>See Sub Pages</a>
      </Link>
    </div>
  )
}
