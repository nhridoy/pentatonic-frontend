import Image from "next/image";
import styles from "./Tshirt.module.css";
import tshirt from "../../../assets/t-shirt.png";
import { useContext } from "react";
import { ModalContext } from "../../../pages/redeem";

const Tshirt = ({ zoom, pic }) => {
  const [modal, setModal] = useContext(ModalContext);
  return (
    <div className={styles.tshirtParent}>
      <p className={styles.title}>TSHIRT SERIES //{zoom}X ZOOM</p>
      <div className={styles.imgParent}>
        <div className={styles.tshirt}>
          <Image src={tshirt} priority />
        </div>
        <div className={styles.fabric}>
          <Image src={pic} />
        </div>
      </div>
      <button className={styles.button} onClick={() => setModal(!modal)}>
        REDEEM
      </button>
    </div>
  );
};

export default Tshirt;
