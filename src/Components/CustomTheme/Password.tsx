import { Box, Button, TextField } from "@mui/material";
import React, { Component } from "react";

type Props = {
  password: any;
  passwordPass: (id: any) => void;
  confirmpass: any;
  confirmPassword: (id: any) => void;
  next: (id: any) => void;
  back: (id: any) => void;
  activeState: any;
  steps: any;
};

type State = {};

class Password extends Component<Props, State> {
  state = {};

  render() {
    const {
      password,
      passwordPass,
      confirmpass,
      confirmPassword,
      next,
      activeState,
      back,
      steps,
    } = this.props;

    return (
      <>
        <TextField
          variant="outlined"
          fullWidth
          margin="normal"
          label="Enter password"
          placeholder="Enter  Password"
          value={password}
          onChange={(e) => passwordPass(e)}
        />
        <TextField
          variant="outlined"
          fullWidth
          margin="normal"
          label="Confirm password"
          placeholder="Confirm  Password"
          value={confirmpass}
          onChange={(e) => confirmPassword(e)}
        />
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
            disabled={!password || !confirmpass}
          >
            Next
          </Button>
        </Box>
      </>
    );
  }
}

export default Password;
