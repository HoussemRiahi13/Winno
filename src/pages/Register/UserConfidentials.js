import React, { Component } from 'react'
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider'
import Button from '@material-ui/core/Button'
import { TextField } from '@material-ui/core';
export default class UserConfidentials extends Component {
    continue = e=>{
        e.preventDefault();
        this.props.nextForm();
    }
    prevForm= e=>{
        e.preventDefault();
        this.props.prevForm();
    }
    
    render() {
        const {values,handleChange,components:{MyTextField,MyButton,ButtonWrapper}} = this.props;
        return (
            
                <>
                <h1>Creation de Compte</h1>
                <MyTextField
                  label="Email"
                  variant="outlined"
                  onChange={handleChange("email")}
                  defaultValue={values.email}
                />
                  <MyTextField
                  label="mot de passe"
                  variant="outlined"
                  onChange={handleChange("password")}
                  defaultValue={values.password}                  
                 />
                  <MyTextField
                  label="confirmer mot de passe"
                  variant="outlined"
                  onChange={handleChange("confirmPassword")}
                  defaultValue={values.confirmPassword}
                 />
                 <ButtonWrapper>
                 <MyButton variant="contained" onClick={this.prevForm} >Precedent</MyButton>
                  <MyButton disabled={this.props.disable()}  variant="contained" onClick={this.continue} primary>Confirmer</MyButton>
                  
                  </ButtonWrapper>
                </>
            
        )
    }
}
