import Head from "next/head";

import Container from "../../components/redeem/Container/Container";
import styles from "./Redeem.module.css";

import Modal from "../../components/redeem/Modal/Modal";
import { useState, createContext } from "react";

export const ModalContext = createContext(false);

const Redeem = ({ data }) => {
  const [modal, setModal] = useState(false);
  return (
    <ModalContext.Provider value={[modal, setModal]}>
      <Head>
        <title>Redeem Page - Pentatonic</title>
      </Head>
      <div className={styles.main}>
        <Container />

        <Modal />
      </div>
    </ModalContext.Provider>
  );
};

export default Redeem;
