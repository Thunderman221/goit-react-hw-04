import Modal from "react-modal";
import s from "./ImageModal.module.css";

Modal.setAppElement("#root");

const ImageModal = ({ isOpen, onRequestClose, image }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      className={s.modal}
      overlayClassName={s.overlay}
    >
      <button onClick={onRequestClose} className={s.closeBtn}>
        Close
      </button>
      {image && <img src={image.urls.full} alt={image.alt_description} />}
    </Modal>
  );
};

export default ImageModal;
