import heroImg1 from '../assets/heroinicio01.png'
import heroImg2 from '../assets/heroinicio02.jpg'
import heroImg3 from '../assets/heroinicio03.jpg'
// 

const Hero = () => {
    return (
        <>
            <div className="container my-4">
                <div className="row">
                    <div className="col-md-6">
                        <p><span className="fw-bold h4">React es una biblioteca de JavaScript para crear interfaces de usuario </span> Fue desarrollado por Facebook en 2013 y se utiliza para crear interfaces de usuario interactivas y eficientes para aplicaciones web y móviles. A diferencia de un marco, React es específicamente responsable de representar la capa de vista de una aplicación y no es una solución completa como Angular o Vue. React permite a los desarrolladores crear interfaces de usuario a partir de piezas individuales llamadas componentes, que se pueden combinar en pantallas, páginas y aplicaciones completas.</p>
                        <p>React permite crear proyectos legibles, limpios y fáciles de mantener en cuestión de minutos. Esto es especialmente beneficioso para los desarrolladores</p>
                        <div className="text-center py-3"> <a href="https://es.react.dev/" target="_blank" className="btn btn-outline-info">Ir a la web oficial de React </a> </div>
                    </div>
                    <div className="col-md-6"><img src={heroImg1} alt className="img-fluid img-thumbnail" /></div>
                </div>
                <hr className="my-5" />
                <div className="row">
                    <div className="col-md-6 order-2">
                        <p><span className="fw-bold h4">DummyJSON es una herramienta que proporciona una API REST falsa de datos JSON</span> para el desarrollo, pruebas y prototipos. Con DummyJSON, puedes obtener rápidamente datos realistas para tus proyectos de front-end
                            sin tener que configurar un servidor complicado. Es perfecto para el desarrollo de front-end, la enseñanza, las pruebas y la creación de prototipos. Puedes explorar la documentación detallada en DummyJSON/Docs para obtener ejemplos rápidos.</p>
                        <div className="text-center py-3"> <a href="https://dummyjson.com/" target="_blank" className="btn btn-outline-light">Ir a la web oficial de DummyJSON </a> </div>
                    </div>
                    <div className="col-md-6"> <img src={heroImg2} alt className="img-fluid img-thumbnail" /> </div>
                </div>
                <hr className="my-5" />
                <div className="row">
                    <div className="col-md-6 ">
                        <p><span className="fw-bold h4">Bootstrap es un framework de desarrollo web gratuito y de código abierto que facilita el proceso de creación de sitios web responsivos y orientados a dispositivos móviles. </span> Proporciona una colección de sintaxis
                            para diseños de plantillas y estilos para una amplia variedad de componentes y elementos de interfaz. Bootstrap es ampliamente utilizado debido a su facilidad de uso, su estructura de archivos sencilla y su capacidad para adaptarse a diferentes
                            tamaños de pantalla. Permite a los desarrolladores y diseñadores web crear sitios web de manera eficiente y garantiza que los elementos de la interfaz funcionen de manera óptima en todos los dispositivos.</p>
                        <div className="text-center py-3">
                            <a href="https://getbootstrap.com/docs/5.3/getting-started/introduction/" target="_blank" className="btn btn-outline-warning">Ir a la web oficial de Bootstrap </a> </div>
                    </div>
                    <div className="col-md-6"> <img src={heroImg3} alt className="img-fluid img-thumbnail" /> </div>
                </div>
            </div>

        </>
    )
}

export default Hero