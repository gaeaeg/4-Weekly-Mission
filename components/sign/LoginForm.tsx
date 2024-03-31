import styles from "@/styles/LoginForm.module.css";

function LoginForm() {
  return (
    <form className={styles.loginForm}>
      <div className={styles.emailContainer}>
        <label className={styles.signLabel}>이메일</label>
        <input className={styles.signInput} type="email" placeholder="codeit@codeit.com" />
        <div className={styles.errorMessage}></div>
      </div>
      <div className={styles.passwordContainer}>
        <label className={styles.signLabel}>비밀번호</label>
        <input id={styles.passwordInput} className={styles.signInput} name="password" type="password" />
        <button className={styles.eyeOff} type="button">
          <img src="/img/eye-off.svg" />
        </button>
        <button className={styles.eyeOn}>
          <img src="/img/eye-on.svg" />
        </button>
        <div className={styles.errorMessage}></div>
      </div>
      <button className={styles.buttonLogin} type="submit">
        로그인
      </button>
    </form>
  );
}

export default LoginForm;
