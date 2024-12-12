import styles from "@/styles/promotions.module.css";
import Head from "next/head";
import Image from "next/image";
export default function Promotions() {
  return (
    <>
      <Head>
        <title>โปรโมชัน | TDZ Shop</title>
        <meta name="keywords" content="TDZ Shop,โปรโมชัน" />
      </Head>
      <div className={styles.container}>
        <div className={styles.wrapper}>
          <div className={styles.image}>
            <Image src="/comm.png" width={600} height={500} alt="pg" layout="intrinsic"></Image>
          </div>
          <div className={styles.text}>
            <h1>เร็วๆนี้</h1>
          </div>
        </div>
      </div>
    </>
  );
}
