import React from 'react'
import { useEffect, useState } from 'react';
import axios from 'axios';

import {Link} from 'react-router-dom'

export const Pokemons = () => {
    const [pokeData , setPokeData] = useState([]);
    const [url, setUrl] = useState("https://pokeapi.co/api/v2/pokemon/");
    const [nextUrl, setNextUrl] = useState();
    const [prevUrl, setPrevUrl] = useState();
    const [disable, setDisable] = React.useState(true);


    const pokeFunc = async() => {
        const res = await axios.get(url);

        setNextUrl(res.data.next);
        setPrevUrl(res.data.previous);
        getPokemonData(res.data.results);
       

        console.log("PREV", res.data.previous);
        console.log("NEXT", res.data.next);

        if (res.data.previous != null) {
            setDisable(false);
        } else {
            setDisable(true);
        }
    }
    

    const getPokemonData = async(res) => {
        res.map(async(item)=>{
            const result =  await axios.get(item.url);
            // console.log("MAP DATA", result.data);
            setPokeData(state => {
                state = [...state,result.data]
                state.sort((a,b) => a.id>b.id?1:-1)
                return state;
            })
           
        })
        
    }


    useEffect(() => {
        pokeFunc()
    }, [url])

    return(
    <div className="">
    {pokeData.map(
        (pokeData, index) => {
            return(
                <div className="">
                <div className="card__name">
          
                  <img
                    src={pokeData.sprites.front_default}
                    alt={pokeData.name}
                    />
          
                  <div className="">
                    <h2 className="h2pok">{pokeData.name[0].toUpperCase() + pokeData.name.substring(1)}</h2>
                  
                  </div>
          
                </div>
                <Link to={`/pokemon/${pokeData.id}`}>
                <button className="btnsee">See</button>
                </Link>
              </div> 
            )
        }
    )}
    {
        
  <div className="btn-div">
                    <button type="button" disabled={disable} className="button" onClick={()=> {
                        setPokeData([])
                        setUrl(prevUrl)
                    }}>Previous</button>&nbsp;&nbsp;
                    <button type="button" className="button" onClick={()=>{
                        setPokeData([])
                        setUrl(nextUrl)
                    }}>Next</button>&nbsp;&nbsp;
                </div>
  }
</div>

    )
    
}
