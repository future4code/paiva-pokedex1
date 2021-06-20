import React from "react";
import { useHistory } from "react-router-dom";
import { goToPokedex, goTohome } from "../../Routes/coordinator";
import { ContainerHeader, ContainerButtonLeft, ContainerButtonRigth } from './styled';

const Header = ({ title, ButtonLeft, ButtonRigth}) => {
  const history = useHistory();

  return (
    <ContainerHeader>
      <ContainerButtonLeft onClick={()=>goTohome(history)}>
       Home
      </ContainerButtonLeft>

      <h1>{title}</h1>
     

        <ContainerButtonRigth onClick={() => goToPokedex(history)}>
          Pokedex
        </ContainerButtonRigth>
      
    </ContainerHeader>
  
  )
};

export default Header;