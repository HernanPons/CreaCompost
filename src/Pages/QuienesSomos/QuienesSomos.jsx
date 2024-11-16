import React from 'react'
import './QuienesSomos.css'


const QuienesSomos = () => {
  return (
    <div className='quienesContainer' id='quienes-somos'>
        <div className='primerTexto'>
            <h1 className='text-gray'>Somos</h1>
            <h1 className='text-green'>creacompost</h1>
            <h1 className='text-green2'>creaverde</h1>
            <br />
            <h3 className='sansLight'>Somos una empresa que entiende a la naturaleza como una  economía circular, donde el concepto de basura prácticamente no existe.</h3>
        </div>

        <div className='segundoTexto'>
            <br /> <br />
            <h1 className='text-green'>Nuestros</h1>
            <h1 className='text-green2'>servicios</h1>
            <br />
            <h3 className='sansLight'>Elegí los programas de formación ambiental, productos sustentables, experiencias de compostaje y huertas agroecológicas que se adapten a tus necesidades.</h3>
        </div>
    </div>
  )
}

export default QuienesSomos