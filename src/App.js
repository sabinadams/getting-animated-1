import React from 'react'
import './App.css'

import ProfileCard from './components/ProfileCard'
import ProfileCards from './components/ProfileCards'


// Testing Files
import AnimatedDiv from './components/AnimatedDiv'
import UnanimatedCard from './components/UnanimatedCard'

function App() {
  return (
    <div className="App">
      {/* <UnanimatedCard/> */}
      <ProfileCard/>
      {/* <ProfileCards/> */}
      {/* <AnimatedDiv/> */}
    </div>
  )
}

export default App
