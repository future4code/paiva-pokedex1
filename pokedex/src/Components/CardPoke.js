import React, {useEffect, useState} from "react";
import axios from "axios";
import styled from 'styled-components'
import { BASE_URL } from "../Constants/url";

const ImgPoke = styled.img`
width: 150px;
`



function CardPoke (props) {
    // const [data, setdata] = useState([]);

    const [photo, setPhoto] = useState({});  

  
  //   const pegarPokemons = () => {
  //   axios
  //     .get(`${BASE_URL}`)
  //     .then((resposta) => {
  //       setdata(resposta.data);
  //     })
  //     .catch((erro) => {
  //       console.log(erro);
  //     });
  // };

  const pegarPhotoPokemon = (nome) => {
    axios
      .get(`${BASE_URL}/${props.nome}`)
      .then((resposta) => {
        setPhoto(resposta.data.sprites.front_default);
      })
      .catch((erro) => {
        console.log(erro);
      });
  };

  useEffect(() =>{
      // pegarPokemons();
      pegarPhotoPokemon();
  },[])

    return (
      <div className="App">
            <ImgPoke src={photo} alt='foto pokemon'/>
      </div>
    );
}

export default CardPoke;
