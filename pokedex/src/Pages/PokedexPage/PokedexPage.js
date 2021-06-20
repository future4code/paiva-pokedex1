import React from "react";
import CardPoke from "../../Components/CardPoke";
import Header from "../../Components/Header/Header";
import {DivContainer, Card, ButtonCard} from "./Styled"
import {goToDetail} from "../../Routes/coordinator"
import { useHistory } from "react-router-dom";
import { useGlobalSetters, useGlobalStates } from "../../Global/GlobalState";

function PokedexPage () {
  
  const pokebolaVolta = (id) =>{
    const copiaLista = [...listaDePokemon]
    copiaLista.forEach((poke)=>{
      if(poke.name===id){poke.pokedex = false}
    })
    setListaDePokemon(copiaLista)
  }

const history = useHistory()
const { listaDePokemon } =  useGlobalStates()
const {setListaDePokemon} = useGlobalSetters()

  return (
    <div>
      <Header title={"Pokedex"}/>
        <DivContainer>
          {listaDePokemon && listaDePokemon.sort(function(a, b){return a.number-b.number}).filter(tira=>{return tira.pokedex}).map((poke)=>{
              return(
                  <Card key={poke.name} >
                    <CardPoke nome={poke.name} photo={poke.front_default} />
                    <h2>{poke.name}</h2>
                    <div>
                      <ButtonCard onClick ={()=>pokebolaVolta(poke.name)}>Remover da Pokedex</ButtonCard>
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