import searchStyles from "../styles/Search.module.scss";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

const SearchBar = ({ name }) => {
  return (
    <div className={searchStyles.container}>
      <label>
        <input
          id={name}
          name={name}
          className={searchStyles.searchBar}
          type="text"
          placeholder="Tìm kiếm"
        ></input>
      </label>

      <FontAwesomeIcon
        icon={faSearch}
        className={searchStyles.icon}
        onClick={() => {}}
      />
    </div>
  );
};

export default SearchBar;
