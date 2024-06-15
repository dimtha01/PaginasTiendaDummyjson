import { useEffect, useState } from "react"
import { Cart, CartFill, DashCircle, PlusSquare } from "react-bootstrap-icons"
import Swal from "sweetalert2";


const Modal = ({ item, carrito1, setCarrito1 }) => {
    console.log("Carrito load")
    console.log(carrito1)
    const [cantidad, setCantidad] = useState(1)
    function disminuirCant() {
        if (cantidad > 0) {
            setCantidad((cantidad) => cantidad - 1)
        }
    }
    function sumarCant() {
        setCantidad((cantidad) => cantidad + 1)
    }
    useEffect(() => {
        setCantidad(1)
    }, [])

    function mostrarMensage(titulo, texto) {
        Swal.fire({
            title: titulo,
            text: texto,
            icon: "success",
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
        console.log("Carrito 1")
        console.log(carrito1)
        const prod = item;
        prod["cant"] = cantidad;
        // Verificar si el item ya está en el carrito1
        const productoExistenteIndex = carrito1.findIndex((item) => item.id === prod.id);
        if (productoExistenteIndex !== -1) {
            // Si el item ya existe, reemplazarlo en el carrito1
            const carrito1Actualizado = [...carrito1];
            carrito1Actualizado[productoExistenteIndex] = prod;
            setCarrito1(carrito1Actualizado);
            mostrarMensage("¡Actualizado!", "item actualizado en el carrito1");
        } else {
            // Si el item no existe, agregarlo al carrito1
            setCarrito1([...carrito1, prod]);
            mostrarMensage("¡Agregado!", "item agregado al carrito1");
        }
    };
    const verCarrito = () => {
        let totalCantidad = 0;
        let totalPrecio = 0;

        const carritoTabla = carrito1.map((producto) => {
            const subtotal = producto.price * producto.cant;
            totalCantidad += producto.cant;
            totalPrecio += subtotal;

            const precioFormateado = formatearMoneda(producto.price);
            const subtotalFormateado = formatearMoneda(subtotal);

            return `
            <tr>
                <td><img src="${producto.thumbnail}" width=${100} alt="" class="imgCarrito"/> </td>
                <td>${producto.title}</td>
                <td>${producto.cant.toLocaleString("es", { useGrouping: true })}</td>
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
            theme: 'dark',
        });
    }



    return (
        <>
            <div class="modal fade" id="exampleModal" id={item.id} tabindex="-1" aria-hidden="true">
                <div class="modal-dialog modal-xl" >
                    <div class="modal-content">
                        <div class="modal-header">
                            <h1 class="modal-title fs-5" id="exampleModalLabel">Detalle de {item.title}</h1>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            <div className='row'>
                                <div className='col-md-6'>
                                    <img src={item.thumbnail} alt={item.title} width={700} className="img-fluid img-thumbnail" />
                                </div>
                                <div className='col-md-6'>
                                    <h3>{item.title}</h3>

                                    <p className="lead">
                                        <b>Marca: </b>{item.brand}
                                        <br /><b>Categoria: </b>{item.category}
                                        <br /><b>Stock: </b>{item.stock}
                                        <br /><b>Clasificación: </b>{item.rating}
                                    </p>
                                    <p className='lead small'><b>Descripción: </b>{item.description}</p>

                                    <h3 className="text-danger"><b>Precio: </b>{item.price.toFixed(0).toLocaleString()}$</h3>
                                    <h5>Comprar</h5>
                                    <div className='d-flex'>
                                        <h5 className='text-danger pt-1'><b>Cantidad : </b> </h5>
                                        <div className='d-flex justify-content-center mx-3 border-3 ' >
                                            <p className='p-1' type="button" onClick={() => disminuirCant()}>
                                                <DashCircle color="red" size={20} />
                                            </p>
                                            <h4 className='p-1'>{cantidad}</h4>
                                            <p className='p-1' type="button" onClick={() => sumarCant()}>
                                                <PlusSquare color="green" size={20} />
                                            </p>
                                        </div>
                                    </div>
                                    <button className='btn btn-danger me-2' onClick={() => onAddProduct(item)}>  <CartFill size={30} /> Agregar al carrito1</button>
                                    <button className='btn btn-info me-2'   onClick={() =>  verCarrito() }>  <CartFill  size={30} /> Ver Carrito</button> 




                                </div>
                            </div>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-outline-danger" data-bs-dismiss="modal">Close</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Modal