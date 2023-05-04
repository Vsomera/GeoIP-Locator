export interface Props { timezone : string | boolean }

const Timezone = (props : Props) => {
    return (
        <div>
            <p>Timezone</p>
            <h2>{props.timezone}</h2>
        </div>
    )
}

export default Timezone
