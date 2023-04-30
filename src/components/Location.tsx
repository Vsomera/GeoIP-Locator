export interface Props { location : string | boolean}

const Location = (props : Props) => {
    return (
        <div>
            <p>Location</p>
            <h2>{props.location}</h2>
        </div>
    )
}

export default Location
