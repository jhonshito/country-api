
import React from 'react'
import '../styles/paises.css'

const Paises = ({ data, filtro, filterSelect}) => {

    const paisesFilter = data.filter((e) => e.name.common.toLowerCase().includes(filtro.toLowerCase())) .filter((a) => a.continents[0].toLowerCase().includes(filterSelect.toLowerCase()))
  return (
    <div className='contenedor'>
         {

            paisesFilter.map((item, index) => (
                <section className='contenedorCard shadow' key={index}>
                <div className="cardImg">
                    <img className='img' src={item.flags.png} alt="" />
                </div>
                <div className="cardText">
                    <div className="textos">
                        <div className="titulo">
                            <h2 className='nombre'>{item.name.common}</h2>
                        </div>
                        <div className="parrafos">
                            <p>Population: <span>{item.population}</span></p>
                            <p>Region: <span>{item.continents}</span></p>
                            <p>Capital: <span>{item.capital}</span></p>
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