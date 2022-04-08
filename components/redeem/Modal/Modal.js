import styles from "./Modal.module.css";

import { useContext } from "react";
import { ModalContext } from "../../../pages/redeem";

const Modal = ({ data }) => {
  const [modal, setModal] = useContext(ModalContext);

  return (
    <>
      <div
        className={`${styles.modal} ${styles.micromodalSlide} ${
          modal && styles.isOpen
        }`}
        id="modal-1"
        aria-hidden="true"
      >
        <div
          className={styles.modalOverlay}
          tabIndex="-1"
          data-micromodal-close
          //   onClick={() => setModal(!modal)}
        >
          <div
            className={styles.modalContainer}
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-1-title"
          >
            <header className={styles.modalHeader}>
              <h2 className={styles.modalTitle} id="modal-1-title">
                Personal Details
              </h2>
              <button
                className={styles.modalClose}
                aria-label="Close modal"
                data-micromodal-close
                onClick={() => setModal(!modal)}
              ></button>
            </header>
            <main className={styles.modalContent} id="modal-1-content">
              <div className={styles.form}>
                <div className={styles.grid}>
                  <div className={styles.input}>
                    <label>First Name</label>
                    <input type="text" placeholder="First Name" />
                  </div>
                  <div className={styles.input}>
                    <label>Last Name</label>
                    <input type="text" placeholder="Last Name" />
                  </div>
                  <div className={styles.input}>
                    <label>T Shirt Size</label>
                    <select name="" id="">
                      <option value="" disabled selected>
                        Select
                      </option>
                      <option value="">S</option>
                      <option value="">M</option>
                      <option value="">L</option>
                      <option value="">XL</option>
                      <option value="">XXL</option>
                    </select>
                  </div>
                </div>
                <div className={styles.input}>
                  <label>Email</label>
                  <input type="email" placeholder="Email" />
                </div>
                <div className={styles.input}>
                  <label>Address</label>
                  <input type="text" placeholder="1st Line of Addess" />
                </div>
                <div className={styles.input}>
                  <input type="text" placeholder="2nd Line of Addess" />
                </div>
                <div className={styles.grid}>
                  <div className={styles.input}>
                    <input type="text" placeholder="City" />
                  </div>
                  <div className={styles.input}>
                    <input type="text" placeholder="Postcode" />
                  </div>
                  <div className={styles.input}>
                    <select name="" id="">
                      <option value="" disabled selected>
                        Country
                      </option>
                      <option value="">Bangladesh</option>
                      <option value="">India</option>
                      <option value="">USA</option>
                      <option value="">UK</option>
                    </select>
                  </div>
                </div>
              </div>
            </main>
            <footer className={styles.modalFooter}>
              <button
                className={styles.modalBtn}
                data-micromodal-close
                aria-label="Close this dialog window"
                onClick={() => setModal(!modal)}
              >
                CANCEL
              </button>
              <button
                className={`${styles.modalBtn} ${styles.modalBtnPrimary}`}
              >
                REDEEM
              </button>
            </footer>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
