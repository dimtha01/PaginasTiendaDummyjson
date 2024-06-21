import React, { useEffect, useState } from 'react'

import { useLocation } from 'react-router-dom';
import Card from '../components/Card';
const API = 'https://dummyjson.com/products/search?q=';

const Buscar = ({carrito, setCarrito}) => {
  const [datos, setDatos] = useState([])
  const location = useLocation();
  const valueSearch = location.state;
  const URI = API + valueSearch;
  const getDatos = async () => {
    try {
      const response = await fetch(URI);
      const data = await response.json();
      console.log(data)
      setDatos(data.products);
    } catch (error) {
      console.error(error)
    }
  };
  useEffect(() => {
    getDatos();
  }, [valueSearch]);
  return (
    <>
      <h3 className='text-center'>Buscar {valueSearch}</h3>
      <div className="container">
        <h1 className="text-center py-3 lead display-6">Todos los Productos <span class="badge rounded-pill text-bg-danger">{datos.length}</span></h1>
        <div className="row">
          {datos && datos.map((item) => (
            <Card key={item.id} item={item} carrito={carrito} setCarrito={setCarrito} />
          ))}
        </div>
      </div>

    </>
  )
}

export default Buscar