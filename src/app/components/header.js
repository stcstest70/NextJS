import Link from 'next/link';
import styles from '../styles/navbar.module.css';
import Image from 'next/image';
import Nav from './Nav';

const Header = () => {
  return (
    <header className={styles.main_header}>
        <Link href="/">
            <Image src='/logo.png' alt="logo" width={200} height={50} />
        </Link>
        <Nav />
    </header>
  )
}

export default Header