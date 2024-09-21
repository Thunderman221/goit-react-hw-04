import s from "./ImageCard.module.css";

const ImageCard = ({ src, alt, onClick }) => {
  return (
    <div onClick={onClick} className={s.card}>
      <img className={s.image} src={src} alt={alt} />
    </div>
  );
};

export default ImageCard;
