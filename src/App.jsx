import { HashRouter, Routes, Route } from 'react-router-dom'
import HomePage from './components/HomePage'  
import OurStory from './components/OurStory'
import OurServices from './components/OurServices'
import WhoWeAre from './components/WhoWeAre'

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/"              element={<HomePage />} />
        <Route path="/our-story"     element={<OurStory />} />
        <Route path="/our-services"  element={<OurServices />} />
        <Route path="/who-we-are"    element={<WhoWeAre />} />
      </Routes>
    </HashRouter>
  )
}

export default App