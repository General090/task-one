import react from 'react'
import Profile from './assets/Profile.jpg'
import ProfileCard from './components/ProfileCard'

function App() {
  return (
    <>
     <ProfileCard img={Profile} heading={"Gospel Onuoha"} bio={"I am a Front-End Developer with a passion for building web applications. I'm always learning and experimenting with new technology, so I'm passionate about everything the web can do."} />
    </>
  )
}

export default App
