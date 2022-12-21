import { Box, Button, TextField } from "@mui/material";
import React, { Component } from "react";

type Props = {
  activeState: any;
  email: any;
  emailPassed: (id: any) => void;
  back: (id: any) => void;
  next: (id: any) => void;
};

type State = {};

class Email extends Component<Props, State> {
  state = {};

  render() {
    const { email, emailPassed, back, activeState, next } = this.props;
    return (
      <>
        <TextField
          variant="outlined"
          fullWidth
          margin="normal"
          label="Enter Email"
          placeholder="Enter Email"
          value={email}
          onChange={(e) => emailPassed(e)}
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
            disabled={activeState === 0}
          >
            Back
          </Button>
          <Button
            variant="contained"
            sx={{
              bgcolor: "secondary.main",
            }}
            onClick={next}
            disabled={!email}
          >
            {/* {activeState === steps.length - 1 ? "Finish" : "Next"} */}
            next
          </Button>
        </Box>
      </>
    );
  }
}

export default Email;
