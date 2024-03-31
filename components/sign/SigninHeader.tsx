import Link from "next/link";
import styles from "@/styles/SigninHeader.module.css";

function SigninHeader() {
  return (
    <header className={styles.header}>
      <Link href="/">
        <img className={styles.headerLogo} src="img/logo.svg" alt="홈 연결 로고" />
      </Link>
      <p className={styles.headerMessage}>
        회원이 아니신가요?
        <Link href="/signup" className={styles.headerSignupLink}>
          회원 가입하기
        </Link>
      </p>
    </header>
  );
}

export default SigninHeader;
