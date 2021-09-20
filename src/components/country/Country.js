import React from 'react'

import { Link } from 'react-router-dom'
import './Country.scss'

const Flag = ({ name, flag, population, capital, region }) => {
    return (
        <>
            <Link className="card" to={`/countries/${name}`}>
                <div >
                    <img src={flag} alt={name} className="img-country" loading="lazy"/>
                    <div className="card-body">
                        <h3 className="country-name">{name}</h3>
                        <p>
                            <strong>Population:</strong>
                            {population}
                        </p>
                        <p className="country-region">
                            <strong>Region:</strong>
                            {region}
                        </p>
                        <p>
                            <strong>Capital:</strong>
                            {capital}
                        </p>
                    </div>
                </div>
            </Link>
        </>
    )
}

export default Flag
