import { Route, BrowserRouter as Router, Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import Header from "./header"



function Index() {

  const [currentIndex, setCurrentIndex] = useState(0)
  const characterNames = ['Luke Skywalker', 'Darth Vader', 'Obi-Wan', 'Yoda']

  useEffect(() => {
    const characterLogos = document.querySelectorAll('.characterLogo')

    const showCurrentLogo = () => {
      const logosArray = Array.from(characterLogos) as HTMLElement[]
      logosArray.forEach((logo: HTMLElement, index: number) => {
        logo.style.display = index === currentIndex ? 'block' : 'none'
      })
    }

    const showNextLogo = () => {
      setCurrentIndex((prevIndex) =>
        prevIndex < characterLogos.length - 1 ? prevIndex + 1 : 0
      )
    }

    const showPreviousLogo = () => {
      setCurrentIndex((prevIndex) =>
        prevIndex > 0 ? prevIndex - 1 : characterLogos.length - 1
      )
    }

    const leftArrow = document.querySelector('.leftArrow')
    const rightArrow = document.querySelector('.rightArrow')

    if (leftArrow) {
      leftArrow.addEventListener('click', showPreviousLogo)
    }

    if (rightArrow) {
      rightArrow.addEventListener('click', showNextLogo)
    }

    showCurrentLogo()

    return () => {
      if (leftArrow) {
        leftArrow.removeEventListener('click', showPreviousLogo)
      }

      if (rightArrow) {
        rightArrow.removeEventListener('click', showNextLogo)
      }
    }
  }, [currentIndex])

  const currentCharacterName = characterNames[currentIndex]

  return (
    <>
      <Header />
      <h3 id="characterName">{currentCharacterName}</h3>
          <div className="characterLogoContainer">
            <div className="arrowKeys">
              <div className="leftArrow">
                <i className="fa-regular fa-circle-left fa-shake"></i>
              </div>
              <Link to="/luke_skywalker" >
                <div className="characterLogo Active" id="box1">
                  <img src="./luke.gif" alt="luke skywalker"></img>
                </div>
              </Link>
              <Link to="/darth_vader" >
                <div className="characterLogo" id="box2">
                  <img src="./darthvader.gif" alt="darth vader"></img>
                </div>
              </Link>
              <Link to="/obi_wan" >
                <div className="characterLogo" id="box3">
                  <img src="./obiwan.gif" alt="obi wan"></img>
                </div>
              </Link>
              <Link to="/yoda" >
                <div className="characterLogo" id="box4">
                  <img src="./yoda.gif" alt="yoda"></img>
                </div>
              </Link>

              <div className="rightArrow">
                <i className="fa-regular fa-circle-right fa-shake"></i>
              </div>
            </div>
          </div>
          <div className="audio-container">
            <audio src="./starwars.mp3" controls autoplay/>
          </div>
    </>
  )
}

export default Index

