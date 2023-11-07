import React from "react";
import Header from "../Header";
import img from '../../assets/images/logo.png';
import compyuter from '../../assets/images/compyuter.jpg';
import program from '../../assets/images/program.jpg';
import team from '../../assets/images/team.jpg';

import img1 from '../../assets/images/img1.jpg';
import img2 from '../../assets/images/img2.jpg';
import img3 from '../../assets/images/img3.jpg';
import img4 from '../../assets/images/img4.jpg';
import img5 from '../../assets/images/img5.jpg';
import img6 from '../../assets/images/img6.jpg';

import { Container,Nav,Title,Img,PartOne,PartOneItem,PartOneItemTitle,
  PartOneItemText,Button,PartTwoItem,Img1,Img2,Img3,Section,Box,BoxContainer,BoxWrapper} from "./style";
import { Card } from "@mui/material";


const  Main=()=> {
  return (
    <div>
      <Header />
    <Container >
        <Nav>
        <Title>Programming Hub Press Kit</Title>
        </Nav>
        <PartOne>
          <Img src={img} alt="rasm" />

          <PartOneItem>
            <PartOneItemTitle> Overview </PartOneItemTitle>
            <PartOneItemText>Programming Hub is a simple, fast and interactive App, to learn any programming language. 
              Our learning platform is available in Android, iOS and web with over 6 Million+ downloads worldwide.
              </PartOneItemText>

              <PartOneItemTitle>Tagline</PartOneItemTitle>
              <PartOneItemText>Your personal programming companion.</PartOneItemText>
              <Button><h4 style={{marginLeft:'20px'}} >Download Press Kit</h4></Button>
          </PartOneItem>
        </PartOne>

        <PartTwoItem>
            <PartOneItemTitle> How it works </PartOneItemTitle>

            <div style={{display:'flex'}}>
            <div>
            <PartOneItemText>
              Fun, fast and easy - Along with Duolingo like environment and readily available content, 
              the app is also super easy to use.
            </PartOneItemText>

            <PartOneItemText>
              Run the code - Writing, compiling and running the code has been this optimised with an in-built compiler.
            </PartOneItemText>

            <PartOneItemText>
            Save and Share the code - Save your code progress and resume any time and share the code via PDF, mail or social media.
            </PartOneItemText>
            </div>

            <div style={{marginLeft:30}} >
            <PartOneItemText>
            Users can upgrade to pro version at monthly, yearly or lifetime basis.
            </PartOneItemText>

            <PartOneItemText>
            Monthly - $ 9.33/-, Yearly - $ 112/-, Lifetime - $ 375/-
            </PartOneItemText>

            <PartOneItemText>
            To avail pro access, Programming Hub is currently offering a 90% off for the Lifetime membership and it is now available at just $ 39/-
            </PartOneItemText>
            </div></div>
              
          </PartTwoItem>

          <div>
          <Img1 src={compyuter} alt="rasm" />
          </div>

          <Button><h4 style={{marginLeft:'30px'}} >Download </h4></Button>

      <Section>
        <h5 style={{marginTop:70,background:"red"}}>Logo</h5>
        <Img2 src={program} alt="rasm" />
      </Section>

      Team Programming Hub
      <Img2 src={team} alt="rasm" />

      <BoxContainer>
        <BoxWrapper style={{display:'flex'}}>

        <Box><Img3 src={img1} alt="rasm" />Google Editor’s Choice</Box>
        <Box><Img3 src={img2} alt="rasm" />Google Best App 2017</Box>
        <Box><Img3 src={img3} alt="rasm" />Google LaunchPad Accelerator</Box>
        
        </BoxWrapper>

        <BoxWrapper style={{display:'flex'}} >

        <Box><Img3 src={img4} alt="rasm" />Featured on Product Hunt</Box>
        <Box><Img3 src={img5} alt="rasm" />Facebook Award</Box>
        <Box><Img3 src={img6} alt="rasm" />Kyoorius Digital Award</Box>

        </BoxWrapper>
      </BoxContainer>



      
    </Container>
    </div>
  );
}

export default Main;
