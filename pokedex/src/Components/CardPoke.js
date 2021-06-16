import React, {useEffect, useState} from "react";
import axios from "axios";
import { BASE_URL } from "../Constants/url";

function CardPoke () {
    const [data, setData] = useState([]);

    const [photo, setPhoto] = useState({});  

  
    const pegarPokemons = () => {
    axios
      .get(`${BASE_URL}/?offset=20&limit=20`)
      .then((resposta) => {
        setData(resposta.data);
      })
      .catch((erro) => {
        console.log(erro);
      });
  };

  const pegarPhotoPokemon = () => {
    axios
      .get(`${BASE_URL}/spearow`)
      .then((resposta) => {
        setPhoto({ photoPokemon: resposta.data.sprites.front_default });
      })
      .catch((erro) => {
        console.log(erro);
      });
  };
  console.log('foto', photo);
  console.log('nome', data);

  useEffect(() =>{
      pegarPokemons();
      pegarPhotoPokemon();
  },[])

    return (
      <div className="App">
        {/*<div>
           <option value={""}></option>
            {data.listPokemons.map((poke) => {
              return (
                <option key={poke.name} value={poke.name}>
                  {poke.name}
                </option>
              );
            })}
        
        </div>
        {this.state.imagemPokemon && (
          <img alt={"photo"} src={this.state.imagemPokemon} />
        )}*/}
      </div>
    );
}

export default CardPoke;
