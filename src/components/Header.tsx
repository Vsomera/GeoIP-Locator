import Search from "./Search"
export interface Props {title: string}

const Header = (props : Props) => {
    return(
        <div className="head-container">
            <h1>{props.title}</h1>
            <Search />
        </div>
    )
}

export default Header
