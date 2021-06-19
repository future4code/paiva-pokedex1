import React from "react";
import styled from 'styled-components'

const ImgPoke = styled.img`
width: 150px;
`



function CardPoke (props) {

  //   const [photo, setPhoto] = useState({});  


  // const pegarPhotoPokemon = (nome) => {
  //   axios
  //     .get(`${BASE_URL}/${props.nome}`)
  //     .then((resposta) => {
  //       setPhoto(resposta.data.sprites.front_default);
  //     })
  //     .catch((erro) => {
  //       console.log(erro);
  //     });
  // };

  // useEffect(() =>{
  //     pegarPhotoPokemon();
  // },[])

    return (
      <div className="App">
            <ImgPoke src={props.photo} alt={props.name}/>
      </div>
    );
}

export default CardPoke;
