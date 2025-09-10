import { Route, Routes } from 'react-router-dom'
import ScoresProvider from './contexts/ScoresContext'
import AboutMePage from './pages/AboutMePage'
import ContactPage from './pages/ContactPage'
import LeaderPage from './pages/LeaderPage'

interface Props {}

export default function App({}: Props) {

  return (
    <ScoresProvider>
      <main>
        <Routes>
          <Route path="/" element={<AboutMePage />} />
          <Route path="/leader" element={<LeaderPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </main>
    </ScoresProvider>
  )
}
