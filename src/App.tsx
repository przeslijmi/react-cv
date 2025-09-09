import { Route, Routes } from 'react-router-dom'
import ScoresProvider from './frame/contexts/ScoresContext'
import HomePage from './frame/pages/HomePage'
import ContactPage from './frame/pages/ContactPage'

interface Props {}

export default function App({}: Props) {

  return (
    <ScoresProvider>
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </main>
    </ScoresProvider>
  )
}
