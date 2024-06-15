import { useEffect, useState } from "react";
import Card from "../components/Card";
const API = 'https://dummyjson.com/products/category/smartphones';
const Movil = ({ carrito1, setCarrito1 }) => {
    const [datos, setDatos] = useState([])
    const getDatos = async () => {
        try {
            const response = await fetch(API);
            const data = await response.json();
            console.log(data)
            setDatos(data.products);
        } catch (error) {
            console.error(error)
        }
    };
    useEffect(() => {
        getDatos();
    }, []);
    return (
        <>
            <div className="container">
                <h1 className="text-center py-3 lead display-6">Todos los Productos <span class="badge rounded-pill text-bg-danger">{datos.length}</span></h1>
                <div className="row">
                    {datos && datos.map((item) => (
                        <Card key={item.id} item={item} carrito1={carrito1} setCarrito1={setCarrito1} />
                    ))}
                </div>
            </div>
        </>
    )
}

export default Movil