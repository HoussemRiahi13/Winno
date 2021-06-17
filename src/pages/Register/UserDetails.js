import React, { Component } from 'react'

export default class UserDetails extends Component {
    continue = e=>{
        e.preventDefault();
        this.props.nextForm();
    }
    render() {
        const {values,handleChange,components:{MyTextField,MyButton,ButtonWrapper}} = this.props;
        return (
                <>
                <h1>Creation de Compte</h1>
                 <MyTextField
                  label="Nom Utilisateur"
                  variant="outlined"
                  onChange={handleChange("userName")}
                  defaultValue={values.userName}
                  />
                  <MyTextField
                  label="Nom"
                  variant="outlined"
                  onChange={handleChange("lastNames")}
                  defaultValue={values.lastNames}                  
                  />
                  <MyTextField
                  label="Prenom"
                  variant="outlined"
                  onChange={handleChange("firstName")}
                  defaultValue={values.firstName}
                  />
                  <MyButton disabled={this.props.disable()} primary single variant="contained" onClick={this.continue} >Continuer</MyButton>
                </>
           
        )
    }
}
