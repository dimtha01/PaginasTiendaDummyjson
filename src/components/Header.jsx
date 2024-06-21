import { Link, useNavigate } from "react-router-dom"
import FiltroCategorias from "./FiltroCategorias"
import { useEffect, useState } from "react";
import logo from '../assets/logo.jpg';
import { CartFill } from "react-bootstrap-icons";
import Swal from "sweetalert2";
import MostrarCarrito from "./MostrarCarrito";

const Header = ({ carrito, setCarrito }) => {
    const [inputValue, setInputValue] = useState('');
    const handleChange = (event) => {
        setInputValue(event.target.value);
        //console.log(inputValue)
    };

    const navigate = useNavigate();
    const handleSubmit = (event) => {
        event.preventDefault();
        navigate('/buscar', {
            state: inputValue,
        });

    };
    const [total, setTotal] = useState(0)
    useEffect(() => {
        setTotal(carrito.length)
    }, [carrito]);

    const formatearMoneda = (valor) => {
        const resultado = valor.toLocaleString("es", {
            style: "currency",
            currency: "USD",
            useGrouping: true,
        });

        return resultado.replace("US$", "");
    };
    const verCarrito = () => {
        let totalCantidad = 0;
        let totalPrecio = 0;

        const carritoTabla = carrito.map((item) => {
            const subtotal = item.price * item.cant;
            totalCantidad += item.cant;
            totalPrecio += subtotal;

            const precioFormateado = formatearMoneda(item.price);
            const subtotalFormateado = formatearMoneda(subtotal);

            return `
            <tr>
            <td><img src="${item.thumbnail}" alt="" class="imgCarrito"/> </td>
            <td>${item.title}</td>
            <td>${item.cant.toLocaleString("es", { useGrouping: true })}</td>
            <td>${precioFormateado}</td>
            <td>${subtotalFormateado}</td>
            </tr>
        `;
        }).join("");

        const totalPrecioFormateado = formatearMoneda(totalPrecio);

        const tablaHTML = `
        <div class="text-center">
            <table class="table table-striped table-bordered table-hover table-sm tablaCarrito" >
            <thead class="table-dark">
                <tr>
                <th>Imagen</th>
                <th>Título</th>
                <th>Cantidad</th>
                <th>Precio</th>
                <th>Total</th>
                </tr>
            </thead>
            <tbody>
                ${carritoTabla}
                <tr>
                <td colspan="2"></td>
                <td>${totalCantidad.toLocaleString("es", { useGrouping: true })}</td>
                <td></td>
                <td>${totalPrecioFormateado}</td>
                </tr>
            </tbody>
            </table>
        </div>
        `;

        Swal.fire({
            position: "top-center",
            title: "Carrito",
            html: tablaHTML,
            width: "1440px", // Establece el ancho deseado aquí
        });
    }
    return (
        <>
            <nav className="navbar navbar-expand-lg bg-header">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#"><img src={logo} alt="" width={80} /></a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link to="/" className="nav-link active" aria-current="page" href="#">Inicio</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/tienda" className="nav-link" href="#">Tienda</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/laptop" className="nav-link" href="#">Laptop</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/movil" className="nav-link" href="#">Movil</Link>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Categorias
                                </a>
                                <ul className="dropdown-menu">
                                    <FiltroCategorias />
                                </ul>
                            </li>
                            <li className="nav-item">
                                <Link to="/contacto" className="nav-link" href="#">Contacto</Link>
                            </li>
                            <li className="nav-item">
                                <button className='btn btn-outline-warning me-2 position-relative' onClick={() => verCarrito()}>  <CartFill size={25} /> {total !== 0 && (<span className="position-absolute top-0 start-100 translate-middle badge text-dark rounded-pill bg-light">{total}</span>)}</button>
                                <button className="btn btn-outline-light position-relative" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasWithBothOptions" aria-controls="offcanvasWithBothOptions"><CartFill size={25} /> {total !== 0 && (<span className="position-absolute top-0 start-100 translate-middle badge text-dark rounded-pill bg-warning">{total}</span>)}</button>

                            </li>
                        </ul>
                        <form className="d-flex" role="search" onSubmit={handleSubmit}>
                            <input value={inputValue} onChange={handleChange} className="form-control me-2" type="search" placeholder="Buscar" aria-label="Search" />
                            <button className="btn btn-outline-light" type="submit">Buscar</button>
                        </form>
                    </div>
                </div>
            </nav>
            <MostrarCarrito />
        </>
    )
}

export default Header