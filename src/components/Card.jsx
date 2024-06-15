import Modal from "./Modal"


const Card = ({ item, carrito1, setCarrito1 }) => {
console.log("desde el card")
console.log(carrito1)
    return (
        <>
            <div className="col-6 col-md-4 col-lg-3 col-xl-2 mb-4" >
                <div className="card h-100">
                    <div className="card-header p-0">
                        <img src={item.thumbnail} className="img-fluid" alt="..." />
                    </div>
                    <div className="card-body text-center">
                        <h5>{item.title}</h5>
                        <p className="text-success">{item.brand}</p>
                        <h5 className="text-danger">{item.price}$</h5>
                    </div>
                    <div className="card-footer text-center">
                        <button type="button" class="btn btn-outline-success" data-bs-toggle="modal" data-bs-target={`#${item.id}`}>
                            Detalles
                        </button>
                    </div>
                </div>
            </div>
            <Modal key={item} item={item} carrito1={carrito1} setCarrito1={setCarrito1} />



        </>
    )
}

export default Card