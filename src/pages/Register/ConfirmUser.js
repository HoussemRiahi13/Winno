import React, { Component } from 'react'
import Button from '@material-ui/core/Button'
import styled from 'styled-components'
const ConfirmContainer = styled.div`
  display:flex;
  padding:1%;
  flex-wrap:wrap;
  flex-direction:column;
  align-items:flex-start;
  justify-content:center;
  width:80%;
  padding:1%;
  > h2 {
      
      margin:1%;
      padding:.5%;
  }
`
export default class ConfirmUser extends Component {
    prevForm= e=>{
        e.preventDefault();
        this.props.prevForm();
    }
    render() {
        console.log(this.props.values)
        const {userName,firstName,lastNames,email}=this.props.values;
        const {MyButton,ButtonWrapper} =this.props.components;
        return (
            <>
            <h1>Verifier vos info</h1>
            <ConfirmContainer>
             {userName && <h2>Nom utilisateur :{userName}</h2>}
             {firstName && <h2>Prenom :{firstName}</h2>}
             {lastNames && <h2>Nom :{lastNames}</h2>}
             {email && <h2>Email :{email}</h2>}
            </ConfirmContainer>
            <ButtonWrapper>
            <MyButton   onClick={this.prevForm} variant="contained">precedent</MyButton>
            <MyButton  primary onClick={this.props.submit} variant="contained">Confirmer</MyButton>  
            </ButtonWrapper>  
            </>
        )
    }
}
