import Header from './components/Header'
import InfoBar from './components/InfoBar'
import Map from './components/Map'


function App() {
  return (
    <>
    <div className="container">
      <Header 
          title="IP Address Locator"/>
      <InfoBar 
          ip="192.168.239.255"
          location="1234 Rupert St"
          timezone="UTC - 5:00pm"
          isp = "Slocan Park"/>
    </div>
    <Map />
    </>
  )
}

export default App
