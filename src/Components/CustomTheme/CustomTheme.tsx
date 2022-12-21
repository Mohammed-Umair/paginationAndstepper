import { Box, Container, Paper } from "@mui/material";
import React, { Component } from "react";
import StepperCopm from "./StepperCopm";
// import StepperCopm from "./StepperCopm";

type Props = {};

type State = {};

class CustomTheme extends Component<Props, State> {
  state = {};

  render() {
    return (
      <Box p={4}>
        <Container component={Paper} sx={{ p: 4 ,width:"500px"}}>
          <StepperCopm />
        </Container>
      </Box>
    );
  }
}

export default CustomTheme;
