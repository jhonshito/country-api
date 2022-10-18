
import React from 'react'
import { useEffect } from 'react';
import { useParams } from 'react-router'

const DataPaises = () => {
    let {name} = useParams();

    console.log(name)
    
    const fetchData = async function(){
        const res = await fetch(`https://restcountries.com/v3.1/name//${name}`)
        const datos = await res.json();
        console.log(datos)
    }

    useEffect(() => {
        fetchData()
    },[])
  return (
    <div>DataPaises</div>
  )
}

export default DataPaises