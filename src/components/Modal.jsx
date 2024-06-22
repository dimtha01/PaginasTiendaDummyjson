import React, { useEffect, useState } from 'react'
import { CartFill, DashCircleFill, PlusSquareFill } from 'react-bootstrap-icons'
import Swal from 'sweetalert2'


const Modal = ({ item, carrito, setCarrito }) => {
    const [cantidad, setCantidad] = useState(1)
    function disminuirCant() {
        if (cantidad > 0) {
            setCantidad((cantidad) => cantidad - 1)
        }
    }
    function sumarCant() {
        if (item.stock > cantidad)
            setCantidad((cantidad) => cantidad + 1)
    }
    useEffect(() => {
        setCantidad(1)
    }, [])

    function mostrarMensage(titulo, texto) {
        Swal.fire({
            title: titulo,
            text: texto,
            icon: "success"
        });
    }
    const formatearMoneda = (valor) => {
        const resultado = valor.toLocaleString("es", {
            style: "currency",
            currency: "USD",
            useGrouping: true,
        });

        return resultado.replace("US$", "");
    };
    /* en este caso si el item esta lo sustituye */
    const onAddProduct = (item) => {
        const prod = item;
        prod["cant"] = cantidad;
        // Verificar si el item ya está en el carrito
        const itemExistenteIndex = carrito.findIndex((item) => item.id === prod.id);
        if (itemExistenteIndex !== -1) {
            // Si el item ya existe, reemplazarlo en el carrito
            const carritoActualizado = [...carrito];
            carritoActualizado[itemExistenteIndex] = prod;
            setCarrito(carritoActualizado);
            mostrarMensage("¡Actualizado!", "item actualizado en el carrito");
        } else {
            // Si el item no existe, agregarlo al carrito
            setCarrito([...carrito, prod]);
            mostrarMensage("¡Agregado!", "item agregado al carrito");
        }
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
            <td>${precioFormateado}$</td>
            <td>${subtotalFormateado}$</td>
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
            <td>${totalPrecioFormateado}$</td>
           
            </tr>
        </tbody>
        </table>
    </div>
    `;

        Swal.fire({
            position: "top-center",
            title: "Carrito",
            html: tablaHTML,
            width: '1200px',
        });
    }

    return (
        <>
            <div className="modal fade" id={item.id} tabIndex={-1} aria-hidden="true">
                <div className="modal-dialog modal-xl">
                    <div className="modal-content">
                        <div className="modal-header bg-dark text-light">
                            <h5 className="modal-title fs-5 text-center" id="exampleModalLabel">Detalle de {item.title}</h5>
                            <button type="button" className="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Close" />
                        </div>
                        <div className="modal-body">
                            <div className="row">
                                <div className="col-md-6">
                                    <img src={item.images[2] || item.images[1] || item.images[0]} alt={item.title} width={720} className="img-fluid img-thumbnail rounded" />
                                </div>
                                <div className="col-md-6">
                                    <h2>{item.title}</h2>
                                    <p className="lead">
                                        <b>Marca:</b> {item.bran}<br />
                                        <b>Categoría:</b> {item.category}<br />
                                        <b>Stock:</b> {item.stock}<br />
                                        <b>Clasificación:</b> {item.rating}
                                    </p>
                                    <p className="lead small"><b>Descripción:</b> {item.description}</p>
                                    <h2 className="text-danger"><b className='text-success'>Precio:</b> {item.price}$</h2>
                                    <h5 className='text-success'>Comprar</h5>
                                    <div className='d-flex'>
                                        <h5 className='text-danger pt-1'><b>Cantidad : </b> </h5>
                                        <div className='d-flex justify-content-center mx-3 border-3 ' >
                                            <p className='p-1 text-light' type="button" onClick={() => disminuirCant()}>
                                                <DashCircleFill size={30} />
                                            </p>
                                            <h4 className='p-1'>{cantidad}</h4>
                                            <p className='p-1 text-warning' type="button" onClick={() => sumarCant()}>
                                                <PlusSquareFill size={30} />
                                            </p>
                                        </div>
                                    </div>
                                    <button className='btn btn-outline-warning me-2' onClick={() => onAddProduct(item)}>  <CartFill size={30} /> Agregar al Carrito</button>
                                    <button className='btn btn-outline-light me-2' onClick={() => verCarrito()}>  <CartFill size={30} /> Ver Carrito</button>
                                </div>
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-outline-secondary" data-bs-dismiss="modal">Cerrar</button>
                        </div>
                    </div>
                </div>
            </div>



        </>
    )
}

export default Modal