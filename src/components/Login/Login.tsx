import { Box, Button, Grid } from "@material-ui/core";
import React, { useContext } from "react";
import { Context } from "../..";
import firebase from "firebase/compat/app"

export const Login = () => {
  const { auth } = useContext(Context);
  const login = async () =>{
    const provider = new firebase.auth.GoogleAuthProvider()
    const user = await auth.signInWithPopup(provider);
    console.log(user);
  }
  return (
    <>
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
            <Button onClick={login} variant={"outlined"}>Войти с помощью Google</Button>
          </Box>
        </Grid>
      </Grid>
    </>
  );
}
