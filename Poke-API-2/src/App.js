import './App.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { BrowserRouter, Route, Routes} from 'react-router-dom';

import { Navbar } from './components/navbar';

import {Pokemons} from "./routes/Pokemons"      ////Routes
import {Pokemon} from "./routes/Pokemon"
import {Student} from "./routes/Student"
import {Search} from "./routes/Search"


function App() {
  const [id, setId] = useState(200)
  const [pokemon, setPokemon] = useState({

  });

  useEffect(() => {
    const get = async () => {
      const data = await axios.get("https://pokeapi.co/api/v2/pokemon/200")
      setPokemon({
        name: data.data.name,
        image: data.data.sprites.front_default,
        experience: data.data.base_experience,
        weight:data.data.weight,
      })
      return data.data
    }
    get()
    }, []);


  const getInfo = async (id) => {
    console.log(id)
      const data = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`)
      setPokemon({
        name: data.data.name,
        image: data.data.sprites.front_default,
        experience: data.data.base_experience,
        weight:data.data.weight,
      });      console.log(data.data)
    let a = id + 1;
    setId(a)
  }

  const reducePok = async (id) => {
    if(id<0){
      return
    }
    else{
      const data = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`)
      setPokemon({
        name: data.data.name,
        image: data.data.sprites.front_default,
        experience: data.data.base_experience,
        weight:data.data.weight,

      }); console.log(data.data)
      console.log(data.data.abilities)
    let a = id - 1;
    setId(a)
    }
  }


  return (
  
<div>
      <BrowserRouter>
      <div className='w-36'>
      <Navbar/>
      </div>
        <Routes>
          <Route path="/" element={<Pokemons />} />
          <Route path="/pokemon/:id" element={<Pokemon />} />
          <Route path="/181972" element={<Student />} />
          <Route path="/search" element={<Search/>} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;
