import React from 'react'
import {
    Container,
    Heading,
    Grid,
    Row ,
    Card ,
    CardHeader,
    CardBody , 
    Avatar
  } from './Opinions.elements';
function Opinions() {
    return (
        <Grid>
           <Container>
               <Heading>
                   <h1>Ce qu'ils disent de nous</h1>
               </Heading>
               <Row>
                   <Card>
                       <CardBody>
                           <p>
                           Really pleasing to look at! Documentation (including installation instructions) 
                           are clear and that is coming from a relatively new WordPress user.
                           </p>
                       </CardBody>
                       <CardHeader>
                       <Avatar>
                       </Avatar>
                         <h2>Ahmed Klai</h2>
                       </CardHeader>
                   </Card>
                   <Card>
                       <CardBody>
                           <p>
                        Completely beautiful website and amazing support! This is my second website
                        from this author and I love both of the sites so much 
                           </p>
                       </CardBody>
                       <CardHeader>
                       <Avatar>
                       </Avatar>
                         <h2>Ahmed Klai</h2>
                       </CardHeader>
                   </Card>
                   <Card>
                       <CardBody>
                           <p>
                           Really easy to use and customize. easy to understand. Darinka helped me 
                           with my site! She answers very quickly, a good service! 
                           </p>
                       </CardBody>
                       <CardHeader>
                       <Avatar>
                       </Avatar>
                         <h2>Ahmed Klai</h2>
                       </CardHeader>
                   </Card>
               </Row>
           </Container>
        </Grid>
    )
}
export default Opinions
