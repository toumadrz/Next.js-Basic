import styles from "@/styles/about.module.css";
import Head from "next/head";
import Image from "next/image";
export default function Promotions() {
  return (
    <>
      <Head>
        <title>โปรโมชัน | TDZ Shop</title>
        <meta name="keywords" content="TDZ Shop,about" />
      </Head>
      <div className={styles.container}>
        <div className={styles.wrapper}>
          <div className={styles.image}>
            <Image src="/logoo.png" width={300} height={300} alt="pg" layout="intrinsic"></Image>
          </div>
          <div className={styles.text}>
            <h1>TDZ Shop ร้านค้าคุณภาพ ขายสินค้าคุณภาพ ส่งตรงถึงมือคุณ</h1>
          </div>
        </div>
      </div>
    </>
  );
}
