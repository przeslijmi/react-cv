import { Route, Routes } from 'react-router-dom'
import ScoresProvider from './contexts/ScoresContext'
import HomePage from './pages/HomePage'
import ContactPage from './pages/ContactPage'
import MotivationPage from './pages/MotivationPage'

interface Props {}

export default function App({}: Props) {

  return (
    <ScoresProvider>
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/motivation" element={<MotivationPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </main>
    </ScoresProvider>
  )
}
