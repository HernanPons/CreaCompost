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
                
                <a href="https://www.tiendanube.com/" className='primerCurso'>
                    <img className='fotoHuerta' src="/Images/HuertaAgroecologica2.png" alt="foto huerta agroecologica" />
                    <h2 className='verMas' >ver mas <img className='flechaVerMas' src="/Images/VerMas.png" alt="" /> </h2>
                </a>

                <a href="https://www.tiendanube.com/" className='segundaCurso'>
                    <img className='fotoCompostaje' src="/Images/Compostaje2.png" alt="foto compostaje" />
                    <h2 className='verMas' >ver mas <img className='flechaVerMas' src="/Images/VerMas.png" alt="" /> </h2>
                </a>

        </div>
    </div>
  )
}

export default Cursos