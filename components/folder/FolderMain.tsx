import styles from "@/styles/FolderMain.module.css";

function FolderMain() {
  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
  }

  return (
    <div className={styles.linkContainer}>
      <form className={styles.link} onSubmit={handleSubmit}>
        <img src="img/link.svg" alt="link" />
        <input className={styles.linkInput} type="text" placeholder="링크를 추가해 보세요." />
        <button className={styles.buttonLinkadd}>추가하기</button>
      </form>
    </div>
  );
}

export default FolderMain;
