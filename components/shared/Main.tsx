import { useState, useEffect } from "react";
import styles from "@/styles/Main.module.css";

type Link = {
  createdAt: string;
  description: string;
  id: number;
  imageSource: string;
  title: string;
  url: string;
};

type Owner = {
  id: number;
  name: string;
  profileImageSource: string;
};

type Folder = {
  count: number;
  id: number;
  links: Link[];
  name: string;
  owner: Owner;
};

type FolderResponse = {
  folder: Folder;
};

function Main() {
  const [folderData, setFolderData] = useState({
    userName: "",
    folderName: "",
    profileImg: "",
  });

  useEffect(() => {
    fetch("https://bootcamp-api.codeit.kr/api/sample/folder")
      .then((response) => {
        if (!response.ok) {
          throw new Error("네트워크 응답이 올바르지 않습니다.");
        }
        return response.json();
      })
      .then((data: FolderResponse) => {
        setFolderData({
          userName: data.folder.owner.name,
          folderName: data.folder.name,
          profileImg: data.folder.owner.profileImageSource,
        });
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <div className={styles.folderInfo}>
      <img className={styles.folderImg} src={folderData.profileImg} alt="profile_img"></img>
      <p className={styles.username}>@{folderData.userName}</p>
      <p className={styles.foldername}>{folderData.folderName}</p>
    </div>
  );
}

export default Main;
