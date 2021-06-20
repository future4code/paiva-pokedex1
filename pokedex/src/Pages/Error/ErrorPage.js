import React from "react";
import Header from '../../Components/Header/Header'
import pikaChijo from '../../img/pika.jpeg'
import {ImagemErro} from './Styled'

function Error () {
  return (
    <div>
      <Header title={'ERRO!'}/>
      <ImagemErro src={pikaChijo} alt='Meme PikaChijo'/>
    </div>
  );
}

export default Error;