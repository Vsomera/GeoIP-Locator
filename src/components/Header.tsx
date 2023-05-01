import Search from "./Search"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGlobeAmericas } from '@fortawesome/free-solid-svg-icons'
export interface Props {title: string}

const Header = (props : Props) => {
    return(
        <div className="head-container">
            <h2>{props.title} <FontAwesomeIcon icon={faGlobeAmericas} /></h2>
            <Search />
        </div>
    )
}

export default Header
