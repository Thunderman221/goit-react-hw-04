import { useState, useEffect } from "react";
import "./App.css";
import SearchBar from "./components/SearchBar/SearchBar";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import LoadMoreBtn from "./components/LoadMoreBtn/LoadMoreBtn";
import ImageModal from "./components/ImageModal/ImageModal"; // Import the ImageModal
import { fetchImages } from "./services/api";
import Loader from "./components/Loader/Loader";

function App() {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [query, setQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const imagesPerPage = 12;

  useEffect(() => {
    if (!query) return;

    const getImages = async () => {
      setLoading(true);
      try {
        const results = await fetchImages(query, currentPage, imagesPerPage);
        setImages((prevImages) => [...prevImages, ...results]);
      } catch (error) {
        console.error("Error fetching images:", error);
      } finally {
        setLoading(false);
      }
    };

    getImages();
  }, [query, currentPage]);

  const handleSearch = (searchQuery) => {
    setQuery(searchQuery);
    setImages([]);
    setCurrentPage(1);
  };

  const loadMore = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  const openModal = (image) => {
    setSelectedImage(image);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedImage(null);
  };

  return (
    <>
      <SearchBar onSubmit={handleSearch} />
      {loading && <Loader />}
      <ImageGallery images={images} onImageClick={openModal} />
      {!loading && images.length > 0 && <LoadMoreBtn onClick={loadMore} />}
      <ImageModal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        image={selectedImage}
      />
    </>
  );
}

export default App;
