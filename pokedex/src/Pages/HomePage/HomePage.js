import React from "react";
import axios from "axios";
import CardPoke from "../../Components/CardPoke";
import { BASE_URL } from "../../Constants/url";
import useRequestData from "../../hooks/useRequest";


function HomePage() {
  const pokemons = useRequestData ({},`${BASE_URL}/?offset=20&limit=20`)
  
  const photo = useRequestData ({}, `${BASE_URL}/1`)
  console.log('pokemons', photo[0])

  const pegarPokemon = (nome) => {
    axios
      .get(``)
      .then((resposta) => {
        this.setState({ photoPokemon: resposta.data.sprites.front_default });
      })
      .catch((erro) => {
        console.log(erro);
      });
  };


  
  return (
    <div>
      <CardPoke/>
     {pokemons && pokemons[0].results && pokemons[0].results.map((poke)=>{
return(
  <div>
      <p key={poke.name}>{poke.name}</p>
         
  </div>
)
})
}
    </div>
  );
}

export default HomePage;