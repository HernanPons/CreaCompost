import React from 'react'
import './Nosotras.css'

const Nosotras = () => {
  return (
    <div>
        <div className='nosotrasContainer'>  

            <div>
                <h1 className='tituloNosotras'>Nosotras</h1>
                <div className='textoNosotras text-gris sansLight'>
                    <h3>
                        ¡Hola! Somos Mariela Ciarapica y Cecilia Guzmán Poupard, dos primas que compartimos el amor por la naturaleza. Creemos que nuestras infancias estuvieron muy influenciadas por nuestro abuelo, que era bioquímico, amaba las plantas y los minerales, tenía su huerta y compostaba. Evidenciaba una gran comprensión de los ciclos vitales, los elementos de la tabla periódica que forman todo lo que nos rodea y sus transformaciones.
                    </h3>
                    <br />
                    <h3>
                        Evidenciaba una gran comprensión de los ciclos vitales, los elementos de la tabla periódica que forman todo lo que nos rodea y sus transformaciones.
                    </h3>
                </div>
            </div>
        </div>

<br /><br /><br />
        <div className='fotosContainer'>
            
                <div className='primerFoto'>
                    <h1 className='text-green textMaru'>Maru</h1>
                    <h2 className='text-green2 textMaru'>Arquitecta</h2>
                    <br />
                    <img className='fotoMaru' src="/Images/FotoMaru.png" alt="foto maru" />
                </div>

                <div className='segundaFoto'>
                    <h1 className='text-green textCeci'>Ceci</h1>
                    <h2 className='text-green2 textCeci'>Ing Agrónoma</h2>
                    <br />
                    <img className='fotoCeci' src="/Images/FotoCeci.png" alt="foto ceci" />
                </div>
            
        </div>
    </div>
  )
}

export default Nosotras