import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { useState } from "react"

export interface Props { ipInfo: (ip: string) => void }

const Search = (props: Props) => {
    const [Ip, setIp] = useState("")

    const isDomainName = (str: string): boolean => {
        // returns true if string is a valid domain name
        const pattern = /^[a-z0-9]+([-.]{1}[a-z0-9]+)*\.[a-z]{2,5}$/i
        return pattern.test(str)      
    }

    const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        Ip === ''
            ? (alert('Please enter an IP'), e.preventDefault())
            : isValidIP(Ip) || isDomainName(Ip)
                ? (e.preventDefault(), props.ipInfo(Ip), setIp('')) // sends ip to app if all checks pass
                : (alert('Invalid IP Address or Domain Name'), e.preventDefault(), setIp(''))
    }

    const onIpChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setIp(e.target.value); // updates the Ip state with the entered value in the input field
    }

    return (
        <form className="search-bar" onSubmit={onSubmit}>
            <input
                type="text"
                value={Ip}
                onChange={onIpChange}
                placeholder="Search IP Address or Domain" />
            <button
                type="submit">
                <FontAwesomeIcon icon={faSearch} />
            </button>
        </form>
    )
}

export default Search

export const isValidIP = (str: string): boolean => {
    // returns true if ip address is valid
    const ipRegex = /^(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/;
    return ipRegex.test(str)
}