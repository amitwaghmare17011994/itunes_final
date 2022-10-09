import { Container, Typography } from "@material-ui/core";
import React from "react";
import { Link } from "react-router-dom";
import PageNotFoundImg from "@images/404.png";

function PageNotFound() {
  return (
    <Container style={{ display: "flex", flexDirection: "column",alignItems:'center',minHeight:'100vh',minWidth:'100%',backgroundColor:'white' }}>
      <img src={PageNotFoundImg} style={{ width: 300, height: 300,marginBottom:30 }} />
      <Link to={"/"}>Go to Login</Link>
    </Container>
  );
}

export default PageNotFound;
