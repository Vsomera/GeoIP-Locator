import Header from './components/Header'
import InfoBar from './components/InfoBar'
import Map from './components/Map'
import axios from 'axios'

function App() {
  const api_key = 'at_f15zuOqz6V9EWXNblGN9H9lZcPfCq'
  const url = 'https://geo.ipify.org/api/v2/country,city,vpn?'
  const ipInfo = (Ip : string) => {
    // returns geolocation info on the ip
    axios.get(`${url}apiKey=${api_key}&ipAddress=${Ip}`)
      .then(response => console.log(response.data))
      .catch(err => console.log(err))
    }
   
  
  

  return (
    <>
      <div className="container">
        <Header 
            ipInfo={ipInfo}
            title="IP Address Locator"/>
        <InfoBar 
            ip="192.168.239.255"
            location="1234 Rupert St"
            timezone="UTC - 5:00pm"
            isp = "Slocan Park"/>
      </div>
      <Map 
        line1="CSS3 Popup"
        line2="Easily Customizable"/>
    </>
  )
}

export default App
