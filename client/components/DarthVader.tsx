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

  const handleAudioPlay = (audioSrc: string) => {
    const audio = new Audio(audioSrc)
    audio.play()
  }

  return (
    <>
      <Header />
      <div className="dataContainer">
        <h1>Name: {people?.name}</h1>
        <h2>Height: {people?.height}</h2>
        <h2>Mass: {people?.mass}</h2>
        <h2>Birth Year: {people?.birth_year}</h2>
      </div>
      <div className="audioButtons">
        <button className="audioButton" onClick={() => handleAudioPlay('./darthvader1.mp3')}>
          <span>Click Me</span>
        </button>
        <button className="audioButton" onClick={() => handleAudioPlay('./darthvader2.mp3')}>
          <span>Click Me</span>
        </button>
        <button className="audioButton" onClick={() => handleAudioPlay('./darthvader3.mp3')}>
          <span>Click Me</span>
        </button>
        <button className="audioButton" onClick={() => handleAudioPlay('./darthvader4.mp3')}>
          <span>Click Me</span>
        </button>
      </div>
    </>
  )
}