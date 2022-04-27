import "./App.scss"
import { Route, Routes } from "react-router-dom"
import Layaut from "./components/Layaut/Layaut"
import Home from "./components/Home/Home"
import SobreMi from "./components/SobreMi/SobreMi"
import Contact from "./components/Contact/Contact"
import Portfolio from "./components/Prortfolio/Portfolio"

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layaut />}>
          <Route index element={<Home />} />
          <Route path="proyectos" element={<Portfolio />} />
          <Route path="sobre-mi" element={<SobreMi />} />
          <Route path="contacto" element={<Contact />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
