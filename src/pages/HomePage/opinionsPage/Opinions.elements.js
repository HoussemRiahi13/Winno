import styled from 'styled-components';
export const Grid = styled.div`
  color: #fff;
  padding: 0;
  margin : 0 ;
  
  box-sizing : border-box ;
  background: ${({theme})=>theme.backgroundColor};
`;
export const Container = styled.div`
  width : 90% ; 
  height: 90vh;
  
  margin :  auto ;
  
  display:flex;
  flex-direction:column;
  align-items:center;
  justify-content:space-evenly;
  @media screen and (max-width: 620px) {
    width: 100%;
  }
`;
export const Heading = styled.h1`
color:${({theme})=>theme.text.titleColor};
  font-size:3vmin;
  text-align : centre ; 
  justify-self:center;
  @media screen and (max-width: 800px) {
    padding: 20px ;
    font-size : 25px ;
  }
`;
export const Row = styled.div`
  display: flex ;
  flex-direction : row ; 
  justify-content : space-around ;
  flex-flow :  wrap ;
  text-align : centre ; 
`;
export const Card = styled.div`
background-color:red;
  width : 30% ;
  height: 100%;
  padding:1%;
  border-radius : 25px;
  background : white ;
  border:1px solid white;
  margin-bottom : 50px ;
  transition : 0.3s ;
  text-align : centre ; 
  display:flex;
  align-items:center;
  justify-content:space-between;
  flex-direction:column;
  text-align:center;
  &:hover  {
    transform : scale(1.05);
    box-shadow : 0 0 40px -10px rgba (0,0,0,0.25);
  }
  @media screen and (max-width: 800px) {
    width: 80%;
  }
`;
export const CardHeader = styled.div`
   text-align : centre ; 
   
   align-items : center;
   color : #000 ;
`;
export const CardBody = styled.div`
   text-align : centre ; 
   text-overflow: ellipsis;
  
   font-size : 20px ;
   color :${({theme})=>theme.text.titleColor};
   height: 25%;
   padding:1%;
   
`;
export const Avatar = styled.div`
    width: 30vmin;
    background-image: url('http://i.stack.imgur.com/Dj7eP.jpg');
    height: 30vmin;
    background-size: cover;
    background-position: top center;
    border-radius: 50%;
`;