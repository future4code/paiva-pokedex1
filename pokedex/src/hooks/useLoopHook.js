import axios from "axios";
import { useEffect, useState } from "react";


export const useLoopHook= (initial, url) => {
  const [data, setData] = useState(initial);
  const listaComFoto = [];

    useEffect(() => {
        axios
          .get(url)
          .then((response) => {
            response.data.results.map((name, index)=>{
                axios.get(`https://pokeapi.co/api/v2/pokemon/${name.name}`)
                .then((res) => {
                    const objeto = {
                      number: index,  
                      name: name.name,
                      front_default: res.data.sprites.front_default
                    };
                    listaComFoto.push(objeto);
                    if (listaComFoto.length === response.data.results.length) {
                      setData(listaComFoto);
                    }
                })//fim do then
                .catch((error) => {
                    console.log(error);
                })//fim do catch
                return null
    });//fim do map
      })//fim do then response
      .catch((error) => {
        console.log(error);
    })//fim do catch 
 }, [url]);
      return data;
};