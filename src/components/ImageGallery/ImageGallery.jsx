import ImageCard from "../ImageCard/ImageCard.jsx";
import s from "./ImageGallery.module.css";

const ImageGallery = ({ images, onImageClick }) => {
  return (
    <ul className={s.list}>
      {images.map((image) => (
        <li
          key={image.id}
          className={s.item}
          onClick={() => onImageClick(image)}
        >
          <ImageCard src={image.urls.small} alt={image.alt_description} />
        </li>
      ))}
    </ul>
  );
};

export default ImageGallery;
