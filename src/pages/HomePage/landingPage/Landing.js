import React from 'react'
import styled from 'styled-components';
import Bg from './assets/bg.png';
import { Button } from "../../../globalStyles";
const Container = styled.div`
 width: 100%;
 height: 90vh;
 background:url(${Bg});
 background-position:right;
 background-size:40%;
 background-repeat:no-repeat;
 background-color:white ;
 display:flex;
 align-items:center;
 justify-content:space-around;
 padding:2%;
 
 
 @media screen and (max-width: 768px) {
    max-width: 100%;
    flex-basis: 100%;
    display: flex;
    justify-content: center;
  }

`
const Text=styled.div`
position:absolute;
 top: 25%;
 left:10%;
 width: 40%;
 display:flex;
 flex-direction:column;
 align-items:flex-start;
`
const Title=styled.h2`
font-size:100%;
`
const Slogan=styled.h1`
font-size:70px;
`
const Description=styled.p`
font-size:20px;
 color:${({theme})=>theme.text.secondaryTextColor}
`

function Landing() {
    return (
        <Container>
          <Text>
          <Title>Prenez soin de la </Title>
          <Slogan>santé de votre animal</Slogan>
          <Description>Winno est la 1ère plateforme de conseils vétérinaires en Tunisie. 
          Accéder à nos services que vous soyez unvétérinaire 
          ou propriétaire d'animal domestique. .</Description>
          </Text>
         
        </Container>
    )
}

export default Landing
