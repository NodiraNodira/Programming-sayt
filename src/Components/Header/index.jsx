import React from "react";
import { Button, Container,Contain,Img,LinkWord,Button2,Icon,Icon1} from "./style";
import icon1 from '../../assets/icons/icon1.png';
import icon2 from '../../assets/icons/icon2.png';
import questionIcon from '../../assets/icons/questionIcon.png';
import iconP from '../../assets/icons/headerIcon.png';



const  Header=()=> {
  return (
    <Container >
      <Icon src={iconP} alt="" />
      <Contain>
          <Img src={icon1} alt="" /><LinkWord>Courses</LinkWord>
          <Img src={icon2} alt="" /><LinkWord>About</LinkWord>
          <Button> <h4 style={{marginLeft:"15px"}} >Sign Up / Sign In </h4></Button>
          </Contain>

          <Button2><Icon1   src={questionIcon} alt="" /> <h4 style={{marginLeft:"15px"}} > Помощь </h4></Button2>
    </Container>
  );
}

export default Header;
