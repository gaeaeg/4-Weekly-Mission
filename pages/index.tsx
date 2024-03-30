import Link from "next/link";
import styles from "@/styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.homeContainer}>
      <Link href="/shared">
        <button className={styles.linkPageButton}>Shared Page</button>
      </Link>

      <Link href="/folder">
        <button className={styles.linkPageButton}>Folder Page</button>
      </Link>
    </div>
  );
}
