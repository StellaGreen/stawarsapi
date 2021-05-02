import { useEffect, useState } from "react"
import AllPlanet from "./AllPlanet"
import fetchPlanets from "../fetchPlanets"


const StarWarsApp = () => {
const [planets, setPlanets] = useState([])
const [url, setUrl] = useState("https://swapi.dev/api/planets/")


const handleButtonClick = () => {
  fetchPlanets(url, setUrl, setPlanets, planets)
}

useEffect(() => {
  fetch("https://swapi.dev/api/planets/")
    .then((response) => {
      if (!response.ok) {
        throw new Error("something went wrong")
      }
      return response.json()
    })
    .then((data) => {
      setPlanets(data.results)
    })
    .catch((error) => {
      console.error(error.message)
    })
}, [])



return(
  <div className="row" wfd-id="2">
    {planets.map(elem => (
      <AllPlanet key={elem.name} name={elem.name} pop={elem.population} climat={elem.climate}/>
    ))}
    <button onClick={handleButtonClick} type="button" className="btn btn-dark col-1 m-auto p-auto fw-bold" wfd-id="14">Suivant</button>
  </div>
) 
}

export default StarWarsApp