import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomePage from './components/HomePage'  
import OurStory from './components/OurStory'
import OurServices from './components/OurServices'
import WhoWeAre from './components/WhoWeAre'
import Sustainability from './components/Sustainability'
import Edge from './components/Edge'
import NewsMedia from './components/NewsMedia'
import Careers from './components/Careers'
import ContactUs from './components/ContactUs'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/"              element={<HomePage />} />
        <Route path="/our-story"     element={<OurStory />} />
        <Route path="/our-services"  element={<OurServices />} />
        <Route path="/who-we-are"    element={<WhoWeAre />} />
        <Route path="/sustainability" element={<Sustainability />} />
        <Route path="/edge"           element={<Edge />} />
        <Route path="/news-media"     element={<NewsMedia />} />
        <Route path="/careers"        element={<Careers />} />
        <Route path="/contact-us"     element={<ContactUs />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
