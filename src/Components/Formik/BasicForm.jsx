import * as React from "react";

import { TextField, Button, Box } from "@mui/material";
import { Formik } from "formik";

export default function BasicForm() {
  return (
    <Box
      sx={{
        p: 4,
        m: 4,
      }}
    >
      <Formik 
      initialValues={{name:"umair", email: 'a@a.com', password: '1234' }}
      onSubmit={(values) => console.log(values)}
      >
        <Box
          component="form"
          sx={{
            p: 4,
            m: 4,
            width: "500px",
            display: "grid",
            gridTemplateRow: "20px 20px 20px",
            rowGap: "15px",
          }}
        >
          <TextField required id="outlined-required" name="name" label="Name" />
          <TextField id="outlined-disabled" name="email" label="Email" />
          <TextField
            id="outlined-password-input"
            label="Password"
            type="password"
            name="password"
            autoComplete="current-password"
          />
          <Button variant="contained" color="inherit">
            Submit
          </Button>
        </Box>
      </Formik>
    </Box>
  );
}
