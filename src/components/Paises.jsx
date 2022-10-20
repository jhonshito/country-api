
import React from 'react'
import '../styles/paises.css'
import { Link } from 'react-router-dom'

const Paises = ({ data, filtro, filterSelect}) => {

    const paisesFilter = data.filter((e) => e.name.common.toLowerCase().includes(filtro.toLowerCase())) .filter((a) => a.continents[0].toLowerCase().includes(filterSelect.toLowerCase()))

    // jhon este es para el desafio de mañana cuando lo veas lo entenderas
    // console.log(data)

    // if(paisesFilter.length == []){
    //     Swal.fire({
    //         icon : 'error',
    //         title : `Ooops el pais: ¡${filtro}! no existe`,
    //         text : 'Intentalo de nuevo',
    //     })
    // }
  return (
    <div className='contenedor'>
         {

            paisesFilter.map((item, index) => (
                <section className='contenedorCard shadow'key={index}>
                    <Link to={`/dataPaises/${item.name.common}`}>
                <div className="cardImg">
                    <img className='img' src={item.flags.png} alt="" />
                </div>
                </Link>
                <div className="cardText">
                    <div className="textos">
                        <div className="titulo">
                            <h2 className='nombre'>{item.name.common}</h2>
                        </div>
                        <div className="parrafos">
                            <p className='items'>Population: <span>{item.population}</span></p>
                            <p className='items'>Region: <span>{item.continents}</span></p>
                            <p className='items'>Capital: <span>{item.capital}</span></p>
                        </div>
                    </div>
                </div>
            </section>
            ))
        }
    </div>
  )
}

export default Paises