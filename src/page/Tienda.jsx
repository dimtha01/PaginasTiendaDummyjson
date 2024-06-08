import { useEffect, useState } from "react";
import Card from "../components/Card";
import Boton from "../components/Boton";
import Paginador from "../components/Paginador";
const API = 'https://dummyjson.com/products?limit=20&skip=';

const Tienda = () => {
    const [datos, setDatos] = useState([])
    const [skip, setSkip] = useState(0);
    const [total, setTotal] = useState(0);
    const getDatos = async () => {
        const URI = API + skip
        try {
            const response = await fetch(URI);
            const data = await response.json();
            console.log(data)
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
                <h1 className="text-center py-3 lead display-6">Todos los Productos <span class="badge rounded-pill text-bg-danger">{datos.length}</span></h1>
                <Boton />
                <div className="row">
                    {datos && datos.map((item) => (

                        <Card key={item.id} item={item} />
                    ))}
                    <div className="d-flex justify-content-evenly align-content-center  text-black mb-3 p-2 alert alert-dark">
                        <p className="lead m-0 text-light">Pagina {Math.floor(skip / 20) + 1} de {Math.ceil(total / 20)}</p>
                        <nav aria-label="Page navigation example">
                            <ul className="pagination m-0">
                                <li className="page-item">
                                    <a className="page-link" href="#"
                                        onClick={() => {
                                            if (skip >= 20) {
                                                setSkip(skip - 20);
                                            }
                                        }}
                                    >
                                        &lt;&lt;
                                    </a>
                                </li>
                                <li className="page-item">
                                    <a className="page-link" href="#">
                                        {Math.floor(skip / 20) + 1}
                                    </a>
                                </li>
                                <li className="page-item">
                                    <a className="page-link" href="#"
                                        onClick={() => {
                                            if (skip + 20 < total) {
                                                setSkip(skip + 20);
                                            }
                                        }}
                                    >
                                        &gt;&gt;
                                    </a>
                                </li>
                            </ul>
                        </nav>

                    </div>
                </div>

            </div>
        </>
    )
}

export default Tienda