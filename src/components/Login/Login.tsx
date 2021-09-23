import { Box, Button, Container, Grid } from "@material-ui/core";
import React from "react";
import firebase from "firebase/compat/app";
import { useMySelector } from "../../hooks/useMySelector";

export const Login = () => {
  const { auth } = useMySelector(store => store.authFirebase);;
  const login = async () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    await auth.signInWithPopup(provider);
  };
  return (
    <Container>
      <Grid
        style={{ height: window.innerHeight - 64 }}
        container
        alignItems={"center"}
        direction="column"
        justifyContent={"center"}
      >
        <Grid
          style={{ width: 400, background: "lightgray" }}
          container
          alignItems={"center"}
          direction="column"
        >
          <Box p={5}>
            <Button onClick={login} variant={"outlined"}>
              Войти с помощью Google
            </Button>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};
