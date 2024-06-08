import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
const API = 'https://dummyjson.com/products/category-list';
const ruta = "/categorias/";

const Boton = () => {
    const [datos, setDatos] = useState([])
    const getDatos = async () => {
        try {
            const response = await fetch(API);
            const data = await response.json();
            //console.log(data)
            setDatos(data);
        } catch (error) {
            console.error(error)
        }
    };
    useEffect(() => {
        getDatos();
    }, []);
    return (
        <>
            <div className="d-flex flex-wrap justify-content-center m-4">
                {datos && datos.map((item, index) => (
                    <Link key={index} className="btn btn-outline-danger m-1" to={ruta + item} >{item}</Link>
                ))}
            </div>
        </>
    )
}

export default Boton