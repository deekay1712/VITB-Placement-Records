import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
const inter = Inter({ subsets: ['latin'] })
import Row from '../components/Row'

export default function Home({data}) {
  return (
    <>
      <Head>
        <title>VITB Placement Tracker</title>
        <meta name="description" content="Developed by DeeKay" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        {/* <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0" /> */}
      </Head>
      <main className={`${styles.main} ${inter.className}`}>
        {
          data.map((item, index) => {
            return <Row item={item} key={index} />
          })
        }
      </main>
    </>
  )
}

export async function getStaticProps(){
  const response = await fetch('https://script.google.com/macros/s/AKfycbwffGCgckZx-cTHIRthp9txG8HkVj9YZ18ajr6GnD6TG60b1pe1IcS5w9YIEcKkz7-1/exec')
  const data = await response.json()
  return{
    props: data
  }
}


