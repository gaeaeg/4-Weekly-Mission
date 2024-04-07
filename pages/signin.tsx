import SigninHeader from "@/components/sign/SigninHeader";
import SignupForm from "@/components/sign/SigninForm";
import SocialLogin from "@/components/sign/SocialLogin";
import styles from "@/styles/Signin.module.css";

function Signin() {
  return (
    <div className={styles.signinContainer}>
      <SigninHeader />
      <SignupForm />
      <SocialLogin />
    </div>
  );
}

export default Signin;
