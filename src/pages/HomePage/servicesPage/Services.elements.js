import styled from 'styled-components';
import {motion} from 'framer-motion';
const containerVariants = {
  initial:{
    x:-1000
  },
  animate:{
    x:0
  }
}
export const Avatar = styled.div`
    width: 7vmin;
    
    height: 7vmin;
    background-color : ${({theme})=>theme.secondaryColor};
    background-size: cover;
    background-position: top center;
    border-radius: 50%;
`;
export const InfoSec = styled(motion.div)`
  color: #fff;
  width: 100%;
  height: 90vh;
  padding: 60px 0;
  background: ${({theme})=>theme.backgroundColor};
`;

export const InfoRow = styled(motion.div)`
  display: flex;
  margin: 0 75px ;
  flex-wrap: wrap;
  align-items: center;
  flex-direction:  'row';
`;

export const InfoColumn = styled(motion.div).attrs(()=>({
  variants:containerVariants,
  initial:'initial',
  animate:'animate'
}))`
  margin-bottom: 15px;
  padding-right: 15px;
  padding-left: 15px;
  flex: 1;
  max-width: 50%;
  flex-basis: 50%;

  @media screen and (max-width: 768px) {
    max-width: 100%;
    flex-basis: 100%;
    display: flex;
    justify-content: center;
  }
`;

export const TextWrapper = styled(motion.div)`
  max-width: 540px;
  padding-top: 0;
  padding-bottom: 60px;

  @media screen and (max-width: 768px) {
    padding-bottom: 65px;
  }
`;


export const TopLine = styled.div`
  color:${({theme})=>theme.text.titleColor}; ;
  font-size: 18px;
  line-height: 16px;
  font-weight: 700;
  letter-spacing: 1.4px;
  margin-bottom: 16px;
`;

export const Img = styled.img`
  padding-right: 0;
  border: 0;
  max-width: 100%;
  vertical-align: middle;
  display: inline-block;
  max-height: 500px;
`;

export const Heading = styled.h1`
  margin-bottom: 24px;
  font-size: 48px;
  line-height: 1.1;
  font-weight: 600;
  color: ${({theme})=>theme.text.primaryTextColor};
`;

export const Subtitle = styled.p`
  max-width: 440px;
  margin-bottom: 35px;
  font-size: 18px;
  line-height: 24px;
  color: ${({theme})=>theme.text.secondaryTextColor};
`;
export const Grid = styled.div`
  color: #fff;
  padding: 0;
  margin : 0 ;
  height:30vh;
  box-sizing : border-box ;
  background: red;
`;
export const Container = styled.div`
  width : 100% ; 
  height: 80vh;
  
  margin :  auto ;
  
  display:flex;
  flex-direction:column;
  align-items:center;
  justify-content:space-evenly;
  @media screen and (max-width: 620px) {
    width: 100%;
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
cursor: pointer;
  width : 25vh ;
  height: 34vh;
  padding:3%;
  margin-left :9.5vh;
  background : white ;
  border:1px solid white;
  margin-bottom : 50px ;
  transition : 0.3s ;
  text-align : left; 
  display:flex;
  align-items:left;
  border-radius : 20px;
  flex-direction:column;

  &:hover  {
    transform : scale(1.09);
    box-shadow : 0 0 40px -10px rgba (0,0,0,0.25);
  }
  @media screen and (max-width: 800px) {
    width: 80%;
  }
`;
export const CardHeader = styled.div`
   text-align : centre ; 
   padding:10%;
   font-size : 10px ;
   align-items : center;
   color : #000 ;
`;
export const CardBody = styled.div`
   text-align : centre ; 
   text-overflow: ellipsis;
  
   font-size : 10px ;
   color :${({theme})=>theme.text.titleColor};
   height: 25%;
   padding:10%;
   
`;
