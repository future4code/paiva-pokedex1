import React from "react";
import axios from "axios";
import { BASE_URL } from "../Constants/url";

export default class App extends React.Component {
  state = {
    listPokemons: [],
    photoPokemon: ""
  };

  pegarPokemons = () => {
    axios
      .get({})
      .then((resposta) => {
        this.setState({ listPokemons: resposta.data.results });
      })
      .catch((erro) => {
        console.log(erro);
      });
  };

  pegarPhotoPokemon = (nome) => {
    axios
      .get(``)
      .then((resposta) => {
        this.setState({ photoPokemon: resposta.data.sprites.front_default });
      })
      .catch((erro) => {
        console.log(erro);
      });
  };

 

  componentDidMount() {
    this.pegarPokemons();
  }

  render() {
    return (
      <div className="App">
        <div>
           <option value={""}></option>
            {this.state.listPokemons.map((poke) => {
              return (
                <option key={poke.name} value={poke.name}>
                  {poke.name}
                </option>
              );
            })}
        
        </div>
        {this.state.imagemPokemon && (
          <img alt={"photo"} src={this.state.imagemPokemon} />
        )}
      </div>
    );
  }
}
