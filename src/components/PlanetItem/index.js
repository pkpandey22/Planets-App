import './index.css'

const PlanetItem = props => {
  const {planetDetails} = props

  const {imageUrl, name, description} = planetDetails

  return (
    <div className="Planet">
      <img src={imageUrl} alt={`planet ${name}`} className="PlanetImage" />
      <h1 className="PlanetName">{name}</h1>
      <p className="PlanetDescription">{description}</p>
    </div>
  )
}

export default PlanetItem
