import React,{useLayoutEffect,useRef,useState,useEffect} from 'react';
import { Link } from 'react-router-dom';

import {
    InfoSec,
    InfoRow,
    InfoColumn,
    TextWrapper,
    TopLine,
    Subtitle,
    Container,
    Heading,
    Grid,
    Row ,
    Card ,
    CardHeader,
    CardBody , 
    Avatar , 
    Col

    
  } from './Services.elements';






function Services() {
    return (
        <InfoSec>
        <Container>
          <InfoRow >
            <InfoColumn>
              <TextWrapper>
                <TopLine>Feautures</TopLine>
                <Heading>Vet help and Strategists</Heading>
                <Subtitle>Un grand choix de vétérinaires partout en Tunisie pour soigner vos animaux de compagnie (Chiens, Chats, Rongeurs, Reptiles, Oiseaux, ...).</Subtitle>
              </TextWrapper>
            </InfoColumn>
            <InfoColumn>
           
           <Container>
              
               <Row>
              
                   <Card>
                   <Avatar>
                       </Avatar>
                       <CardHeader>
                     
                         <h2>Pet Profile</h2>
                       </CardHeader>
                       <CardBody>
                           <p>
                           Really easy to use and customize. easy to understand. Darinka helped me 
                           with my site! She answers very quickly, a good service! 
                           </p>
                       </CardBody>
                       
                   </Card> <Card>
                   <Avatar>
                       </Avatar>
                       <CardHeader>
                     
                         <h2>Online appointement</h2>
                       </CardHeader>
                       <CardBody>
                           <p>
                           Really easy to use and customize. easy to understand. Darinka helped me 
                           with my site! She answers very quickly, a good service! 
                           </p>
                       </CardBody>
                       
                   </Card>
              
                 
                   
                   
               </Row>
           </Container>
        
            </InfoColumn>
          </InfoRow>
        </Container>
      </InfoSec>
    
    )
}

export default Services

