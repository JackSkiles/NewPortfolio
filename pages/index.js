import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Navbar from '../comps/Navbar'
import Footer from '../comps/Footer'

export default function Home() {
  return (
    <div>
      <Navbar />
      <h1>Homepage</h1>
      <p>Aute aliqua irure esse tempor eu cillum nulla veniam. Laborum sunt voluptate laboris tempor pariatur anim nisi nisi dolor. Nulla consequat in
        duis enim aliquip laboris eiusmod id cupidatat mollit cillum laboris excepteur aliquip. Consectetur aliquip proident est non minim id do voluptate excepteur et laboris cillum deserunt esse.
      </p>
      <p>Aute aliqua irure esse tempor eu cillum nulla veniam. Laborum sunt voluptate laboris tempor pariatur anim nisi nisi dolor. Nulla consequat in
        duis enim aliquip laboris eiusmod id cupidatat mollit cillum laboris excepteur aliquip. Consectetur aliquip proident est non minim id do voluptate excepteur et laboris cillum deserunt esse.
      </p>
      <Footer />
    </div>
  )
}
