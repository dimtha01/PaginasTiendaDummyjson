import { useEffect, useState } from "react";
import Card from "../components/Card";
const API = 'https://dummyjson.com/products/category/laptops';
const Laptop = ({carrito, setCarrito}) => {
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
            <h1 className="text-center py-3 lead display-6 text-dark">Todos los Laptops <span class="badge rounded-pill text-bg-dark text-light">{datos.length}</span></h1>
            <div className="row">
                    {datos && datos.map((item) => (
                        <Card key={item.id} item={item} carrito={carrito} setCarrito={setCarrito} />
                    ))}
                </div>
            </div>
        </>
    )
}

export default Laptop