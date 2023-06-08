import { useState, useEffect } from 'react'

function App() {
  const [currentIndex, setCurrentIndex] = useState(0)

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

  return (
    <>
      <h1 id="header">StarWars</h1>

      <h3 id="characterName">Character Name</h3>

      <div className="characterLogoContainer">
        <div className="arrowKeys">
          <div className="leftArrow">
            <i className="fa-regular fa-circle-left fa-shake"></i>
          </div>

          <div className="characterLogo Active" id="box1">
            Box 1
          </div>
          <div className="characterLogo" id="box2">
            Box 2
          </div>
          <div className="characterLogo" id="box3">
            Box 3
          </div>
          <div className="characterLogo" id="box4">
            Box 4
          </div>

          <div className="rightArrow">
            <i className="fa-regular fa-circle-right fa-shake"></i>
          </div>
        </div>
      </div>
      
    </>
  )
}

export default App

