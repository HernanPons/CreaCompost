import React from 'react'
import './Instituciones.css'

const Instituciones = () => {
  return (
    <div>
        <div className='tituloInstituciones'>
            <h1 className='text-green'>creacompost</h1>
            <h1 className='text-green2'>creaverde</h1>
        </div>
        
        <div className='institucionesContainer'>
            <img className='fotoInstituciones' src="/Images/ServicioInstituciones.png" alt="" />
            <h3 className='institucionesText'><a href="https://wa.me/+5493513063528" target="_blank" className='whatsappLink'> Para más info sobre nuestros servicios escribinos! </a></h3>
        </div>

        <div className='institucionesTextContainer'>

            <div className='textSistemas'>
                <h2>Sistemas de <br /> compostaje</h2>
            </div>
            <div className='textSistemas sansLight text-gris'>
                <ul>
                    <li>
                    Proveemos productos para compostar, de diferentes características, para brindar la solución más práctica, teniendo en cuenta las 
                    necesidades propias de cada institución.
                    </li>
                </ul>
            </div>

            <div className='textDiseño'>
                <h2>Diseño</h2>
            </div>
            <div className='textDiseño sansLight text-gris'>
                <ul>
                    <li>Diseño, ejecución y mantenimiento de espacios de compostaje.</li>
                    <li>Diseño de espacios verdes, huertas y jardines, buscando la sustentabilidad y regeneracion de ecosistemas.</li>

                </ul>
            </div> 

            <div className='textTalleres'>
                <h2>Talleres</h2>
            </div>
            <div className='sansLight text-gris textTalleres'>
                <span>
                    Brindamos capacitaciones a los integrantes de instituciones 
                    comprometidas con la sustentabilidad, adaptadas a sus necesidades. 
                <br /> <br />
                    Las temáticas que abordamos son:
                    <ul>
                        <li>Problemática de residuos</li>
                        <li>Compostaje</li>
                        <li>Huerta agroecológica.</li>
                    </ul>
                </span>
            </div> 

            
            <div className='textComunicacion'>
            <h2>Comunicación</h2>
            </div>
            <div className='textComunicacion sansLight text-gris'>
                <ul>
                    <li>
                        Interna y externa para generar sensibilización sobre el compromiso ambiental.
                    </li>
                    <li>
                        Campañas informativas para escuelas dirigida a estudiantes y padres, y estrategias de comunicación interna para empleados en empresas.
                    </li>
                    <li>
                        El diseño de una estrategia de comunicación institucional es clave para concientizar sobre la importancia de la gestión de residuos. 
                    </li>
                </ul>
            </div>
        </div>


    </div>
  )
}

export default Instituciones