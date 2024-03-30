import Link from "@/node_modules/next/link";
import FolderProfile from "./FolderProfile";
import styles from "@/styles/Header.module.css";

function FolderHeader() {
  return (
    <header className={styles.header}>
      <Link href="/">
        <img className={styles.headerLogo} src="img/logo.svg" alt="홈 연결 로고" />
      </Link>
      <div className={styles.headerProfile}>
        <FolderProfile />
      </div>
    </header>
  );
}

export default FolderHeader;
