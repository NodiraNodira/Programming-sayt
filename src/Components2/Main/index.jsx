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

import gif1 from '../../assets/icons/gif1.svg';
import gif2 from '../../assets/icons/gif2.svg';
import gif3 from '../../assets/icons/gif3.svg';
import gif4 from '../../assets/icons/gif4.svg';

import video1 from '../../assets/video/video1.mp4'

import GoogleIcon from '../../assets/images/google.jpg';
import FacebookIcon from '../../assets/images/facebook.jpg';
import IconP from '../../assets/icons/p.jpg';

import { Container,Nav,Title,Img,PartOne,PartOnetext1,PartOnetext2,PartOnetext2_A,PartOnetext2_B,PartOnetext2_C,PartOneItem,PartOneItemTitle,
  PartOneItemText,ButtonTwo,PartTwo,CarouselContainer,CarouselButton,Part3,Part4,Img1,Img2,Img3,Section,Box,BoxContainer,BoxWrapper,Text1,Text2,ButtonOne,
VideoText} from "./style";
// import { Card } from "@mui/material";


const  Main=()=> {
  return (
    <div>
      <Header />
    <Container >
        <Nav>
        <Title>
          <Text1 >Programming Hub, a new way to learn programming</Text1>
          <Text2  >Interactive, simple & made for you</Text2>
          <ButtonOne><h4 style={{fontSize:"20px",marginLeft:"95px",marginTop:"13px"}}>Learn Now</h4></ButtonOne>
          </Title>

        {/* Start First gif  */}
{/* <div class="col-6 text-center">
  <div title="" role="button" aria-label="animation" tabindex="0" style="width: 450px; height: 100%; 
  overflow: hidden; margin: 0px auto; outline: none;">
    <img src={gif1} alt="" />
    </div></div> */}

<div><img style={{width:'450px',marginTop:"115px",marginLeft:"34%"}}  src={gif1} alt="" /></div>

        </Nav>

        <PartOne >
          <PartOnetext1>Recognized By</PartOnetext1>
          <PartOnetext2>
            <PartOnetext2_A src={GoogleIcon} />
            <PartOnetext2_B src={FacebookIcon} />
             <PartOnetext2_C src={IconP}  /> 
          </PartOnetext2>
        </PartOne>


        {/* <PartOne>
          <Img src={img} alt="rasm" />

          <PartOneItem>
            <PartOneItemTitle> Overview </PartOneItemTitle>
            <PartOneItemText>Programming Hub is a simple, fast and interactive App, to learn any programming language. 
              Our learning platform is available in Android, iOS and web with over 6 Million+ downloads worldwide.
              </PartOneItemText>

              <PartOneItemTitle>Tagline</PartOneItemTitle>
              <PartOneItemText>Your personal programming companion.</PartOneItemText>
              <ButtonTwo>Download Press Kit</ButtonTwo>
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


          




          <ButtonTwo>Download</ButtonTwo>

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
  </BoxContainer>*/}


<PartTwo>
    <video width="520px" height="540px" controls style={{position:"relative"}}>
  <source src={video1} type="video/mp4" />
   </video>

   <VideoText style={{marginTop:"5px",color:"red"}} >hello</VideoText>

   </PartTwo>


   <CarouselContainer>
    <buttonWrap>
    <CarouselButton>Research Backed</CarouselButton>
    <CarouselButton>Fun & Interactive</CarouselButton>
    <CarouselButton>Additional Benefits</CarouselButton>
    </buttonWrap>

    <img style={{width:'450px',height:'300px',marginTop:"100px",border:"1px solid black",marginLeft:"0"}}  src={gif2} alt="" />

   </CarouselContainer>

   <Part3>
    

    <img style={{width:'450px',height:'300px',marginTop:"200px",border:"1px solid black"}}  src={gif3} alt="" />

   </Part3>

   <Part4>
    

    <img style={{width:'450px',height:'300px',border:"1px solid black"}}  src={gif4} alt="" />

   </Part4>

    </Container> 





   










    </div>
  );
}

export default Main;
