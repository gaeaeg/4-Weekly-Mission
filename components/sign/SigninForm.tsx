import React, { useState } from "react";
import { useRouter } from "next/router";
import { isValidEmail } from "./sign";
import styles from "@/styles/SigninForm.module.css";

interface SigninFormData {
  email: string;
  password: string;
}

function SigninForm() {
  const [formData, setFormData] = useState<SigninFormData>({ email: "", password: "" });
  const [emailError, setEmailError] = useState<string>("");
  const [passwordError, setPasswordError] = useState<string>("");
  const [emailFocus, setEmailFocus] = useState<boolean>(false);
  const [passwordFocus, setPasswordFocus] = useState<boolean>(false);
  const [isPasswordVisible, setIsPasswordVisible] = useState<boolean>(false);
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
    if (!formData.password) {
      setPasswordError("비밀번호를 입력해 주세요.");
      return false;
    }
    setPasswordError("");
    return true;
  }

  function handleEmailFocus() {
    setEmailFocus(true);
    setEmailError("");
  }

  function handlePasswordFocus() {
    setPasswordFocus(true);
    setPasswordError("");
  }

  function togglePasswordVisibility() {
    setIsPasswordVisible(!isPasswordVisible);
  }

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const isEmailValid = handleEmail();
    const isPasswordValid = handlePassword();

    if (!isEmailValid || !isPasswordValid) {
      return;
    }

    try {
      const response = await fetch("https://bootcamp-api.codeit.kr/api/sign-in", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email: formData.email, password: formData.password }),
      });

      const data = await response.json();
      console.log(data);
      if (response.ok) {
        localStorage.setItem("accessToken", data.accessToken);
        router.push("/folder");
      } else {
        if (data.error && data.error.includes("Email")) {
          setEmailError("이메일을 확인해 주세요.");
        }
        if (data.error && data.error.includes("Password")) {
          setPasswordError("비밀번호를 확인해 주세요.");
        }
      }
    } catch (error) {
      console.error(error);
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
      <button className={styles.buttonLogin} type="submit">
        로그인
      </button>
    </form>
  );
}

export default SigninForm;
