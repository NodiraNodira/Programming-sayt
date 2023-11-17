import React from "react";
import "./styles.css";
import styled from "styled-components";
import React from "react";

const Banner = (props) => {
    return (
      <StyledContainer image={props.image}>
        <div>{props.children}</div>
      </StyledContainer>
    );
  };
  
  <Banner image="https://m.media-amazon.com/images/M/MV5BZjRlNDUxZjAtOGQ4OC00OTNlLTgxNmQtYTBmMDgwZmNmNjkxXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg">
  <Title title="Die Hard" />
  <Tags tags={["Action", "Thriller"]} />
  <Description description="NYPD cop John McClane's plan to reconcile with his estranged wife is thrown for a serious loop when, minutes after he arrives at her office, the entire building is overtaken by a group of terrorists. With little help from the LAPD, wisecracking McClane sets out to single-handedly rescue the hostages and bring the bad guys down." />
</Banner>;