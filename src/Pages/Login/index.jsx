import React from "react";
import { Form, Main } from "./styles";
import Field from "../../Components/Field";

function Login() {
  return (
    <Main>
      <Form>
        <Field.Text label="Email" name="email" type="email" />
      </Form>
    </Main>
  );
}

export default Login;
