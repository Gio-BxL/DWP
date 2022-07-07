import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'





export class Search extends Component {


    state={
        searchPokemon:''
    }

    onChangeForm=(e)=>{
        this.setState({searchPokemon:e.target.value})
    }

    onSubmitForm=(e)=>{
        e.preventDefault();
        console.log(this.state.searchPokemon)
        this.getPokemon(this.state.searchPokemon)
        window.location.href=`/pokemon/${this.state.searchPokemon}`;

    }

    async getPokemon(pokemon){
        const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
        console.log(res)
    }
    


    render() {
        return (
            <nav className="">
                <div className="divpr">
                    <form className="form-inline" onSubmit={this.onSubmitForm}>
                        <input 
                        className="form-control mr-sm-2" 
                        type="search" 
                        placeholder="Search" 
                        aria-label="Search"
                        value={this.state.searchPokemon}
                        id="caja_texto"
                        onChange={this.onChangeForm}
                        />
                        <button className="btnsearch" type="submit" id="enviar"><i className="fa fa-search ">Send</i></button>
                    </form>
                    
                </div>
            </nav>
            
        )
    }
}   

