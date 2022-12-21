import styled from "@emotion/styled";
import {
  Button,
  Grid,
  makeStyles,
  Paper,
  Step,
  StepLabel,
  Stepper,
  TextField,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import React, { Component } from "react";
// import { Controller, useFormContext } from 'react-hook-form'
// import Greeting from './Greeting'
// import MoreInfo from './MoreInfo'
// import UserForm from './UserForm'

const steps = ["Personal Details", "More Info", "Confirm Details"];

const StyledSButton = styled(Stepper)(({ theme }: any) => ({
  orientation: "horizontal",
  [theme.breakpoints.down("md")]: {
    orientation: "vertical",
  },
}));

interface IsProps {
  activeStep: number;
  skipped: any;
  firstName: String;
  lastName: String;
  email: String;
  phoneNumber: String;
}

class HomeDemo extends Component {
  state: IsProps = {
    activeStep: 0,
    skipped: new Set<number>(),
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
  };

  isStepSkipped = (step: number) => {
    const { skipped } = this.state;
    return skipped.has(step);
  };

  isStateOptional = (step: number) => {
    return step === 1;
  };

  handleReset = () => {
    this.setState({ activeStep: 0 });
  };

  handleBack = () => {
    const { activeStep } = this.state;
    this.setState({ activeStep: activeStep - 1 });
  };

  handleNext = () => {
    const { activeStep, skipped } = this.state;
    let newSkipped: any = this.state.skipped;
    if (this.isStepSkipped(activeStep)) {
      newSkipped = new Set(newSkipped.values());
      newSkipped.delete(activeStep);
    }
    this.setState({ activeStep: activeStep + 1 });
    this.setState({ skipped: newSkipped });
    this.setState({ firstName: "" });
  };

  onClickStepper = (id: any) => {
    if (this.state.firstName !== "") {
      this.setState({ activeStep: id });
    }
  };

  firstNamePassed = (e: any) => {
    this.setState({ firstName: e.target.value });
  };

  getStepContent = (step: any) => {
    const { firstName, lastName, email, phoneNumber }: any = this.state;
    switch (step) {
      case 0:
      // return <UserForm firstName={firstName} lastName={lastName} email={email} firstNamePassed={this.firstNamePassed} />
      case 1:
      // return <MoreInfo email={email} phoneNumber={phoneNumber} />
      case 2:
      // return <Greeting />
    }
  };

  render() {
    const { activeStep, skipped, firstName } = this.state;

    console.log(typeof skipped);

    return (
      <Paper elevation={2} sx={{ width: "80%", m: 2, p: 5 }} className="flex">
        <Grid container>
          <Grid item xs={3} md={12} lg={12}>
            <Stepper activeStep={activeStep}>
              {steps.map((label, index) => {
                const stepProps: any = {};
                const labelProps: any = {};

                if (this.isStepSkipped(index)) {
                  stepProps.completed = false;
                }
                return (
                  <Step
                    key={label}
                    {...stepProps}
                    onClick={(e) => this.onClickStepper(index)}
                  >
                    <StepLabel {...labelProps}>{label}</StepLabel>
                  </Step>
                );
              })}
            </Stepper>
          </Grid>
        </Grid>
        <Box>
          {activeStep === steps.length ? (
            <>
              <Box
                sx={{ display: "flex", justifyContent: "center", p: 5, mt: 5 }}
              >
                {/* <Typography>Your Data is Saved</Typography> */}
                <Button onClick={this.handleReset}>Reset</Button>
              </Box>
            </>
          ) : (
            <>
              {this.getStepContent(activeStep)}
              <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
                {activeStep !== 0 && (
                  <Button
                    color="inherit"
                    onClick={this.handleBack}
                    sx={{ mr: 1 }}
                  >
                    Back
                  </Button>
                )}
                <Box sx={{ flex: "1 1 auto" }} />
                <Button
                  type="submit"
                  disabled={firstName.length !== 2}
                  onClick={this.handleNext}
                  sx={{
                    width: "110px",
                    color: "#fff",
                    backgroundColor: "#4bc3c9",
                    "&:hover": {
                      backgroundColor: "#2c88de",
                    },
                  }}
                >
                  {activeStep === steps.length - 1 ? "Finish" : "Next"}
                </Button>
              </Box>
            </>
          )}
        </Box>
      </Paper>
    );
  }
}

export default HomeDemo;
