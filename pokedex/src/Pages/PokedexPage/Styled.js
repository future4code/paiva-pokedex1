import styled from 'styled-components'

export const DivContainer = styled.div `
  display:flex;
  justify-content: center;
  flex-wrap:wrap;
`
export const Card = styled.div `
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #F1F1F1;
  width: 280px;
  height: 300px;
  margin: 10px;
  padding: 2px;
  border-radius: 10px;
  border: 3px solid #5FC480;
`
export const ButtonCard = styled.button `
  margin-right: 5px;
  padding: 10px;
  background-color:#5FC480;
  border-radius: 5px;
  font-weight: bold;
`