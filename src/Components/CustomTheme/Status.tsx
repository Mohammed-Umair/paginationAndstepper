import { Box, Button, Typography } from "@mui/material";
import React, { Component } from "react";

type Props = {
  next: (id: any) => void;
  back: (id: any) => void;
  activeState: any;
  steps: any;
};

type State = {};

class Status extends Component<Props, State> {
  state = {};

  render() {
    const { next, activeState, back, steps } = this.props;
    return (
      <>
        <Typography variant="h6">Login Successfull!!</Typography>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            p: 2,
          }}
        >
          <Button
            variant="contained"
            sx={{
              bgcolor: "secondary.main",
            }}
            onClick={() => back(1)}
          >
            Back
          </Button>
          <Button
            variant="contained"
            sx={{
              bgcolor: "secondary.main",
            }}
            onClick={next}
            // disabled={!password || !confirmpass}
          >
            finish
          </Button>
        </Box>
      </>
    );
  }
}

export default Status;
