import React from 'react'
import { useParams } from 'react-router-dom';
import  { useEffect, useState } from 'react'
import axios from "axios"


export const Pokemon = () => {
  const params= useParams();
  const [pokemon, setPokemon] = useState({
    name: '',
    weight: '',
    height: '',
    base_experience: '',
    sprites:{
      front_default:''
    },
    abilities: [],
    types: [],
    stats: [],

  })
  

  useEffect(()=>{
    const pokemon= async ()=>{
      const res= await axios("https://pokeapi.co/api/v2/pokemon/"+params.id)
      console.log(res.data.sprites.front_default);
      setPokemon(res.data)
    }
    pokemon()
  },[])

  return (
    <div class="card__name" >
        <img class="" src={pokemon.sprites.front_default} alt="" />
    <div class="">
        <a href="#">
            <h5 class="">{pokemon.name}</h5>
        </a>
        <p class="">Weight: {pokemon.weight}kg<br></br>Height: {pokemon.height} cm</p>
    </div>
    <div className="">
              <div className="">
                <h2>Abilities:</h2>
              </div>
              <div className="">
                {pokemon.abilities.map(ability => (
                  <p className="" key={ability.ability.name}>{ability.ability.name}</p>
                ))}
              </div>
      </div>
      <div className="">
              <div className="">
                <h2>Type:</h2>
              </div>
              <div className="">
                {pokemon.types.map(type => (
                  <p className="" key={type.type.name}>{type.type.name}</p>
                ))}
              </div>
            </div>
</div>
  )
}
