import React from "react";
import { useHistory } from "react-router-dom";
import { goToPokedex } from "../../Routes/coordinator";

const Header = ({ title, ButtonLeft, ButtonRigth}) => {
  const history = useHistory();

  const buttonTitleLeft = () => {
    switch (title) {
      case "Lista":
        return "Pokedex";
      case "Pokédex":
        return "Voltar";
      default:
        return "Voltar";
    }
  };

  return (
    <ContainerHeader>
      <ContainerButtonLef onClick={ButtonLeft}>
        {buttonTitleLeft()}
      </ContainerButtonLef>

      <h1>{title}</h1>
     

        <ContainerButtonRigth onClick={() => goToPokedex(history)}>
          Ir para pokedex
        </ContainerButtonRigth>
      )
    </ContainerHeader>
  
  )
};

export default Header;
