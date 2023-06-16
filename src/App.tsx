import "./index.scss"
import Sidebar from "./layouts/Sidebar"
import TheFooter from "./layouts/TheFooter"
import TheHeader from "./layouts/TheHeader"
import TheMain from "./layouts/TheMain"
import { useState, useEffect } from "react"
import { webSocketData } from "./types/typesData"

function App() {
  const [sideData, setSideData] = useState({ serverOnline: false, serverDescription: "??", serverPlayersMax: 20, serverVersion: "??", serverPlayersOnline: 0 })
  const [currentPlayers, setCurrentPlayers] = useState(0)
  const [mainData, setMainData] = useState({ serverFavicon: "#", serverMods: {} })

  useEffect(() => {
    const webSocket = new WebSocket("wss://dev-null.xyz/api/ws")
    webSocket.onopen = () => {
      const sub = { channel: "minecraft", command: "subscribe" }
      webSocket.send(JSON.stringify(sub))
    }

    webSocket.onmessage = (e) => {
      const data = JSON.parse(e.data) as webSocketData
      
      if (data.message.type === "initial") {
        const serverOnline = data.message.online
        const serverDescription = data.message.description
        const serverPlayersOnline = data.message.players.online
        const serverPlayersMax = data.message.players.max
        const serverVersion = data.message.version
 
        setSideData({ serverOnline, serverDescription, serverPlayersMax, serverVersion, serverPlayersOnline })
        
        const serverFavicon = data.message.favicon
        const serverMods = data.message.mods

        setMainData({ serverFavicon, serverMods })

        } else if (data.message.type === "status") {
          console.log(`%cServer error:`, "color: red;")
          console.log(data.message.reasonForOffline)

          const serverOnline = data.message.online

          setSideData({ serverOnline, serverDescription: "??", serverPlayersMax: 0, serverVersion: "??", serverPlayersOnline: 0 })

        } else if (data.message.type === "onlinePlayers") {
          const serverPlayersOnline = data.message.playersOnline

          setCurrentPlayers(serverPlayersOnline)
        }
      }
    }, [])
    
  return <div className="blur-effect">
    <div className="grid-container">
      <TheHeader />
      <Sidebar serverDataSideBar={sideData} playersData={currentPlayers} />
      <TheMain serverDataMain={mainData}/>
      <TheFooter />
    </div>
  </div>
}

export default App