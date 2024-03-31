import { useCardsData } from "./Card";
import Link from "next/link";
import styles from "@/styles/CardList.module.css";

const defaultCardImg = "img/card_default.png";

function handleImageError(event: any) {
  event.target.src = defaultCardImg;
}

function CardList() {
  const data = useCardsData();

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
  }

  return (
    <div className={styles.cardlist}>
      <form className={styles.search} onSubmit={handleSubmit}>
        <img src="img/Search.svg" alt="Search" />
        <input className={styles.searchInput} type="text" placeholder="링크를 검색해보세요." />
      </form>
      <div className={styles.cardContainer}>
        {data.map((cardData) => (
          <Link className={styles.card} key={cardData.id} href={cardData.url} target="_blank" rel="noopener noreferrer">
            <div className={styles.imageContainer}>
              <img className={styles.cardImage} src={cardData.imageSource || defaultCardImg} alt={cardData.title} onError={handleImageError} />
            </div>
            <div className={styles.textContainer}>
              <span className={styles.textTime}>{cardData.timePassed}</span>
              <p className={styles.textDescription}>{cardData.title}</p>
              <p className="text-date">{cardData.getDate}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default CardList;
