import React from 'react'
import './Cursos.css'

const Cursos = () => {
  return (
    <div>
        <div>
            <h1 className='tituloCursos'>Cursos</h1>
        </div>

        <br />

        <div className='cursosContainer'>
            <a href="https://creacompostcreaverde.mitiendanube.com/" className='primerCurso'>
                <div className='imagenContainer'>
                    <img className='fotoHuerta' src="/Images/HuertaAgroecologica2.png" alt="foto huerta agroecologica" />
                    <div className='greenBar'>
                    <h1>huerta</h1>
                    <h1>agroecológica</h1>
                    </div>
                </div>
                <h2 className='verMas'>ver mas <img className='flechaVerMas' src="/Images/VerMas.png" alt="" /></h2>
            </a>

            <a href="https://creacompostcreaverde.mitiendanube.com/" className='segundoCurso'>
                <div className='imagenContainer'>
                    <img className='fotoHuerta' src="/Images/Compostaje2.png" alt="foto huerta agroecologica" />
                    <div className='greenBar'>
                    <br />
                    <h1>compostaje</h1>
                    <br />
                    </div>
                </div>
                <h2 className='verMas'>ver mas <img className='flechaVerMas' src="/Images/VerMas.png" alt="" /></h2>
            </a>
        </div>
    </div>
  )
}

export default Cursos