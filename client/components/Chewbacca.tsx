import { useEffect, useState } from 'react'
import { PeopleModel } from '../../Models/people'
import { HomeworldModel } from '../../Models/homeworld'
import { StarshipModel } from '../../Models/starship'
import { getPeople, getHomeworld, getStarship } from '../apiClient'
import { films } from '../Data/data'
import Header from "./header"

export default function LukeSkywalker() {
  const [people, setPeople] = useState<PeopleModel | null>(null)
  const [homeworld, setHomeworld] = useState<HomeworldModel | null>(null)
  const [starship, setStarship] = useState<StarshipModel | null>(null)

  useEffect(() => {
    async function fetchPeople() {
      const fetchedPeople = await getPeople(13)
      const fetchedHomeworld = await getHomeworld(fetchedPeople.homeworld)
      const fetchedStarship = await getStarship(fetchedPeople.starships[0])
      console.log(fetchedStarship)
      setPeople(fetchedPeople)
      setHomeworld(fetchedHomeworld)
      setStarship(fetchedStarship)
    }
    fetchPeople()
  }, []) 
  console.log(people)
  console.log(films)
  return (
    <>
    <Header/>
      <h1>{people?.name}</h1>
      <h2>Height:</h2>
      <ul>
        <li>{people?.height}</li>
      </ul>
      <h2>Birth Year:</h2>
      <ul>
        <li>{people?.mass}</li>
      </ul>
      <h2>Gender:</h2>
      <ul>
        <li>{people?.birth_year}</li>
      </ul>
      <h2>Homeworld:</h2>
      <ul>
      <li>{homeworld?.name}</li>
      <li>Terrain: {homeworld?.terrain}</li>
      <li>Population: {homeworld?.population}</li>
      </ul>
      <h2>Starships:</h2>
      <ul>
        <li>{starship?.name}</li>
        <li>Model: {starship?.model}</li>
        <li>Class: {starship?.starship_class}</li>
        <li>Max Speed: {starship?.max_atmosphering_speed}</li>
      </ul>
      <h2>Films:</h2>
        <ul>
          {people?.films.map( filmURL => {
            {console.log(filmURL)}
            const index = filmURL.slice(-2, -1)
            console.log(index)
            return <li key={filmURL}>{films[Number(index)-1]}</li>
          })}
          </ul> 
    </>
  )
}
