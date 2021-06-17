import React, { Component } from 'react'
import {register,test} from '../../api/authApi';
import {NavLink} from 'react-router-dom'
import UserDetails from './UserDetails';
import UserConfidentials from './UserConfidentials';
import ConfirmUser from './ConfirmUser'
import {
    ButtonWrapper,
    Form,
    Chose,
    MyButton,
    Container,
    MyTextField,
    Alert 
} from './register.elements'

class Register extends Component {
    componentDidMount(){
         test();
    }
    state = {
       user :{email:'',
       password:'',
       confirmPassword:'',
       isVet:false,
       isPetOwner:false,
       userName:'',
       firstName:'',
       lastNames:'',
       accept:false,
    },
       step:0,
       error:"",
       alert:false,
    }

    // handleChange = (e)=>{
    //     this.setState({
    //         [e.target.name]:e.target.value
    //     })
    // }
    handleChange = input => e => {
        this.setState({
            user:{
                ...this.state.user,
                [input]:e.target.value
            }
        })
    }
    disableButton = () =>{
        const {user} = this.state;
        return [!user.firstName || !user.lastNames || !user.userName,
                !user.email || !user.password || !user.confirmPassword]
               [this.state.step]
    }
    handleSubmit = async   (e)=>{
        e.preventDefault();
        const {token,error} = await register(this.state.user);
        if(error){
            this.setState({
                error:"An error occured",
                alert:true
            })
            return;
        }
        console.log("\t callbak token \t\t", token);
        this.setState({
            error:"",
            alert:false
        })
    
    }
    nextForm = ()=>{
        this.setState((prevState)=>({
            step:prevState.step + 1
        }))
    }
    prevForm = ()=>{
        this.setState((prevState)=>({
            step:prevState.step - 1
        }))
    }
    renderForm = ()=>{
    const  components = {
        MyTextField,MyButton,ButtonWrapper
    }
    return <Form>
    {   [
        <UserDetails disable={this.disableButton} components={components} nextForm={this.nextForm} handleChange={this.handleChange} values={this.state.user} />,
        <UserConfidentials disable={this.disableButton} components={components} handleChange={this.handleChange} nextForm={this.nextForm} prevForm={this.prevForm} values={this.state.user}/>,
        <ConfirmUser  components={components} values={this.state.user} prevForm={this.prevForm} submit={this.handleSubmit}/>
    ][this.state.step]}
    <h3>Vous avez un compte ? <NavLink to="/users/login">se connecter</NavLink></h3>
   </Form> ;
}
    petOrVet = ()=> 
    <Chose>
    <h1>Hello ! So Are you A pet owner or A vet ?</h1>
    <ButtonWrapper>
    <MyButton   variant="contained" primary  onClick={()=>this.setState({isPetOwner:true,isVet:false})}>I'm a PetOwner</MyButton>
    <MyButton  variant="contained"  onClick={()=>this.setState({isPetOwner:false,isVet:true})}>I'm a Vet</MyButton>
    </ButtonWrapper>
   
    </Chose>
    render() {
        return (
            <Container>
            {
            this.state.alert && <Alert>
            <h1>{this.state.error}</h1>
            <span onClick={()=>this.setState({alert:false})}>X</span>
            </Alert>  }
            {this.state.isPetOwner || this.state.isVet ? this.renderForm() : this.petOrVet()}
            </Container>
        )
    }
}

// <Form onSubmit={this.handleSubmit}>
//     </Form> ;
//     <h1>Register</h1>
//     <Input  placeholder="nom utilisateur" onChange={this.handleChange} value={this.state.userName} name='userName' type='text' required/>
//     <Input  placeholder="prenom" onChange={this.handleChange} value={this.state.firstName} name='firstName' type="text" required/>
//     <Input  placeholder="nom" onChange={this.handleChange} value={this.state.lastNames} name='lastNames' type='text' required/>
//     <Input  placeholder="email" onChange={this.handleChange} value={this.state.email} name="email" type="email" required/>
//     <Input  placeholder="mot de passe" onChange={this.handleChange} value={this.state.password} name="password" type="password" required/>
//     <Input  placeholder="confirmer mot de passe" onChange={this.handleChange} value={this.state.confirmPassword} name="confirmPassword" type="password" required/>
//     <Checkbox   onChange={this.handleChange} value={this.state.accept} name="accept" type="checkbox" required>'accepte les conditions situe dans le contrat avec winno</Checkbox>    
//     <Button submit>Registrer</Button>
//     <NavLink to="/login"></NavLink>
export default Register
