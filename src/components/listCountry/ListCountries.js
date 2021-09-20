import React, { useState, useEffect, Fragment } from 'react'
import Filter from '../filter/Filter'
import Country from '../country/Country';
import Loading from '../../assests/images/loading.gif';
import "./ListCountries.scss"
import Flag from './../country/Country';
const ListCountries = () => {
    
    // base fetched data:
    const [storedFlags, setStoredFlags] = useState([]);
    
  
    
    let [load , setLoad] = useState(true);
    let [valLoading,setValLoading] = useState("laoding");
    // data to store filtered data temporary:
    const [flags, setFlags] = useState([])
    const [term, setTerm] = useState('')
    
    const handleSearch = () => {
        // filtering with input criteria/term: 
        
        const filteredBySearchTerm = storedFlags.filter(
            ({ name, nativeName, capital, region }) => {
                // TODO: this could be enhanced with an elegant way, instead of this shit.
                const cleanName = name?.toLowerCase()
                const cleanNativeName = nativeName?.toLowerCase()
                const cleanCapital = capital?.toLowerCase()
                const cleanRegion = region?.toLowerCase()

                return (
                    cleanName?.includes(term) ||
                    cleanCapital?.includes(term) ||
                    cleanRegion?.includes(term) ||
                    cleanNativeName?.includes(term)
                )
            }
        )
        console.log("filterstersm:",filteredBySearchTerm);
         
        setFlags(filteredBySearchTerm);
        if(filteredBySearchTerm.length ===0) return false;
        else return true;
        
    }
    const fetchData = async() => {
        
            const result = await fetch('https://restcountries.eu/rest/v2/all')
            const data = await result.json()
        
            setStoredFlags(data)
            setFlags(data);
            
        
    }
    // Before before before before 
    useEffect(()=>{
        fetchData();
        
    }, []);


    // BAfter after after after aftar
    // useEffect(
    //     async () => {
    //     const result = await fetch('https://restcountries.eu/rest/v2/all')
    //     const data = await result.json()

    //     setStoredFlags(data)
    //     setFlags(data);
        
    // }
    // , [])

    useEffect(() => {
        handleSearch();
        
    }, [term])

    const handleAll = () => {
        setFlags(storedFlags);
    }
    return (
        <>
            {/* 1) get the data from user input*/}
            <Filter getInputVal={(searchTerm) => setTerm(searchTerm)} setAll={()=> handleAll()}/>
            {flags.length ? (
                    <div className="list-flags container countries">
                        { flags.map((flag) => (
                            <Country key={flag.name} {...flag} />
                        ))}
                    </div>
                ) :(<img src={Loading} className="loading" alt="loading" loading="lazy" />)   
            }
        </>
    )
}

export default ListCountries
