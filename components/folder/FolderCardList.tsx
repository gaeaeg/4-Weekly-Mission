import React, { useState, useEffect } from "react";
import { timeCalculate, getDateText } from "@/utils/timeCalc";
import Link from "@/node_modules/next/link";
import styles from "@/styles/FolderCardList.module.css";

interface FolderCardData {
  id: string;
  created_at: string;
  title?: string;
  url: string;
  description?: string;
  image_source?: string;
  timePassed: string;
  getDate: string;
}

interface Folder {
  id: string;
  name: string;
}

interface FolderCardListProps {
  folders: Folder[];
}

export type Link = {
  created_at: string;
  description: string;
  id: number;
  imageSource: string;
  title: string;
  url: string;
};

const defaultCardImg = "img/card_default.png";

function handleImageError(event: any) {
  event.target.src = defaultCardImg;
}

function FolderCardList({ folders }: FolderCardListProps) {
  const [originalData, setOriginalData] = useState<FolderCardData[]>([]);
  const [linkData, setLinkData] = useState<FolderCardData[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectFolderName, setSelectFolderName] = useState("전체");

  async function fetchData(url: string, folderName = "전체") {
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error("네트워크 응답이 올바르지 않습니다.");
      }
      const data = await response.json();
      const processedData: FolderCardData[] = data.data.map((link: Link) => ({
        ...link,
        timePassed: timeCalculate(link.created_at),
        getDate: getDateText(new Date(link.created_at)),
      }));
      setOriginalData(processedData);
      setLinkData(processedData);
      setSelectFolderName(folderName);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    fetchData(`https://bootcamp-api.codeit.kr/api/users/1/links`, "전체");
  }, []);

  useEffect(() => {
    const filteredData = searchTerm ? originalData.filter((card) => card.url.includes(searchTerm) || card.title?.toLowerCase().includes(searchTerm.toLowerCase()) || card.description?.toLowerCase().includes(searchTerm.toLowerCase())) : originalData;
    setLinkData(filteredData);
  }, [searchTerm, originalData]);

  function handleSearchChange(event: React.ChangeEvent<HTMLInputElement>) {
    setSearchTerm(event.target.value);
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
  }

  function handleClearSearch() {
    setSearchTerm("");
  }

  const handleFolderClick = (folderId: string | null, folderName: string) => {
    const url = folderId ? `https://bootcamp-api.codeit.kr/api/users/1/links?folderId=${folderId}` : `https://bootcamp-api.codeit.kr/api/users/1/links`;
    fetchData(url, folderName);
  };

  return (
    <div className={styles.cardlist}>
      <form className={styles.search} onSubmit={handleSubmit}>
        <img src="img/Search.svg" alt="Search" />
        <input className={styles.searchInput} type="text" placeholder="링크를 검색해보세요." value={searchTerm} onChange={handleSearchChange} />
        {searchTerm && <img src="img/_close.svg" alt="close" onClick={handleClearSearch} style={{ cursor: "pointer" }} />}
      </form>
      <div className={styles.folderContainer}>
        <ul className={styles.folderlist}>
          <li>
            <button className={styles.buttonFolder} onClick={() => handleFolderClick(null, "전체")}>
              전체
            </button>
          </li>
          {folders.map((folder) => (
            <li key={folder.id}>
              <button className={styles.buttonFolder} onClick={() => handleFolderClick(folder.id, folder.name)}>
                {folder.name}
              </button>
            </li>
          ))}
        </ul>
        <button className={styles.buttonFolderadd}>
          폴더추가
          <img src="img/add.svg" alt="addbutton" />
        </button>
        <button className={styles.buttonFolderaddMobile}>
          폴더추가
          <img src="img/add_mobile.svg" alt="addbutton-mobile" />
        </button>
      </div>
      <div className={styles.folderName}>{selectFolderName && <p>{selectFolderName}</p>}</div>
      <div className={styles.cardContainer}>
        {linkData.map((card) => (
          <Link className={styles.card} key={card.id} href={card.url} target="_blank" rel="noopener noreferrer">
            <div className={styles.imageContainer}>
              <img className={styles.cardImage} src={card.image_source || defaultCardImg} alt={card.title} onError={handleImageError} />
            </div>
            <div className={styles.textContainer}>
              <span className={styles.textTime}>{card.timePassed}</span>
              <p className={styles.textDescription}>{card.title}</p>
              <p className={styles.textDate}>{card.getDate}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default FolderCardList;
