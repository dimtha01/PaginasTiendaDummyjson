import logo from "../assets/logo.jpg"
const Formulario = () => {
    return (
        <>
            <section className="py-5">
                <div className="container text-dark">
                    <div className="row">
                        <div className="col-md-6">
                            <img src={logo} className="img-fluid" width={800} alt="Imagen de la empresa" />
                        </div>
                        <div className="col-md-6">
                            <div className="row justify-content-center">
                                <div className="col-md-8 border border-dark rounded">
                                    <h2 className="text-center mb-4">Contacto</h2>
                                    <form>
                                        <div className="form-group">
                                            <label htmlFor="nombre">Nombre</label>
                                            <input type="text" className="form-control" id="nombre" placeholder="Ingrese su nombre" />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="email">Email</label>
                                            <input type="email" className="form-control" id="email" placeholder="Ingrese su email" />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="mensaje">Mensaje</label>
                                            <textarea className="form-control" id="mensaje" rows={3} placeholder="Ingrese su mensaje" defaultValue={""} />
                                        </div>
                                        <button type="submit" className="btn btn-outline-dark my-3">Enviar</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


        </>
    )
}

export default Formulario