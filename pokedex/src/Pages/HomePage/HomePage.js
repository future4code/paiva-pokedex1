import React from "react";
import axios from "axios";
import { BASE_URL } from "../../Constants/url";
import useRequestData from "../../hooks/useRequest";
import styled from 'styled-components'
import CardPoke from "../../Components/CardPoke";
import Header from "../Header/Header";


const DivContainer = styled.div `
  display:flex;
  justify-content: space-around;
  flex-wrap:wrap;
`

const Card = styled.div `
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #F1F1F1;
  width: 280px;
  height: 300px;
  margin: 10px;
  padding: 2px;
  border-radius: 10px;
  border: 3px solid #5FC480;
`

const ButtonCard = styled.button `
  margin-right: 5px;
  padding: 10px;
  background-color:#5FC480;
  border-radius: 5px;
  font-weight: bold;
`


function HomePage() {
  const pokemons = useRequestData ({},`${BASE_URL}`)
  
  // const photo = useRequestData ({}, `${BASE_URL}/1`)
  console.log('pokemons', pokemons)

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


  
  return (
    <div>
      <Header />
        <DivContainer>
          {pokemons && pokemons[0].results && pokemons[0].results.map((poke)=>{
              return(
                  <Card>
                    <CardPoke nome={poke.name} />
                    <h2>{poke.name}</h2>
                    <div>
                      <ButtonCard>Adicionar a Pokedex</ButtonCard>
                      <ButtonCard>Ver Detalhes</ButtonCard>
                    </div>
                  </Card>  
          )
          })
          }
        </DivContainer>
    </div>
  );
}

export default HomePage;