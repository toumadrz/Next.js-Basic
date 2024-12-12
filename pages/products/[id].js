import Head from "next/head";
import Image from "next/image";
import styles from "@/styles/Detail.module.css";
export async function getStaticPaths() {
  const res = await fetch("https://dummyjson.com/products?limit=12");
  const data = await res.json();
  const paths = data.products.map((item) => {
    return {
      params: { id: String(item.id) },
    };
  });
  return {
    paths,
    fallback: false,
  };
}
export async function getStaticProps({ params }) {
  const id = params.id;
  const res = await fetch("https://dummyjson.com/products/" + id);
  const data = await res.json();
  return {
    props: { products: data },
  };
}
export default function ProductDetail({ products }) {
  return (
    <>
      <Head>
        <title>{products.title}</title>
      </Head>
      <div className={styles.container}>
            <div className={styles.wrapper}>
                <div className={styles.imageContainer}>
                    <Image 
                        className={styles.productImage} 
                        src={products.thumbnail} 
                        width={400} 
                        height={400} 
                        alt={products.title}
                        layout="intrinsic"
                    />
                </div>
                <div className={styles.detailContainer}>
                    <h1 className={styles.productTitle}>{products.title}</h1>
                    
                    <div className={styles.priceAndCategory}>
                        <h2 className={styles.productPrice}>Price: {products.price} บาท</h2>
                        <h2 className={styles.productCategory}>Category: {products.category}</h2>
                    </div>
                    
                    <h3 className={styles.productDescription}>Description: {products.description}</h3>
                </div>
            </div>
        </div>
    </>
  );
}
