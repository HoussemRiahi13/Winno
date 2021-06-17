import { Checkbox, TextField } from '@material-ui/core';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import Button from '@material-ui/core/Button'
export const Container = styled.div`
width: 100%;
height: 100vh;
`
export const Form = styled.div`
 width: 50%;
 height: 80%;
 justify-content:space-evenly;
 display:flex;
 flex-direction:column;
 align-items:center;
 margin:auto;
 transform:translate(0,5%);
box-shadow:1px 2px 4px black;
border-radius:5px;
`
export const MyTextField = styled(TextField)`
 width: 80%;
`
export const Alert = styled.div`
 width: 60% ;
 display: 'flex';
 position:fixed;
 border:1px solid black;
 padding:1%;
 border-radius:10px;
 top:50%;
 left:50%;
 background-color:white;
 z-index: 1;
 transform:translate(-50%,-50%);
 height: 40vh ;
 transition:.5s ease-out all;
 > span {
     font-size:40px;
     position:absolute;
     font-weight:bold;
     cursor:pointer;
     top:1vmin;
     right:1vmin;
 }
`
export const ButtonWrapper = styled.div`
 width: 80%;
 display:flex;
 align-items:center;
 justify-content:space-between;
`

export const Chose = styled.div`
 width: 50%;
 display:flex;
 align-items:center;
 justify-content:space-around;
 flex-direction:column;
 height: 30vh;
 position:absolute;
 top:50%;
 left:50%;
 transform:translate(-50%,-50%);
`
export const MyButton = styled(Button).attrs(({theme,primary})=>({
    color: primary ? "primary" : "secondary"
}))`
 width:${({alone})=>alone ? '80' : '40'}%;
`