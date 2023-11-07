import React from "react";
import { Button, Container,Contain} from "./style";



const  Header=()=> {
  return (
    <Container >
      <Contain>
          <p>Courses</p>
          <p>About</p>
          <Button> Sign Up / Sign In </Button>
          </Contain>
    </Container>
  );
}

export default Header;
