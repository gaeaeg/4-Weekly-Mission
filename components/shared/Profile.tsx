import { useState, useEffect } from "react";
import styles from "@/styles/Header.module.css";

interface ProfileData {
  profileImageSource?: string;
  email: string;
}

function Profile() {
  const [profileData, setProfileData] = useState<ProfileData | null>(null);

  useEffect(() => {
    fetch("https://bootcamp-api.codeit.kr/api/sample/user")
      .then((response) => {
        if (!response.ok) {
          throw new Error("네트워크 응답이 올바르지 않습니다.");
        }
        return response.json();
      })
      .then((data) => {
        setProfileData(data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  if (!profileData) {
    return <button>로그인</button>;
  }

  return (
    <div className={styles.profileInfo}>
      <img className={styles.profileImg} src={profileData.profileImageSource} alt="profile_img" />
      <p className={styles.profileEmail}>{profileData.email}</p>
    </div>
  );
}

export default Profile;
