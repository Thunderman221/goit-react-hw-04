import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import searchIcon from "../../assets/search-icon.svg";
import s from "./SearchBar.module.css";

const SearchBar = ({ onSubmit }) => {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim() === "") {
      toast.error("Please enter a search query.");
      return;
    }
    onSubmit(inputValue);
    setInputValue("");
  };

  return (
    <header className={s.wrapper}>
      <form onSubmit={handleSubmit} className={s.form}>
        <button type="submit" className={s.btn}>
          <img src={searchIcon} alt="Search icon" />
        </button>
        <input
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          className={s.form}
        />
      </form>
      <Toaster position="top-right" />
    </header>
  );
};

export default SearchBar;
