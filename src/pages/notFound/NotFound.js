import React,{useEffect} from 'react'
import { useHistory } from 'react-router-dom';
import notFound from "../../assests/images/notFound.gif"
import "./NotFound.scss"
const NotFound = () => {
    const history = useHistory(); 
    
    useEffect(()=>{
        setTimeout( ()=> {
            history.push('/');
        },3700)
     },[history]);

    return (
        <>
        <div className="container">
            <div className="box-notfound">
               <img src={notFound} alt="NotFound"  className="img-notfound"/>
            </div>
         </div>
        </>
    )
}

export default NotFound
