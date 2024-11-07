import React from 'react'
import './Nosotras.css'

const Nosotras = () => {
  return (
    <div>  

        <div>
            <h1>Nosotras</h1>
            <h3>
                ¡Hola! Somos Cecilia Guzmán Poupard y Mariela Ciarapica, dos primas que compartimos el amor por la naturaleza. Creemos que nuestras infancias estuvieron muy influenciadas por uno de nuestros abuelos, que era bioquímico, amaba las plantas y los minerales, tenía su huerta y compostaba.
            </h3>
            <br />
            <h3>
                Evidenciaba una gran comprensión de los ciclos vitales, los elementos de la tabla periódica que forman todo lo que nos rodea y sus transformaciones.
            </h3>
        </div>

        <div className='quienesContainer' id='quienes-somos'>
            <div className='primerTexto'>
                <h1 className='text-gray'>Somos</h1>
                <h1 className='text-green'>creacompost</h1>
                <h1 className='text-green2'>creaverde</h1>
                <br />
                <h3>Somos una empresa que entiende a la naturaleza como una  economía circular, donde el concepto de basura prácticamente no existe.</h3>
            </div>

            <div className='segundoTexto'>
                <br />
                <h1 className='text-green'>Nuestros</h1>
                <h1 className='text-green2'>servicios</h1>
                <br />
                <h3>Elegí los programas de formación ambiental, productos sustentables, experiencias de compostaje y huertas agroecológicas que se adapten a tus necesidades.</h3>
            </div>
        </div>
    </div>
  )
}

export default Nosotras