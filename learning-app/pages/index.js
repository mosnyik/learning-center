import Head from 'next/head'
import Image from 'next/image'
import Footer from '../components/Footer'
import Header from '../components/header'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div >
     <div className='relative' >
     <div className=''>
      <img src='/home-study.png' className='w-full h-auto'/>
      <button className=' absolute border rounded-2xl bg-white-600 text-blue-400 shadow-sm p-1 px-2 m-2'>
        Enroll Now
      </button>
      </div>
     </div>
      <h2 > Home Page</h2>
      <p>This is the body of my page</p>
      <Footer />
    </div>
  )
}
