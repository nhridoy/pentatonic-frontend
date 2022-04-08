import Tshirt from "../Tshirt/Tshirt";
import styles from "./Container.module.css";
import pic1 from "../../../assets/pic-1.png";
import pic4 from "../../../assets/pic-4.png";

const Container = ({ homePageData }) => {
  return (
    <div className={styles.main}>
      <h2 className={styles.title}>REDEEM YOUR NFT</h2>
      <div className={styles.tshirtContainer}>
        <Tshirt zoom="50" pic={pic1} />
        <Tshirt zoom="50" pic={pic1} />
        <Tshirt zoom="50" pic={pic1} />
        <Tshirt zoom="500" pic={pic4} />
        <Tshirt zoom="500" pic={pic4} />
        <Tshirt zoom="500" pic={pic4} />
        <Tshirt zoom="50" pic={pic1} />
        <Tshirt zoom="50" pic={pic1} />
        <Tshirt zoom="50" pic={pic1} />
        <Tshirt zoom="500" pic={pic4} />
        <Tshirt zoom="500" pic={pic4} />
        <Tshirt zoom="500" pic={pic4} />
      </div>
    </div>
  );
};

export default Container;
