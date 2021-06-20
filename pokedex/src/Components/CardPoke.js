import React from "react";
import styled from 'styled-components'

const ImgPoke = styled.img`
width: 150px;
`



function CardPoke (props) {

    return (
      <div className="App">
            <ImgPoke src={props.photo} alt={props.name}/>
      </div>
    );
}

export default CardPoke;
