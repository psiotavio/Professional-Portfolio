import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { ThemeProvider } from './contexts/ThemeContext'
import { LanguageProvider } from './contexts/LanguageContext'
import V1 from './pages/V1'
import V2 from './pages/V2'
import './index.css'

export default function App() {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <BrowserRouter>
          <Routes>
            {/* <Route path="/" element={<V1 />} /> */}
            <Route path="/" element={<V2 />} />
            <Route path="/v1" element={<V1 />} />
          </Routes>
        </BrowserRouter>
      </LanguageProvider>
    </ThemeProvider>
  )
}
