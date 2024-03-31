import Link from "next/link";
import styles from "@/styles/SocialLogin.module.css";

function SocialLogin() {
  return (
    <div className={styles.socialLoginContainer}>
      <div className={styles.socialLogin}>
        <span className={styles.socialMessage}>소셜 로그인</span>
        <div className={styles.socialLink}>
          <Link className={styles.googleImg} href="https://www.google.com">
            <img src="/img/google.png" alt="google 로그인" />
          </Link>
          <Link className={styles.kakaoImg} href="https://www.kakaocorp.com/page/">
            <img src="/img/kakao.svg" alt="kakao 로그인" />
          </Link>
        </div>
      </div>
    </div>
  );
}
export default SocialLogin;
