import "./TheMain.scss"
import { MainData } from "../types/typesData"
import ModInfo from "../components/ModInfo"

function TheMain({ serverDataMain } : { serverDataMain: MainData }) {

  const modsData = Object.keys(serverDataMain.serverMods).map( (modName) => {
    return {
      modName: modName,
      modVersion: serverDataMain.serverMods[modName]
    }
  })

  return <main>
    <div className="title">
      <img src={serverDataMain.serverFavicon} alt="Mod Pack Name" />
      <h1>Mod List</h1>
    </div>

    <div className="mods">
      {modsData.map( (oneModeInfo, index) => {
        return <ModInfo key={index} name={oneModeInfo.modName} version={oneModeInfo.modVersion} i={index} /> 
      })}
    </div>
  </main>
}

export default TheMain