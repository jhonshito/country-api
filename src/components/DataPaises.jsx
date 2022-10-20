
import React from 'react'
import { useEffect } from 'react';
import { useParams } from 'react-router'
import { Link } from 'react-router-dom';
import { BsArrowLeft } from "react-icons/bs";
import '../styles/dataPaises.css'
import Navbar from './Navbar';
import { useState } from 'react';

const DataPaises = () => {
    let {name} = useParams();

    const [data, setData] = useState([]);
    const [objecto, setObjecto ] = useState([]);
    const [curres, setCurres] = useState([]);

    // console.log(curres[0].name)
    
    const fetchData = async function(){
      try {
        const res = await fetch(`https://restcountries.com/v3.1/name//${name}`);
        const datos = await res.json();
        setData(datos)
        setObjecto(Object.values(datos[0].languages))
        setCurres(Object.values(datos[0].currencies))
        // console.log(Object.values(datos[0].currencies))
        // console.log(datos[0].currencies)
      } catch (error) {
        console.log(error)
      }

    }

    console.log(data)
  useEffect(() => {
    fetchData()
  },[])


  return (
    <div className='dataContenedor'>
      <Navbar />
      <div className="link">
        <Link className='back shadow' to={'/'}><BsArrowLeft/>  Back</Link>
      </div>

      <div className="contenido">
        <div className="imagenContenido">
          <img className='imgContenido shadow' src={!data[0] ? data : data[0].flags.png} alt="" />
        </div>
        <div className="contenidoTextos">
          <div className="contenidoTextoUno">
            <div className="titulosAndLogo">
              <h2 className='title'>{!data[0] ? data : data[0].name.common}</h2>
              <span className='logo'>{!data[0] ? data : data[0].flag}</span>
            </div>
            <p>Native Name: <span>{!data[0] ? data : data[0].altSpellings[1]}</span></p>
            <p>Population: <span>{!data[0] ? data : data[0].population}</span></p>
            <p>Region: <span>{!data[0] ? data : data[0].region}</span></p>
            <p>Capital: <span>{!data[0] ? data : data[0].capital}</span></p>
          </div>

          <div className="contednidoDos">
            <p>Top Level Domain: <span>{!data[0] ? data : data[0].altSpellings[0]}</span></p>
            <p>Currencies: <span>{!data[0] ? data : curres[0].name}</span></p>
            <div className="lenguajes">
              <p>
                Lenguages: 
                <span>
                {
                  !data[0] ? data : objecto.map(item => (
                    item
                  ))
                
                },
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DataPaises