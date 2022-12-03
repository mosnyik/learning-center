import Head from 'next/head'
import Image from 'next/image'
import Footer from '../components/Footer'
import Header from '../components/header'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div>
      <div >
      <Image src='/home-study.png'
      width={670} height={170}/>
      <button>
        Enroll Now
      </button>
      </div>
     
      <h2> Home Page</h2>
      <p>This is the bordy of my page</p>
      <Footer />
    </div>
  )
}
