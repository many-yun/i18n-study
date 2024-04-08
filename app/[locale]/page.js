import Image from 'next/image';
import styles from '../page.module.css';
import { Header } from './_components/header';
import { Footer } from './_components/Footer';

export default function Home() {
   return (
      <main className={styles.main}>
         <Header />
         <Footer />
      </main>
   );
}
