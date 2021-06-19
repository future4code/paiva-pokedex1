import {GlobalStateContext} from './GlobalStateContext'
import React, { useContext, useEffect, useState } from 'react'
import useRequestData from '../hooks/useRequest'
import { BASE_URL } from "../Constants/url";

export const GlobalState = (props) => {
  const [pokedex, setPokedex] = useState([])
  const [listaDePokemon, setListaDePokemon] = useState([])
  const listaInicial = useRequestData([], BASE_URL)
  useEffect(()=>{
  setListaDePokemon(listaDePokemons)
  },[listaInicial])
  const listaDePokemons = listaInicial.results

  const states = {pokedex, listaDePokemon}
  const setters = {setPokedex, setListaDePokemon}

  return <GlobalStateContext.Provider value={{ states, setters }}>
    {props.children}
  </GlobalStateContext.Provider>
}

export const useGlobal = () => {
  return useContext(GlobalStateContext)
}

export const useGlobalStates = () => {
  const {states} = useGlobal()
  return states
}

export const useGlobalSetters = () => {
  const {setters} = useGlobal()
  return setters
}
