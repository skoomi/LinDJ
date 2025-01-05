import { useState } from 'react'

import './App.css'
import Navbar from './components/Navbar'
import Playlists from './components/Playlists'
import Source from './components/Source'
import Target from './components/Target'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <div className='flex'>
      <Playlists />
      <Source />
      <Target />
      </div>
    </>
  )
}

export default App
