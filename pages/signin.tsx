import SigninHeader from "@/components/sign/SigninHeader";
import LoginForm from "@/components/sign/LoginForm";
import SocialLogin from "@/components/sign/SocialLogin";
import styles from "@/styles/Signin.module.css";

function Signin() {
  return (
    <div className={styles.signinContainer}>
      <SigninHeader />
      <LoginForm />
      <SocialLogin />
    </div>
  );
}

export default Signin;
