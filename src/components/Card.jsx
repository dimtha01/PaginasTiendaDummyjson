

const Card = ({ item }) => {


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
                        <h5 className="text-danger">{item.price.toFixed(0).toLocaleString()}$</h5>
                    </div>
                    <div className="card-footer text-center">
                        <button type="button" class="btn btn-outline-success" data-bs-toggle="modal" data-bs-target={`#${item.id}`}>
                            Detalles
                        </button>
                    </div>
                </div>
            </div>
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
                                    <img src={item.thumbnail} alt={item.title} className="img-fluid img-thumbnail" />
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

export default Card