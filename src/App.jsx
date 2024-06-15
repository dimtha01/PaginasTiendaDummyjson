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
import { useState } from "react"

const App = () => {
  const [carrito1, setCarrito1] =useState([])
  return (
    <>
      <BrowserRouter>
        <Header carrito1={carrito1} setCarrito1={setCarrito1} />
        <Routes>
          <Route path="/PaginasTiendaDummyjson" element={<Inicio carrito1={carrito1} setCarrito1={setCarrito1} />} />
          <Route path="/tienda" element={<Tienda carrito1={carrito1} setCarrito1={setCarrito1} />} />
          <Route path="/laptop" element={<Laptop carrito1={carrito1} setCarrito1={setCarrito1} />} />
          <Route path="/movil" element={<Movil carrito1={carrito1} setCarrito1={setCarrito1} />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route path="/categorias/:id" element={<Categorias carrito1={carrito1} setCarrito1={setCarrito1} />} />
          <Route path="/buscar" element={<Buscar carrito1={carrito1} setCarrito1={setCarrito1} />} />
          <Route path="*" element={<Error404 carrito1={carrito1} setCarrito1={setCarrito1} />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App