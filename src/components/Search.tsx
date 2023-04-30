import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

const Search = () => {
    return (
        <form className="search-bar">
            <input 
                type="text" 
                placeholder="Search IP Address or Domain" />
            <button
                type="submit">
                <FontAwesomeIcon icon={faSearch} />
            </button>
        </form>
    )
}

export default Search
