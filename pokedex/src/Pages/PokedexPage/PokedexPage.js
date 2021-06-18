import React from "react";
import { BASE_URL } from "../../Constants/url";
import useRequestData from "../../hooks/useRequest";
import CardPoke from "../../Components/CardPoke";
import Header from "../../Components/Header/Header";
import {DivContainer, Card, ButtonCard} from "./Styled"
import {goToDetail} from "../../Routes/coordinator"
import { useHistory } from "react-router-dom";

function PokedexPage () {
  const pokemons = useRequestData ({},`${BASE_URL}`)
  
  // const photo = useRequestData ({}, `${BASE_URL}/1`)
  // const pegarPokemon = (nome) => {
  //   axios
  //     .get(``)
  //     .then((resposta) => {
  //       this.setState({ photoPokemon: resposta.data.sprites.front_default });
  //     })
  //     .catch((erro) => {
  //       console.log(erro);
  //     });
  // };

const history = useHistory()
  
  return (
    <div>
      <Header title={"Pokedex"}/>
        <DivContainer>
          {pokemons && pokemons[0].results && pokemons[0].results.map((poke)=>{
              return(
                  <Card>
                    <CardPoke nome={poke.name} />
                    <h2>{poke.name}</h2>
                    <div>
                      <ButtonCard>Remover da Pokedex</ButtonCard>
                      <ButtonCard onClick={()=>goToDetail(history,poke.name)} >Ver Detalhes</ButtonCard>
                    </div>
                  </Card>  
          )
          })
          }
        </DivContainer>
    </div>
  );
}

export default PokedexPage;