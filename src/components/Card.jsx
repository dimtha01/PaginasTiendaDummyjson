import Modal from "./Modal"


const Card = ({ item, carrito, setCarrito }) => {
    const total = item.length;


    return (
        <>
            <div className="col-6 col-md-4 col-lg-3 col-xl-2 mb-4 position-relative" >
            {total !== 0 && (<span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-light text-dark">
                    {total}
                </span>)}
                <div className="card h-100">
                    <div className="card-header p-0">
                        <img src={item.thumbnail || item.images[1]} className="img-fluid" alt="..." />
                    </div>
                    <div className="card-body text-center">
                        <h5>{item.title}</h5>
                        <p className="text-success">{item.brand}</p>
                        <h5 className="text-danger">{item.price}$</h5>
                    </div>
                    <div className="card-footer text-center">
                        <button type="button" class="btn btn-outline-light" data-bs-toggle="modal" data-bs-target={`#${item.id}`}>
                            Detalles
                        </button>
                    </div>
                </div>
            </div>
            <Modal key={item.id} item={item} carrito={carrito} setCarrito={setCarrito} />
        </>
    )
}

export default Card