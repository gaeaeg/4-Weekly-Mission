import SigninHeader from "@/components/sign/SigninHeader";
import SigninForm from "@/components/sign/SigninForm";
import SocialLogin from "@/components/sign/SocialLogin";
import styles from "@/styles/Signin.module.css";

function Signin() {
  return (
    <div className={styles.signinContainer}>
      <SigninHeader />
      <SigninForm />
      <SocialLogin />
    </div>
  );
}

export default Signin;
