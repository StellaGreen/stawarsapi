import fetchData from "./fetchData"

const fetchPlanets = (url, setUrl, setPlanets, planets) => {
    fetch(url)
    .then((response) => {
      if (!response.ok) {
        throw new Error("something went wrong")
      }
      return response.json()
    })
    .then((data) => {
      setUrl(data.next)
      fetchData(data.next, setPlanets, planets)
    })
    .catch((error) => {
      console.error(error.message)
    })
}

export default fetchPlanets