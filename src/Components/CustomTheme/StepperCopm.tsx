import React, { Component } from "react";
import {
  Stepper,
  Step,
  StepLabel,
  Button,
  Box,
  Typography,
  Card,
  CardContent,
} from "@mui/material";

import { theme } from "../../App";
import { Styles } from "./StepperComp.styles";
import { withStyles } from "@mui/styles";
import Email from "./Email";
import Password from "./Password";
import Status from "./Status";

const steps = ["Enter Email", "Enter Password", "login "];

type Props = {
  classes: any;
};

type State = {
  activeState: any;
  skipped: any;
  email: String;
  password: String;
  confirmpass: String;
};

class StepperCopm extends Component<Props, State> {
  state: State = {
    activeState: 0,
    skipped: new Set<number>(),
    email: "",
    password: "",
    confirmpass: "",
  };

  handleNext = () => {
    const { activeState } = this.state;

    this.setState({ activeState: activeState + 1 });
  };
  handleBack = (inc: number) => {
    this.setState((state) => ({
      activeState: state.activeState - inc,
    }));
  };
  handleStep = (index: any) => {
    if (
      this.state.email !== "" ||
      this.state.password !== "" ||
      this.state.confirmpass !== ""
    ) {
      this.setState({ activeState: index });
    }
    // this.setState({ activeState: index });
  };

  emailPassed = (e: any) => {
    this.setState({ email: e.target.value });
  };
  passwordPass = (e: any) => {
    this.setState({ password: e.target.value });
  };
  confirmPassword = (e: any) => {
    this.setState({ confirmpass: e.target.value });
  };

  getStepsContent = (steps: any) => {
    const { email, password, confirmpass, activeState }: any = this.state;
    switch (steps) {
      case 0:
        return (
          <>
            <Email
              email={email}
              emailPassed={this.emailPassed}
              back={this.handleBack}
              next={this.handleNext}
              activeState={activeState}
            />
          </>
        );
      case 1:
        return (
          <>
            <Password
              password={password}
              passwordPass={this.passwordPass}
              confirmPassword={this.confirmPassword}
              confirmpass={confirmpass}
              next={this.handleNext}
              back={this.handleBack}
              steps={steps}
              activeState={activeState}
            />
          </>
        );
      case 2:
        return (
          <>
            <Status
              next={this.handleNext}
              back={this.handleBack}
              steps={steps}
              activeState={activeState}
            />
          </>
        );
      default:
        return "unknown";
    }
  };

  render() {
    // console.log(this.state.activeState, "state");
    // const mobile = theme.breakpoints.down("md");
    const { activeState } = this.state;

    const { classes } = this.props;

    return (
      <Box sx={{ width: "100%" }}>
        <Stepper
          // orientation={w ? "vertical" : "horizontal"}
          activeStep={this.state.activeState}
        >
          {steps.map((step: any, index: any) => {
            return (
              <Step key={index}>
                <StepLabel
                  className={classes.label}
                  onClick={() => this.handleStep(index)}
                >
                  {step}
                </StepLabel>
              </Step>
            );
          })}
        </Stepper>

        {activeState === steps.length ? (
          <Typography variant="h6"> Sucessfully Login</Typography>
        ) : (
          <>
            <Box
              sx={{
                m: 2,
              }}
            >
              {this.getStepsContent(activeState)}
            </Box>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                p: 2,
              }}
            >
              {/* <Button
                variant="contained"
                sx={{
                  bgcolor: "secondary.main",
                }}
                onClick={() => this.handleBack(1)}
                disabled={this.state.activeState === 0}
              >
                Back
              </Button> */}
              {/* <Button
                variant="contained"
                sx={{
                  bgcolor: "secondary.main",
                }}
                onClick={this.handleNext}
                disabled={
                  activeState === 0 ? !email : !password || !confirmpass
                }
              >
                {activeState === steps.length - 1 ? "Finish" : "Next"}
              </Button> */}
            </Box>
          </>
        )}
      </Box>
    );
  }
}

export default withStyles(Styles)(StepperCopm);
