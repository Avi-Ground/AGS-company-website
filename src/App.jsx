import { HashRouter, Routes, Route } from 'react-router-dom' 
import HeroSection from './components/HeroSection'
import AboutSection from './components/AboutSection'
import ServicesSection from './components/ServicesSection'
import EdgeSection from './components/EdgeSection'
import NewsSection from './components/NewsSection'
import Footer from './components/Footer'
import OurStory from './components/OurStory'
import OurServices from './components/OurServices'
// inside <Routes>

// Placeholder pages — replace content later
function PageTemplate({ title }) {
  return (
    <div style={{ padding: '80px 48px', minHeight: '60vh', fontFamily: 'Montserrat, sans-serif' }}>
      <h1 style={{ color: '#003087', fontSize: '32px' }}>{title}</h1>
      <p style={{ marginTop: '16px', color: '#555' }}>This page is coming soon.</p>
      <a href="/" style={{ display: 'inline-block', marginTop: '24px', color: '#C8102E', fontWeight: 600 }}>← Back to Home</a>
    </div>
  )
}

function Home() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <EdgeSection />
      <NewsSection />
      <Footer />
    </>
  )
}

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/"                    element={<Home />} />
       <Route path="/our-story"            element={<OurStory />} />
       <Route path="/our-services"          element={<OurServices />} />  
        <Route path="/mission-vision"      element={<PageTemplate title="Our Mission & Vision" />} />
        <Route path="/our-values"          element={<PageTemplate title="Our Values" />} />
        <Route path="/our-people"          element={<PageTemplate title="Our People" />} />
        <Route path="/code-of-conduct"     element={<PageTemplate title="Business Code of Conduct" />} />
        <Route path="/community"           element={<PageTemplate title="Community & Wellbeing" />} />
        <Route path="/service-commitments" element={<PageTemplate title="Service Commitments" />} />
        <Route path="/policies"            element={<PageTemplate title="Business Policies & Practices" />} />
      </Routes>
    </HashRouter>
  )
}

export default App