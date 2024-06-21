import { useEffect, useState } from "react";
import Card from "../components/Card";
import Boton from "../components/Boton";
const API = "https://dummyjson.com/products?limit=10&skip=";

const Tienda = ({ carrito, setCarrito }) => {
    const [datos, setDatos] = useState([])
    const [skip, setSkip] = useState(0);
    const [total, setTotal] = useState(0);
    const getDatos = async () => {
        const URI = API + skip
        //console.log(URI)
        try {
            const response = await fetch(URI);
            const data = await response.json();
            //console.log(data)
            setDatos(data.products);
            setTotal(data.total)
        } catch (error) {
            console.error(error)
        }
    };
    useEffect(() => {
        getDatos();
    }, [skip]);
    return (
        <>
            <div className="container">
                <h1 className="text-center py-3 lead display-6 text-dark">Todos los Productos <span class="badge rounded-pill text-bg-dark text-light">{datos.length}</span></h1>
                <Boton />
                <div className="row">
                    {datos && datos.map((item) => (

                        <Card key={item.id} item={item} carrito={carrito} setCarrito={setCarrito} />
                    ))}
                </div>
                <nav className=" text-center">
                    <ul className="pagination m-0">
                        <li className="page-item">
                            <a className="page-link" href="#"
                                onClick={() => {
                                    if (skip >= 10) {
                                        setSkip(skip - 10);
                                    }
                                }}
                            >
                                &lt;&lt;
                            </a>
                        </li>
                        <li className="page-item">
                            <a className="page-link" href="#">
                                {Math.floor(skip / 10) + 1}
                            </a>
                        </li>
                        <li className="page-item">
                            <a className="page-link" href="#"
                                onClick={() => {
                                    if (skip + 10 < total) {
                                        setSkip(skip + 10);
                                    }
                                }}
                            >
                                &gt;&gt;
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
        </>
    )
}

export default Tienda