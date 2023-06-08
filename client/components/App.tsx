import { useState, useEffect } from 'react'
import { getGreeting } from '../apiClient'

const App = () => {
  

  return (
    <>
      <h1 id="header">StarWars</h1>
    

        <h3 id="characterName">Character Name</h3>

   
            <div className="characterLogoContainer">
                <div className="characterLogo">Box 1</div>
                <div className="characterLogo">Box 2</div>
                <div className="characterLogo">Box 3</div>
                <div className="characterLogo">Box 4</div>
          </div>
          <div className="arrowKeys">
              <div className="leftArrow">
                <i className="fa-regular fa-circle-left fa-shake"></i>
              </div>
              <div className="rightArrow">
              <i className="fa-regular fa-circle-right fa-shake"></i>
              </div>
          </div>
         
    </>
  )
}

export default App
