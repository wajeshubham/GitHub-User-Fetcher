import React, { useContext, useState, useEffect } from "react";
import {
  Container,
  Row,
  Input,
  Form,
  Button,
  FormGroup,
  Label,
  Col,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
} from "reactstrap";

import firebase from "firebase/app";
import UserContext from "../context/UserContext";
import { Redirect } from "react-router-dom";
import { toast } from "react-toastify";

function SignUp() {
  const context = useContext(UserContext);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignUp = () => {
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then((res) => {
        console.log(res);
        context.setUser({ email: res.user.email, uid: res.user.uid });
      })
      .catch((error) => {
        console.log(error);
        toast(error.message, { type: "error" });
      });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleSignUp();
  };

  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(context.user));
  }, [handleSignUp]);

  if (context.user?.uid) {
    return <Redirect to="/" />;
  } else {
    return (
      <Container className="text-center">
        <Row>
          <Col lg={6} className="offset-lg-3 mt-5">
            <Card>
              <Form onSubmit={handleSubmit}>
                <CardHeader className="">
                  <h4>Register here</h4>
                </CardHeader>
                <CardBody>
                  <FormGroup row>
                    <Label for="email" sm={3}>
                      <h6>Email</h6>
                    </Label>
                    <Col sm={9}>
                      <Input
                        type="email"
                        name="email"
                        id="email"
                        placeholder="Enter your Email..."
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Label for="password" sm={3}>
                      <h6>Password</h6>
                    </Label>
                    <Col sm={9}>
                      <Input
                        type="password"
                        name="password"
                        id="password"
                        placeholder="Enter your Password..."
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                      />
                    </Col>
                  </FormGroup>
                </CardBody>
                <CardFooter>
                  <Button type="submit" block color="primary">
                    Register
                  </Button>
                  <p className="mt-3 mb-2">
                    Already have an Account? <a href="/signin">Log in here</a>
                  </p>
                </CardFooter>
              </Form>
            </Card>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default SignUp;
