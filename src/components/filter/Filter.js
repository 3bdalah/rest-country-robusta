import React,{useState  } from 'react'
import "./Filter.scss";
const Filter = ({getInputVal,setAll}) => {
    const [openMenu, setOpenMenu] = useState(true)

    const handleClick = () => {
        setOpenMenu(!openMenu)
    }

    const region = [ 'Africa', 'Americas', 'Asia', 'Europe', 'Oceania']

    return (
        <>
            <div className="container">
                <input
                    id="search"
                    className="search"
                    type="text"
                    placeholder="Search for a country"
                    onChange={(e) => getInputVal(e.target.value.toLowerCase())}
                />

                <div
                    className={openMenu ? 'list-region' : 'list-region open'}
                    id="filter"
                    onClick={() => handleClick()}
                >
                    Filter by Region
                    {/* <i className="fas fa-chevron-down"></i> */}
                    <ul className="list-links">
                        <li>
                            <button  
                            className="link"
                            onClick={()=>{setAll()}}>
                               All
                            </button>
                        </li>
                        {region.map((r) => (
                            <li key={r}>
                                <button
                                    className="link"
                                    onClick={() =>
                                        getInputVal(r.toLowerCase().trim())
                                    }
                                >
                                    {r}
                                </button>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Filter
