import { CircularProgress, Container, Typography } from "@material-ui/core";
import { ErrorOutlineOutlined } from "@material-ui/icons";
import React from "react";

function NotFound(props) {
  return (
    <Container
      style={{
        justifyContent: "center",
        display: "flex",
        height: 500,
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {props.showLoader ? (
          <CircularProgress />
        ) : (
          <>
            <ErrorOutlineOutlined style={{ fontSize: 100 }} />
            <Typography style={{ fontSize: 24 }}>No Results Found</Typography>
          </>
        )}
      </div>
    </Container>
  );
}

export default NotFound;
