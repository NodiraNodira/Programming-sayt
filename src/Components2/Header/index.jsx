import React from "react";
import { Button, Container,Contain,Img,LinkWord,Button2,Icon} from "./style";

import icon2 from '../../assets/icons/about.png';
import icon1 from '../../assets/icons/code.png';
import headerIcon from '../../assets/icons/header2Icon.png';


const  Header=()=> {
  return (
    <Container >
      <Img src={headerIcon} alt="" />
      <Contain>
          <Icon src={icon1} alt="" /><LinkWord style={{marginRight:'-15%'}}>Courses</LinkWord>
          <Icon src={icon2} alt="" /><LinkWord>About</LinkWord>
          <Button> <h4 style={{marginLeft:"15px"}} >Sign Up / Sign In </h4></Button>
          </Contain>

          <Button2> <h4 style={{marginLeft:"15px"}} >Помощь </h4></Button2>
    </Container>
  );
}

export default Header;
