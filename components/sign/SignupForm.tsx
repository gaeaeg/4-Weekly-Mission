import React, { useState } from "react";
import { useRouter } from "next/router";
import { isValidEmail, isValidPassword } from "./sign";
import styles from "@/styles/SignupForm.module.css";

interface SignupFormData {
  email: string;
  password: string;
  passwordConfirm: string;
}

function SignupForm() {
  const [formData, setFormData] = useState<SignupFormData>({ email: "", password: "", passwordConfirm: "" });
  const [emailError, setEmailError] = useState<string>("");
  const [passwordError, setPasswordError] = useState<string>("");
  const [passwordConfirmError, setPasswordConfirmError] = useState<string>("");
  const [emailFocus, setEmailFocus] = useState<boolean>(false);
  const [passwordFocus, setPasswordFocus] = useState<boolean>(false);
  const [passwordConFirmFocus, setPasswordConFirmFocus] = useState<boolean>(false);
  const [isPasswordVisible, setIsPasswordVisible] = useState<boolean>(false);
  const [isPasswordConfirmVisible, setIsPasswordConfirmVisible] = useState<boolean>(false);
  const router = useRouter();

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  }

  function handleEmail() {
    if (!formData.email) {
      setEmailError("이메일을 입력해 주세요.");
      return false;
    }
    if (!isValidEmail(formData.email)) {
      setEmailError("올바른 이메일 주소가 아닙니다.");
      return false;
    }
    setEmailError("");
    return true;
  }

  function handlePassword() {
    if (!isValidPassword(formData.password)) {
      setPasswordError("비밀번호는 영문, 숫자 조합 8자 이상 입력해 주세요.");
      return false;
    }
    setPasswordError("");
    return true;
  }

  const handlePasswordConfirm = () => {
    if (formData.password !== formData.passwordConfirm) {
      setPasswordConfirmError("비밀번호가 일치하지 않아요.");
      return false;
    }
    setPasswordConfirmError("");
    return true;
  };

  function handleEmailFocus() {
    setEmailFocus(true);
  }

  function handlePasswordFocus() {
    setPasswordFocus(true);
  }

  function handlePasswordConfirmFocus() {
    setPasswordConFirmFocus(true);
  }

  function togglePasswordVisibility() {
    setIsPasswordVisible(!isPasswordVisible);
  }

  function togglePasswordConfirmVisibility() {
    setIsPasswordConfirmVisible(!isPasswordConfirmVisible);
  }

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const isEmailValid = handleEmail();
    const isPasswordValid = handlePassword();

    if (!isEmailValid || !isPasswordValid) {
      return;
    }
  };

  return (
    <form className={styles.loginForm} onSubmit={handleSubmit}>
      <div className={styles.emailContainer}>
        <label htmlFor="email" className={styles.signLabel}>
          이메일
        </label>
        <input
          id="email"
          name="email"
          type="email"
          placeholder="이메일을 입력해주세요."
          className={`${styles.signInput} ${emailError ? styles.signInputError : ""}`}
          value={formData.email}
          onChange={handleChange}
          onFocus={handleEmailFocus}
          onBlur={handleEmail}
        />
        {emailError && <div className={styles.errorMessage}>{emailError}</div>}
      </div>
      <div className={styles.passwordContainer}>
        <label htmlFor="password" className={styles.signLabel}>
          비밀번호
        </label>
        <div className={styles.passwordInput}>
          <input
            id="password"
            name="password"
            type={isPasswordVisible ? "text" : "password"}
            placeholder="비밀번호를 입력해 주세요."
            className={`${styles.signInput} ${passwordError ? styles.signInputError : ""}`}
            value={formData.password}
            onChange={handleChange}
            onFocus={handlePasswordFocus}
            onBlur={handlePassword}
          />
          <button className={styles.eyeButton} type="button" onClick={togglePasswordVisibility}>
            {isPasswordVisible ? <img src="/img/eye-on.svg" alt="Hide password" /> : <img src="/img/eye-off.svg" alt="Show password" />}
          </button>
        </div>
        {passwordError && <div className={styles.errorMessage}>{passwordError}</div>}
      </div>
      <div className={styles.passwordContainer}>
        <label htmlFor="passwordConfirm" className={styles.signLabel}>
          비밀번호 확인
        </label>
        <div className={styles.passwordInput}>
          <input
            id="passwordConfirm"
            name="passwordConfirm"
            type={isPasswordConfirmVisible ? "text" : "password"}
            placeholder="비밀번호와 일치하는 값을 입력해 주세요."
            className={`${styles.signInput} ${passwordConfirmError ? styles.signInputError : ""}`}
            value={formData.passwordConfirm}
            onChange={handleChange}
            onFocus={handlePasswordConfirmFocus}
            onBlur={handlePasswordConfirm}
          />
          <button className={styles.eyeButton} type="button" onClick={togglePasswordConfirmVisibility}>
            {isPasswordConfirmVisible ? <img src="/img/eye-on.svg" alt="Hide password confirm" /> : <img src="/img/eye-off.svg" alt="Show password confirm" />}
          </button>
        </div>
        {passwordConfirmError && <div className={styles.errorMessage}>{passwordConfirmError}</div>}
      </div>
      <button className={styles.buttonLogin} type="submit">
        회원가입
      </button>
    </form>
  );
}

export default SignupForm;
