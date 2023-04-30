import Ipaddress from "./IpAddress"
import Location from "./Location"
import Timezone from "./timezone"
import Isp from "./Isp"

export interface Props {
    ip : string | boolean
    location : string | boolean
    timezone : string | boolean
    isp : string | boolean
}

const InfoBar = (props : Props) => {
    return (
        <div className="info-bar">
            <Ipaddress ip={props.ip} />
            <Location location={props.location} />
            <Timezone timezone={props.timezone} />
            <Isp isp={props.isp} />
        </div>
    )
}

export default InfoBar
