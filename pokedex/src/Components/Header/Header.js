import React from "react";
import { useHistory } from "react-router-dom";
import { goToPokedex, goTohome } from "../../Routes/coordinator";
import { ContainerHeader, ContainerButtonLeft, ContainerButtonRigth } from './styled';

const Header = ({ title, ButtonLeft, ButtonRigth}) => {
  const history = useHistory();

  // const buttonTitleLeft = () => {
  //   switch (title) {
  //     case "Lista de Pokemon":
  //       return "Pokedex";
  //     case "Pokédex":
  //       return "Voltar";
  //     default:
  //       return "Voltar";
  //   }
  // };

  return (
    <ContainerHeader>
      <ContainerButtonLeft onClick={()=>goTohome(history)}>
        {/* {buttonTitleLeft()} */}Home
      </ContainerButtonLeft>

      <h1>{title}</h1>
     

        <ContainerButtonRigth onClick={() => goToPokedex(history)}>
          Pokedex
        </ContainerButtonRigth>
      
    </ContainerHeader>
  
  )
};

export default Header;