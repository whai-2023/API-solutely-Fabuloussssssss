import { useEffect, useState } from 'react'
import { PeopleModel } from '../../Models/people'
import { getVader } from '../apiClient'
import Header from "./header"


export default function DarthVader() {
  const [people, setPeople] = useState<PeopleModel | null>(null)

  useEffect(() => {
    async function fetchPeople() {
      const fetchedPeople = await getVader()
      setPeople(fetchedPeople)
    }
    fetchPeople()
  }, [])
  return (
    <>
      <Header />
      <div className="dataContainer">
        <h1>Name: {people?.name}</h1>
        <h2>Height: {people?.height}</h2>
        <h2>Mass: {people?.mass}</h2>
        <h2>Birth Year: {people?.birth_year}</h2>
      </div>
    </>
  )
}