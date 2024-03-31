import Link from "next/link";
import styles from "@/styles/Footer.module.css";

function Footer() {
  return (
    <footer className={styles.Footer}>
      <div className={styles.footerContainer}>
        <span className={styles.copyright}>©codeit - 2023</span>
        <div className={styles.footerLink}>
          <Link href="privacy.html">Privacy Policy</Link>
          <Link href="faq.html">FAQ</Link>
        </div>
        <div className={styles.footerSns}>
          <Link href="https://www.facebook.com" target="_blank" rel="noreferrer noopener">
            <img src="img/facebook.svg" alt="facebook 연결 로고" />
          </Link>
          <Link href="https://www.twitter.com" target="_blank" rel="noreferrer noopener">
            <img src="img/twitter.svg" alt="twitter 연결 로고" />
          </Link>
          <Link href="https://www.youtube.com" target="_blank" rel="noreferrer noopener">
            <img src="img/youtube.svg" alt="youtube 연결 로고" />
          </Link>
          <Link href="https://www.instagram.com" target="_blank" rel="noreferrer noopener">
            <img src="img/instagram.svg" alt="instagram 연결 로고" />
          </Link>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
