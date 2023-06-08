import { useEffect, useState } from 'react'
import { PeopleModel } from '../../Models/people'
import { getYoda } from '../apiClient'

export default function Yoda() {
  const [people, setPeople] = useState<PeopleModel | null>(null)

  useEffect(() => {
    async function fetchPeople() {
      const fetchedPeople = await getYoda()
      setPeople(fetchedPeople)
    }
    fetchPeople()
  }, [])
  return (
    <>
      <h1>Name: {people?.name}</h1>
      <h2>Height: {people?.height}</h2>
      <h2>Mass: {people?.mass}</h2>
      <h2>Birth Year: {people?.birth_year}</h2>
    </>
  )
}