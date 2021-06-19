import {GlobalStateContext} from './GlobalStateContext'
import React, { useContext, useEffect, useState } from 'react'
import { BASE_URL } from "../Constants/url";
import { useLoopHook } from '../hooks/useLoopHook';
export const GlobalState = (props) => {
  const [pokedex, setPokedex] = useState([])
  const [listaDePokemon, setListaDePokemon] = useState([])
  const listaInicial = useLoopHook([], BASE_URL)
  
  useEffect(()=>{
  setListaDePokemon(listaInicial)
  },[listaInicial])

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
