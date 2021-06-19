import React from "react";
import {useParams} from "react-router-dom"
import useRequestData from "../../hooks/useRequest";
import {ContainerPhoto, PokeImage, MainContainer, ContainerDetalhes, Container } from "./Styled"
import { BASE_URL } from "../../Constants/url"


function CardDetails() {
  const params = useParams();
  const pokeDetails = useRequestData({},`${BASE_URL}/${params.id}`);
  const pokemon = pokeDetails
  return (
    <Container>
      {pokemon && pokemon.forms ? (
        <MainContainer>
          <>{pokemon.forms.name}</>
          <>
            <>
              <ContainerPhoto>
                <PokeImage
                  src={pokemon.sprites.front_default}
                  alt={pokemon.forms.name}
                />
                 <PokeImage
                  src={pokemon.sprites.back_default}
                  alt={pokemon.forms.name}
                />
              </ContainerPhoto>
              <ContainerDetalhes>
                <p>
                  <h3>Tipos:</h3>
                </p>
                {pokemon.types.map((item) => {
                  return <p>{item.type.name}</p>;
                })}
              </ContainerDetalhes>
            </>
            <>
              <ContainerDetalhes>
              <h3>Poderes:</h3>
                {pokemon.stats.map((item) => {
                  return (
                    <p>
                      <strong>{item.stat.name}: </strong>
                      {item.base_stat}
                    </p>
                  );
                })}
              </ContainerDetalhes>
            </>
            <>
              <ContainerDetalhes>
                <h3>Principais Ataques:</h3>
                {pokemon.moves.map((item, index) => {
                  return index < 5 && <p>{item.move.name}</p>;
                })}
              </ContainerDetalhes>
            </>
          </>
        </MainContainer>
      ) : null}
    </Container>
  );
}
export default CardDetails;
