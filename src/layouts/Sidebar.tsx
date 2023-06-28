import "./Sidebar.scss"
import { SideData } from "../types/typesData"

function Sidebar({ serverDataSideBar, playersData }: { serverDataSideBar: SideData, playersData: number }) {
  let serverStatus = "??"

  if (serverDataSideBar.serverOnline === true) {
    serverStatus = "ON"
  } else {
    serverStatus = "OFF"
  }

  return <aside>
    <h2>Server Information</h2>

    <div className="side-server-data">
      <div className="side-data-row">
        <h3>Mod pack</h3>
        <p className="server-info">{serverDataSideBar.serverDescription}</p>
      </div>

      <div className="side-data-row">
        <h3>Version</h3>
        <p className="server-info">{serverDataSideBar.serverVersion}</p>
      </div>

      <div className="side-data-row">
        <h3>Status</h3>
        <p className={`server-info ${serverStatus === "ON" ? "status-green" : "status-red"}`}>{serverStatus}</p>
      </div>

      <div className="side-data-row">
        <h3>Players</h3>
        <p className="server-info">{serverDataSideBar.serverPlayersOnline || playersData} / {serverDataSideBar.serverPlayersMax}</p>
      </div>
    </div>

    <p className="refresh-info">Server's data refreshes every 1/min.</p>
  </aside>
}

export default Sidebar