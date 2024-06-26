import Card from "../components/Card";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import Boton from "../components/Boton";
const API = 'https://dummyjson.com/products/category/';

const Categorias = ({carrito, setCarrito}) => {
  const params = useParams()
  const [datos, setDatos] = useState([])

  const getDatos = async () => {
    let URI = API + params.id
    try {

      const response = await fetch(URI);
      const data = await response.json();
      //console.log(data)
      setDatos(data.products);
    } catch (error) {
      console.error(error)
    }
  };


  useEffect(() => {
    getDatos();
  }, [params.id]);
  return (
    <>
      <div className="container">
      <h1 className="text-center py-3 lead display-6 text-dark">{params.id} <span class="badge rounded-pill text-bg-dark text-light">{datos.length}</span></h1>
      <Boton />
        <div className="row">
          {datos && datos.map((item) => (
            <Card key={item.id} item={item} carrito={carrito} setCarrito={setCarrito} />
          ))}
        </div>
        
      </div>
    </>
  )
}

export default Categorias