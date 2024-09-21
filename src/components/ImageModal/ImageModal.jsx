import Modal from "react-modal";
import s from "./ImageModal.module.css";

const ImageModal = ({ isOpen, onRequestClose, image }) => {
  if (!image) return null; // Повертаємо null, якщо немає зображення

  const { user, likes, urls } = image; // Витягуємо дані з об'єкта зображення, без views

  return (
    <Modal isOpen={isOpen} onRequestClose={onRequestClose} className={s.modal}>
      <div className={s.modalContent}>
        <img
          src={urls.regular}
          alt={image.alt_description}
          className={s.modalImage}
        />
        <div className={s.info}>
          <p>
            <strong>Author:</strong> {user.name}
          </p>
          <p>
            <strong>Likes:</strong> {likes}
          </p>
        </div>
        <button onClick={onRequestClose} className={s.closeBtn}>
          Close
        </button>
      </div>
    </Modal>
  );
};

export default ImageModal;
