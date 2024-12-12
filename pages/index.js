import styles from "@/styles/Home.module.css";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Head>
        <title>หน้าแรก | TDZ Shop</title>
        <meta name="keywords" content="TDZ Shop,Shopping" />
      </Head>
      <div className={styles.container}>
        <h1 className={styles.title}>TDZ Shop สินค้าคุณภาพดี ส่งถึงมือคุณ</h1>
        <Image className={styles.image} src="/shopp.jpg" width={540} height={360} alt="pg" layout="intrinsic"/>
        <Link href="/products" className={styles.btnAllProducts}>
          สินค้าทั้งหมด
        </Link>
      </div>
    </>
  );
}
