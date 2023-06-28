import "./ModInfo.scss"

function ModInfo({ name, version, i } : { name: string, version: string, i: number }) {
  return <div className="one-mode">
    <h3 className="name">{i + 1}. {name}</h3> 
    <h3 className="version">{version}</h3>
  </div>
}

export default ModInfo