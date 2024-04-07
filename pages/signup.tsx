import SignupHeader from "@/components/sign/SignupHeader";
import SignupForm from "@/components/sign/SignupForm";
import SocialSignup from "@/components/sign/SocialSignup";
import styles from "@/styles/Signup.module.css";

function Signup() {
  return (
    <div className={styles.signupContainer}>
      <SignupHeader />
      <SignupForm />
      <SocialSignup />
    </div>
  );
}

export default Signup;
