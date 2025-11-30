import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import { Home } from "./features/home"
import { About } from "./features/about"
import { Projects } from "./features/projects"
import { Contact } from "./features/contact"

import { Layout } from "./components/layout/Layout"

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Navigate to="/home" replace />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
