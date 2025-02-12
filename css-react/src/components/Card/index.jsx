import styles from "./index.module.scss";
const Card = () => {
  return (
    <div className={styles.card}>
      <div>
        <img
          className={styles["card-image"]}
          src="https://picsum.photos/200"
          alt=""
        />
      </div>
      <div className={styles["card-body"]}>
        <h4>David</h4>
      </div>
      <div>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
      </div>
    </div>
  );
};

export default Card;
