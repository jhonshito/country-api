
import React from 'react';
import '../styles/app.css';
import { useState } from 'react';
import { useEffect } from 'react';
import Paises from './Paises';
import Navbar from './Navbar';

const App = () => {

    const [data, setData] = useState([]);

    const [filterName, setFilterName] = useState('');
    const [filterSelect, setFilterSelect] = useState('');

    const fetchData = async function(){
        const res = await fetch('https://restcountries.com/v3.1/all');
        const datos = await res.json()
        setData(datos)
        // console.log(datos)
    }

    const region = function(campoRegion){
        switch(campoRegion){
            case 'todos':
                setFilterSelect(filterName)
                console.log('todos')
            break;
            case 'africa':
                setFilterSelect('africa')
                console.log('africa')
            break;
            case 'america':
                setFilterSelect('america')
                console.log('america')
            break;
            case 'asia':
                setFilterSelect('asia')
                console.log('asia')
            break;
            case 'europe':
                setFilterSelect('europe')
                console.log('europe')
            break;
            case 'oceania':
                setFilterSelect('oceania')
                console.log('oceania')
            break;
        }
    }

    // console.log(filterName)
    useEffect(() => {
        fetchData();
    },[])
  return (
    <main>
        <Navbar />
        <div className=" mt-3">
            <div className="filtros">
                <div className='input-wrapper'>
                    <input 
                        type="text"
                        className='input shadow'
                        placeholder='Search for a country...'
                        onChange={(e) => setFilterName(e.target.value)}
                    />
                    <i className="bi bi-search"></i>
                </div>
                <select
                    className='select shadow'
                    onChange={(e) => region(e.target.value)}
                >
                    <option disabled selected>Filter by Region</option>
                    <option value="todos">Todos</option>
                    <option value="africa">Africa</option>
                    <option value="america">America</option>
                    <option value="asia">Asia</option>
                    <option value="europe">Europe</option>
                    <option value="oceania">Oceania</option>
                </select>
            </div>
            <Paises data={data} filtro={filterName} filterSelect={filterSelect} />
      </div>
    </main>
  )
}

export default App
