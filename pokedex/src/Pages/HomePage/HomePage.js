import React from "react";
import { BASE_URL } from "../../Constants/url";
import useRequestData from "../../hooks/useRequest";
import CardPoke from "../../Components/CardPoke";
import Header from "../../Components/Header/Header";
import {DivContainer, Card, ButtonCard} from "./Styled"
import { useHistory } from "react-router-dom";
import { goToDetail} from "../../Routes/coordinator"
import { useGlobal, useGlobalSetters, useGlobalStates } from "../../Global/GlobalState";


function HomePage() {
  const history = useHistory()
  const { listaDePokemon } =  useGlobalStates()

  const pokebolaVai = (id) =>{
    const copiaLista = [...listaDePokemon]
    copiaLista.forEach((poke)=>{
      if(poke.name===id){poke.pokedex = true}
    })
    setListaDePokemon(copiaLista)
  }
const {setListaDePokemon} = useGlobalSetters()

  return (
    <div>
      <Header title={"PokeHome"}/>
        <DivContainer>
          {listaDePokemon && listaDePokemon.filter(tira=>{return !tira.pokedex}).map((poke)=>{
              return(
                  <Card>
                    <CardPoke nome={poke.name} />
                    <h2>{poke.name}</h2>
                    <div>
                      <ButtonCard onClick={()=>pokebolaVai(poke.name)} >Adicionar a Pokedex</ButtonCard>
                      <ButtonCard onClick={()=>goToDetail(history,poke.name)}>Ver Detalhes</ButtonCard>
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