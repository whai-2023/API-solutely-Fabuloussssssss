import { useEffect, useState } from 'react'
import { PeopleModel } from '../../Models/people'
import { getPeople } from '../apiClient'

export default function People() {
  const [people, setPeople] = useState<PeopleModel | null>(null)

  useEffect(() => {
    async function fetchPeople() {
      const fetchedPeople = await getPeople()
      setPeople(fetchedPeople)
    }
    fetchPeople()
  }, [])
  return (
    <>
      <h1>Name: {people?.name}</h1>
      <h2>Height: {people?.height}</h2>
      <h2>Mass: {people?.mass}</h2>
      <h2>Hair Color: {people?.hair_color}</h2>
    </>
  )
}