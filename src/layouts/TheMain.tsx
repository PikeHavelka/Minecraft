import "./TheMain.scss"
import { mainData } from "../types/typesData"
import { useState, useEffect } from "react"

function TheMain({ serverDataMain }: { serverDataMain: mainData }) {
  const [modN, setModN] = useState([])
  const [modV, setModV] = useState([])

  useEffect(() => {
    const modName = Object.keys(serverDataMain.serverMods) as []
    setModN(modName)

    setModV(Object.values(serverDataMain.serverMods))
  }, [serverDataMain.serverMods])

  return <main>
    <div className="title">
      <img src={serverDataMain.serverFavicon} alt="The Mod Pack Name" />
      <h1>Mod List</h1>
    </div>

    <div className="mods">
      <div className="mod-names">
        {modN.map((oneMod: string, index: number) => {
          return <h3 key={index}>{index + 1}. {oneMod}</h3>
        })}
      </div>

      <div className="mod-versions">
        {modV.map((keys: string, index: number) => {
          return <h3 key={index}>{keys}</h3>
        })}
      </div>
    </div>
  </main>
}

export default TheMain