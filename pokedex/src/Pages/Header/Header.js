import React from "react";
import { useHistory } from "react-router-dom";
import { goToPokedex } from "../../Routes/coordinator";
import { ContainerHeader, ContainerButtonLeft, ContainerButtonRigth } from './styled';

const Header = ({ title, ButtonLeft, ButtonRigth}) => {
  const history = useHistory();

  const buttonTitleLeft = () => {
    switch (title) {
      case "Lista de Pokemon":
        return "Pokedex";
      case "Pokédex":
        return "Voltar";
      default:
        return "Voltar";
    }
  };

  return (
    <ContainerHeader>
      <ContainerButtonLeft onClick={ButtonLeft}>
        {buttonTitleLeft()}
      </ContainerButtonLeft>

      <h1>Pokedex</h1>
     

        <ContainerButtonRigth onClick={() => goToPokedex(history)}>
          Ir para pokedex
        </ContainerButtonRigth>
      
    </ContainerHeader>
  
  )
};

export default Header;