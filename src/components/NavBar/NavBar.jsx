import styles from "./NavBar.module.css";
import SearchBar from './SearchBar/SearchBar.jsx';

export default function NavBar({onSearch}){
    return(
      <nav className={styles.container}>
        <div className={styles.li}>
      <SearchBar onSearch={onSearch} />
      </div>
  </nav>
    )
}