import Image from 'next/image'
import styles from './page.module.css'
import Link from "next/link"

export default function Home() {
  return (
    <>
      <h1>City Explorer App</h1>
      <h2>Home Page</h2>
      <header> Menu
        <ul>
          <li><Link href="/city">City Page</Link></li>
          <li><Link href="/favourites">Favourites Page</Link></li>
          <li><Link href="/search">Search Page</Link></li>
        </ul>
      </header>
    </>
    
  )
}
