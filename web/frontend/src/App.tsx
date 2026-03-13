import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'

// Pages
import Home from './pages/Home'
import Dashboard from './pages/Dashboard'
import CharacterExplorer from './pages/CharacterExplorer'
import Lessons from './pages/Lessons'
import LessonViewer from './pages/LessonViewer'
import LoreArchive from './pages/LoreArchive'
import NetworkMap from './pages/NetworkMap'

// Layout
import AppLayout from './components/AppLayout'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Public landing page — no sidebar */}
        <Route path="/" element={<Home />} />

        {/* App routes — wrapped in sidebar layout */}
        <Route element={<AppLayout />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/characters" element={<CharacterExplorer />} />
          <Route path="/lessons" element={<Lessons />} />
          <Route path="/lessons/:trackId/:lessonId" element={<LessonViewer />} />
          <Route path="/lore" element={<LoreArchive />} />
          <Route path="/network" element={<NetworkMap />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
