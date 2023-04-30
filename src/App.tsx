import Header from './components/Header'
import InfoBar from './components/InfoBar'

function App() {
  return (
    <div className="container">
      <Header 
          title="IP Address Locator"/>
      <InfoBar 
          ip="192.168.239.255"
          location="1234 Rupert St"
          timezone="UTC - 5:00pm"
          isp = "Slocan Park"/>

    </div>
  )
}

export default App
