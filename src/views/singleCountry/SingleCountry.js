import React, { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import Loading from "../../assests/images/loading.gif";
import './SingleCountry.scss'
const SingleCountry = () => {
    const [country, setCountry] = useState([])
    
    let { id } = useParams()
    console.log('id => ', id)
    useEffect(() => {
        const fetchCountryData = async () => {
            const response = await fetch(
                `https://restcountries.eu/rest/v2/name/${id}`
            )
            const country = await response.json()
            setCountry(country);
            console.log('country => ', country)
        }

        fetchCountryData()
    }, [id])
    // const handleTage = (newId) => {
    //     history.push(`/countries/${newId?.toLowerCase()}`);
    //     //  id = newId;
    //     //  return id;
    // }
    return (
        <>
            <section className="country">
                <Link to="/" className="btn btn-light back-to-home">
                    <i className="fas fa-arrow-left"></i> Back Home
                </Link>
                {console.log("country",country)}
                {country.length !== 0 ? (country.map((flagData) => {
                    const {
                        flag,
                        name,
                        nativeName,
                        population,
                        region,
                        subregion,
                        capital,
                        topLevelDomain,
                        currencies,
                        languages,
                        borders,
                    } = flagData;

                    return (
                        <div  className="info-country" key={name}>
                            <div className="country-inner">
                                <div className="flag">
                                    <img
                                        src={flag}
                                        alt={name}
                                        className="img-country"
                                    />
                                </div>

                                <div className="country-details">
                                        <div className="content-parts">
                                        <div className="part-left">
                                            <h2 className="title part_left_title">{name}</h2>
                                            <h5 className="title">
                                                Native Name:{' '}
                                                <span>{nativeName}</span>
                                            </h5>
                                            <h5 className="title">
                                                Population:{' '}
                                                <span>
                                                    {population.toLocaleString()}
                                                </span>
                                            </h5>
                                            <h5 className="title">
                                                Region: <span>{region}</span>
                                            </h5>
                                            <h5 className="title">
                                                Sub Region: <span>{subregion}</span>
                                            </h5>
                                            <h5 className="title">
                                                Capital: <span>{capital}</span>{' '}
                                            </h5>
                                        </div>

                                        <div className="part-right">
                                            <h5 className="title">
                                                Top Level Domain:{' '}
                                                <span>{topLevelDomain}</span>
                                            </h5>
                                            <h5 className="title">
                                                Currencies:{' '}
                                                <span>{currencies[0].name}</span>
                                            </h5>
                                            <h5 className="title">
                                                Languages:{' '}
                                                <span>{languages[0].name}</span>
                                            </h5>
                                        </div>
                                    
                                    </div>
                                    <div className="border-countries"> 
                                        {borders.length !== 0  ? (<span className="title-borders title">Border Countries: </span>): null}
                                        <div className="borders">
                                            {console.log('borders',borders)}
                                            <ul className="list-borders">
                                            {borders.map((border) => {
                                                return (
                                                    <li key={border}>
                                                        {console.log('border', border)}
                                                        {border}
                                                    </li>
                                                )
                                            })}    
                                            </ul>
                                </div>
                            </div>
                                </div>
                                
                                
                            </div>
                            
                           
                        </div>
                    )
                })) : (<img src={Loading} alt="loading" className="loading"/>)}
            </section>
        </>
    )
}

export default SingleCountry
