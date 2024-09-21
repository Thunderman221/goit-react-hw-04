import ImageCard from "../ImageCard/ImageCard.jsx";
import s from "./ImageGallery.module.css";

const ImageGallery = ({ images, onImageClick }) => {
  return (
    <ul className={s.list}>
      {images.length > 0 ? (
        images.map((image) => (
          <li key={image.id} className={s.item}>
            <ImageCard
              src={image.urls.small}
              alt={image.alt_description}
              onClick={() => onImageClick(image)}
            />
          </li>
        ))
      ) : (
        <li>No images available.</li>
      )}
    </ul>
  );
};

export default ImageGallery;
