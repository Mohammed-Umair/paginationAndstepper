import React, { Component } from "react";
import { Formik, Form, Field } from "formik";
export default class DemoForm extends Component {
  render() {
    return (
      <div>
        <Formik
          initialValues={{ name: "", email: "", password: "", gender: "" }}
          validate={(values) => {
            const errors = {};
            if (!values.email) {
              errors.email = "Required";
            } else if (
              !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
            ) {
              errors.email = "Invalid email address";
            } else if (values.name.length === 0) {
              errors.name = "Required";
            }else if(values.password.length>3){
              errors.password="Required";
            }
            return errors;
          }}
          onSubmit={(values) => console.log(values)}
        >
          {({
            values,
            errors,
           

            handleSubmit,
          }) => (
            <Form onSubmit={handleSubmit}>
              <label>Name:</label>
              <Field name="name" type="text" />
              { errors.name}

              <br />
              <br />
              <label>Email:</label>
              <Field name="email" type="email" />
              <br />
              {errors.password}

              <br />
              <br />

              <label>password:</label>
              <Field name="password" type="password" />
              <br />
              <br />
              <label>Gender:</label>
              <br />
              <br />
              <label>male:</label>
              <Field name="gender" value="male" type="radio" />

              <label>female:</label>
              <Field name="gender" value="female" type="radio" />
              <br />
              <br />

              <button type="submit">Submit</button>
            </Form>
          )}
        </Formik>
      </div>
    );
  }
}
