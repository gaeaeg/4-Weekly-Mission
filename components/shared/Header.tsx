import Profile from "./Profile";
import Link from "@/node_modules/next/link";
import styles from "@/styles/Header.module.css";

function Header() {
  return (
    <header className={styles.header}>
      <Link href="/">
        <img className={styles.headerLogo} src="img/logo.svg" alt="홈 연결 로고" />
      </Link>
      <div className={styles.headerProfile}>
        <Profile />
      </div>
    </header>
  );
}

export default Header;
