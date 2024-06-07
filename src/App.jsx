import { BrowserRouter, Route, Routes } from "react-router-dom"
import Header from "./components/Header"
import Inicio from "./page/Inicio"
import Error404 from "./page/Error404"
import Footer from "./components/Footer"
import Tienda from "./page/Tienda"
import Laptop from "./page/Laptop"
import Movil from "./page/Movil"
import Contacto from "./page/Contacto"
import Categorias from "./page/Categorias"
import Buscar from "./page/Buscar"

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Header/>
        <Routes>
          <Route path="/" element={<Inicio/>}/>
          <Route path="/tienda" element={<Tienda/>}/>
          <Route path="/laptop" element={<Laptop/>}/>
          <Route path="/movil" element={<Movil/>}/>
          <Route path="/contacto" element={<Contacto/>}/>
          <Route path="/categorias/:id" element={<Categorias/>}/>
          <Route path="/buscar" element={<Buscar />} />
          <Route path="*" element={<Error404/>}/>
        </Routes>
        <Footer/>
      </BrowserRouter>
    </>
  )
}

export default App