import Link from "next/link";
import styles from "@/styles/SignupHeader.module.css";

function SigninHeader() {
  return (
    <header className={styles.header}>
      <Link href="/">
        <img className={styles.headerLogo} src="img/logo.svg" alt="홈 연결 로고" />
      </Link>
      <p className={styles.headerMessage}>
        이미 회원이신가요?
        <Link href="/signin" className={styles.headerSigninLink}>
          로그인 하기
        </Link>
      </p>
    </header>
  );
}

export default SigninHeader;
